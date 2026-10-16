/**
 * Validates every rewritten tweet against its source post and updates manifest.json + report.json.
 *
 *   npx tsx content-migration/scripts/validate.ts                 full run (coordinator only)
 *   npx tsx content-migration/scripts/validate.ts --topic <id> --dry   check one topic, write nothing
 *   npx tsx content-migration/scripts/validate.ts --limit 280     override the configured limit
 *
 * Exit code 1 when any in-scope tweet fails a hard check.
 */
import { join } from 'node:path'
import { rmSync } from 'node:fs'
import {
  MANIFEST_PATH,
  REPORT_PATH,
  REVIEW_QUEUE_DIR,
  graphemeLength,
  jaccard,
  loadAllOutputs,
  loadAllReviews,
  loadAllSources,
  loadConfig,
  loadManifest,
  normalizeForCompare,
  reviewKey,
  sha,
  weightedLength,
  wordSet,
  writeJson,
  type Manifest,
  type ManifestEntry,
  type OutputEntry,
  type SourceRecord,
  type Status,
} from './lib.ts'

const args = process.argv.slice(2)
const argValue = (name: string) => {
  const i = args.indexOf(name)
  return i >= 0 ? args[i + 1] : undefined
}
const dry = args.includes('--dry')
const topicFilter = argValue('--topic')
const config = loadConfig()
const limit = Number(argValue('--limit') ?? config.limit)

const HEBREW = /[\u0590-\u05FF]/
const EMOJI = /\p{Extended_Pictographic}/u
const HASHTAG = /(^|\s)#[\p{L}\p{N}_]+/u
const THREAD_LABEL = /👇|^\s*\(?\d{1,2}\/\d{1,2}\)?\s|\s\(?\d{1,2}\/\d{1,2}\)?\s*$/
const TRUNCATED = /(…|\.\.\.)\s*$/

const sources = loadAllSources()
const sourceByKey = new Map(sources.map((s) => [s.key, s]))
const inScope = (s: SourceRecord) => !topicFilter || s.topicId === topicFilter
if (topicFilter && !sources.some((s) => s.topicId === topicFilter)) {
  throw new Error(`Unknown topic: ${topicFilter}`)
}

// ---- Load outputs + schema checks ------------------------------------------------------------

const fileErrors: { file: string; error: string }[] = []
const unknownKeys: { key: string; file: string }[] = []
const byKey = new Map<string, { entry: OutputEntry; file: string }[]>()

for (const { file, entries } of loadAllOutputs(topicFilter)) {
  if (!Array.isArray(entries)) {
    fileErrors.push({ file, error: (entries as { __parseError?: string })?.__parseError ?? 'not a JSON array' })
    continue
  }
  entries.forEach((raw, i) => {
    const e = raw as Record<string, unknown>
    const shapeOk =
      e && typeof e === 'object' &&
      typeof e.key === 'string' && typeof e.sourceHash === 'string' && typeof e.tweet === 'string' &&
      Object.keys(e).every((k) => k === 'key' || k === 'sourceHash' || k === 'tweet')
    if (!shapeOk) {
      fileErrors.push({ file, error: `entry ${i}: expected exactly {key, sourceHash, tweet} strings` })
      return
    }
    const entry = e as unknown as OutputEntry
    if (!sourceByKey.has(entry.key)) {
      unknownKeys.push({ key: entry.key, file })
      return
    }
    const list = byKey.get(entry.key) ?? []
    list.push({ entry, file })
    byKey.set(entry.key, list)
  })
}

// ---- Per-post checks -------------------------------------------------------------------------

interface Result {
  src: SourceRecord
  tweet: string | null
  tweetHash: string | null
  chars: number | null
  weighted: number | null
  stale: boolean
  errors: string[]
  warnings: string[]
}

const results: Result[] = []
const duplicateKeys: { key: string; files: string[] }[] = []

for (const src of sources.filter(inScope)) {
  const outs = byKey.get(src.key) ?? []
  const r: Result = {
    src, tweet: null, tweetHash: null, chars: null, weighted: null, stale: false, errors: [], warnings: [],
  }
  results.push(r)
  if (outs.length === 0) continue
  if (outs.length > 1) {
    duplicateKeys.push({ key: src.key, files: outs.map((o) => o.file) })
    r.errors.push(`key appears ${outs.length} times in outputs`)
  }
  const { entry } = outs[0]
  r.tweet = entry.tweet
  r.tweetHash = sha(entry.tweet)
  r.chars = graphemeLength(entry.tweet)
  r.weighted = weightedLength(entry.tweet)
  if (entry.sourceHash !== src.sourceHash) {
    r.stale = true
    continue
  }

  const t = entry.tweet
  const hasEmojiSource = EMOJI.test(src.sourceText)
  if (t.trim() === '') r.errors.push('empty tweet')
  if (t !== t.trim()) r.errors.push('leading/trailing whitespace')
  if (r.chars > limit) r.errors.push(`over limit: ${r.chars} characters > ${limit}`)
  if (r.weighted > limit) r.errors.push(`over limit: weighted length ${r.weighted} > ${limit}`)
  if (!HEBREW.test(t)) r.errors.push('no Hebrew text (language changed?)')
  if (t.includes('**')) r.errors.push('markdown bold')
  if (t.includes('\n\n')) r.errors.push('blank line — looks like several tweets glued together')
  if (HASHTAG.test(t) && !HASHTAG.test(src.sourceText)) r.errors.push('hashtag not in original')
  if (EMOJI.test(t) && !hasEmojiSource) r.errors.push('emoji not in original')
  if (THREAD_LABEL.test(t)) r.errors.push('thread label or 👇 marker')
  if (TRUNCATED.test(t)) r.errors.push('ends with an ellipsis — looks truncated')
  for (const phrase of config.fillerBlacklist) {
    if (t.includes(phrase)) r.errors.push(`filler phrase: "${phrase}"`)
  }
  const nt = normalizeForCompare(t)
  const ns = normalizeForCompare(src.sourceText)
  if (nt.length > 0 && ns.startsWith(nt)) r.errors.push('tweet is a prefix of the original — truncated, not rewritten')

  if (r.chars < config.targetMin) r.warnings.push(`short: ${r.chars} < target ${config.targetMin}`)
  if (r.chars > config.targetMax && r.chars <= limit) r.warnings.push(`above target ${config.targetMax}: ${r.chars}`)
  if (t.includes('\n')) r.warnings.push('contains a line break')
}

// Cross-post checks: identical and near-identical tweets.
const withTweet = results.filter((r) => r.tweet && !r.stale)
const byNorm = new Map<string, Result[]>()
for (const r of withTweet) {
  const n = normalizeForCompare(r.tweet!)
  byNorm.set(n, [...(byNorm.get(n) ?? []), r])
}
for (const group of byNorm.values()) {
  if (group.length < 2) continue
  for (const r of group) {
    r.errors.push(`identical to ${group.filter((o) => o !== r).map((o) => o.src.key).join(', ')}`)
  }
}
const sets = withTweet.map((r) => wordSet(r.tweet!))
for (let i = 0; i < withTweet.length; i++) {
  for (let j = i + 1; j < withTweet.length; j++) {
    const score = jaccard(sets[i], sets[j])
    if (score >= config.nearDuplicateThreshold && score < 1) {
      withTweet[i].warnings.push(`near-duplicate of ${withTweet[j].src.key} (${score.toFixed(2)})`)
      withTweet[j].warnings.push(`near-duplicate of ${withTweet[i].src.key} (${score.toFixed(2)})`)
    }
  }
}

// ---- Status + manifest -----------------------------------------------------------------------

const reviews = loadAllReviews()
const prevManifest: Manifest = loadManifest() ?? { version: 1, limit, entries: {} }
const now = new Date().toISOString()
const nextEntries: Record<string, ManifestEntry> = { ...prevManifest.entries }
const statusOf = new Map<string, ManifestEntry>()

for (const r of results) {
  const prevRaw = prevManifest.entries[r.src.key]
  const prev: ManifestEntry =
    prevRaw && prevRaw.sourceHash === r.src.sourceHash
      ? prevRaw
      : {
          topicId: r.src.topicId, sourceHash: r.src.sourceHash, status: 'pending', retries: 0,
          tweetHash: null, lastFailedTweetHash: null, review: null, errors: [], warnings: [], updatedAt: now,
        }

  let status: Status
  let retries = prev.retries
  let lastFailed = prev.lastFailedTweetHash
  let review: ManifestEntry['review'] = null
  const errors = [...r.errors]

  if (!r.tweet) {
    status = 'pending'
  } else if (r.stale) {
    status = 'stale'
    errors.push('source changed since this tweet was written')
  } else {
    const verdict = reviews.get(reviewKey(r.src.key, r.tweetHash!))
    if (verdict) review = verdict.verdict
    if (errors.length === 0 && verdict?.verdict === 'revise') {
      errors.push(`reviewer: ${verdict.reason ?? 'revise'}`)
    }
    if (errors.length > 0) {
      if (r.tweetHash !== lastFailed) {
        retries++
        lastFailed = r.tweetHash
      }
      status = retries > config.maxRetries ? 'manual_review' : 'retry'
    } else {
      status = verdict?.verdict === 'pass' ? 'ok' : 'needs_review'
    }
  }

  const entry: ManifestEntry = {
    topicId: r.src.topicId, sourceHash: r.src.sourceHash, status, retries,
    tweetHash: r.tweetHash, lastFailedTweetHash: lastFailed, review, errors, warnings: r.warnings,
    updatedAt: prev.status === status && prev.tweetHash === r.tweetHash ? prev.updatedAt : now,
  }
  nextEntries[r.src.key] = entry
  statusOf.set(r.src.key, entry)
}

// ---- Report ----------------------------------------------------------------------------------

const stats = (xs: number[]) =>
  xs.length === 0
    ? null
    : { min: Math.min(...xs), avg: Math.round(xs.reduce((a, b) => a + b, 0) / xs.length), max: Math.max(...xs) }

const countStatus = (rs: Result[], s: Status) => rs.filter((r) => statusOf.get(r.src.key)!.status === s).length
const summarize = (rs: Result[]) => ({
  originalPosts: rs.length,
  rewritten: rs.filter((r) => r.tweet && !r.stale).length,
  passingCharacterValidation: rs.filter((r) => r.tweet && !r.stale && r.chars! <= limit && r.weighted! <= limit).length,
  ok: countStatus(rs, 'ok'),
  needsReview: countStatus(rs, 'needs_review'),
  retry: countStatus(rs, 'retry'),
  manualReview: countStatus(rs, 'manual_review'),
  pending: countStatus(rs, 'pending'),
  stale: countStatus(rs, 'stale'),
})

const topicIds = [...new Set(results.map((r) => r.src.topicId))]
const report = {
  generatedAt: now,
  scope: topicFilter ?? 'all',
  limit,
  counting: 'A tweet passes only if both grapheme count and X weighted length (twitter-text) are within the limit',
  totals: {
    ...summarize(results),
    totalRetries: results.reduce((a, r) => a + statusOf.get(r.src.key)!.retries, 0),
    withWarnings: results.filter((r) => r.warnings.length > 0).length,
  },
  byTopic: Object.fromEntries(topicIds.map((t) => [t, summarize(results.filter((r) => r.src.topicId === t))])),
  missingKeys: results.filter((r) => !r.tweet).map((r) => r.src.key),
  duplicateKeys,
  unknownKeys,
  fileErrors,
  characterCounts: {
    original: stats(results.map((r) => r.src.sourceChars)),
    rewritten: stats(results.filter((r) => r.chars !== null).map((r) => r.chars!)),
  },
  posts: results.map((r) => {
    const m = statusOf.get(r.src.key)!
    return {
      key: r.src.key,
      topicId: r.src.topicId,
      status: m.status,
      originalChars: r.src.sourceChars,
      tweetChars: r.chars,
      weightedLength: r.weighted,
      retries: m.retries,
      review: m.review,
      errors: m.errors,
      warnings: m.warnings,
    }
  }),
}

if (!dry) {
  writeJson(MANIFEST_PATH, { version: 1, limit, entries: nextEntries })
  writeJson(REPORT_PATH, report)

  // Queue of tweets awaiting review, one file per topic, rebuilt for every topic in scope.
  if (topicFilter) rmSync(join(REVIEW_QUEUE_DIR, `${topicFilter}.json`), { force: true })
  else rmSync(REVIEW_QUEUE_DIR, { recursive: true, force: true })
  for (const t of topicIds) {
    const queue = results
      .filter((r) => r.src.topicId === t && statusOf.get(r.src.key)!.status === 'needs_review')
      .map((r) => ({
        key: r.src.key, tweetHash: r.tweetHash, tweet: r.tweet, chars: r.chars,
        title: r.src.title, sourceText: r.src.sourceText,
      }))
    if (queue.length) writeJson(join(REVIEW_QUEUE_DIR, `${t}.json`), queue)
  }
}

// ---- Console summary -------------------------------------------------------------------------

const hardFailures = results.filter((r) => r.tweet && !r.stale && r.errors.length > 0)
console.log(JSON.stringify(report.totals, null, 2))
if (fileErrors.length) console.log('\nFile errors:', fileErrors)
if (unknownKeys.length) console.log('\nUnknown keys:', unknownKeys)
for (const r of hardFailures) console.log(`\nFAIL ${r.src.key} (${r.chars}/${r.weighted}): ${r.errors.join('; ')}`)
console.log(dry ? '\n(dry run — nothing written)' : `\nWrote ${MANIFEST_PATH} and ${REPORT_PATH}`)
process.exit(hardFailures.length || fileErrors.length || unknownKeys.length ? 1 : 0)
