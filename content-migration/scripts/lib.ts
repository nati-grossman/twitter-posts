import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import twitter from 'twitter-text'

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
export const SOURCE_DIR = join(ROOT, 'source')
export const OUTPUT_DIR = join(ROOT, 'output')
export const REVIEW_DIR = join(ROOT, 'review')
export const MANIFEST_PATH = join(ROOT, 'manifest.json')
export const REPORT_PATH = join(ROOT, 'report.json')
export const MERGED_PATH = join(ROOT, 'single-tweets.json')
export const REVIEW_QUEUE_DIR = join(ROOT, 'review-queue')

export interface Config {
  limit: number
  targetMin: number
  targetMax: number
  maxRetries: number
  nearDuplicateThreshold: number
  fillerBlacklist: string[]
}

/** One original post, extracted read-only from the seed modules. */
export interface SourceRecord {
  key: string
  topicId: string
  topicName: string
  seriesIndex: number
  seriesName: string
  part: number
  subtitle: string
  title: string
  postType: string
  tags: string[]
  sourceText: string
  sourceChars: number
  sourceHash: string
}

/** What a writer agent produces: output/<topicId>/sNN.json is an array of these. */
export interface OutputEntry {
  key: string
  sourceHash: string
  tweet: string
}

/**
 * What the reviewer produces: review/<topicId>.json is an array of these.
 * tweetHash is copied from review-queue/<topicId>.json so a verdict only applies to the exact tweet reviewed.
 */
export interface ReviewEntry {
  key: string
  tweetHash: string
  verdict: 'pass' | 'revise'
  reason?: string
}

export type Status =
  | 'pending'
  | 'stale'
  | 'retry'
  | 'manual_review'
  | 'needs_review'
  | 'ok'

export interface ManifestEntry {
  topicId: string
  sourceHash: string
  status: Status
  /** Failed attempts (hard-check failures or reviewer "revise") on distinct tweet versions. */
  retries: number
  tweetHash: string | null
  lastFailedTweetHash: string | null
  review: 'pass' | 'revise' | null
  errors: string[]
  warnings: string[]
  updatedAt: string
}

export interface Manifest {
  version: 1
  limit: number
  entries: Record<string, ManifestEntry>
}

export function loadConfig(): Config {
  return readJson<Config>(join(ROOT, 'config.json'))
}

export function readJson<T>(path: string): T {
  return JSON.parse(readFileSync(path, 'utf8')) as T
}

export function writeJson(path: string, value: unknown): void {
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, JSON.stringify(value, null, 2) + '\n', 'utf8')
}

export function sha(text: string): string {
  return createHash('sha256').update(text, 'utf8').digest('hex').slice(0, 16)
}

const segmenter = new Intl.Segmenter('he', { granularity: 'grapheme' })

/** User-perceived characters (grapheme clusters). */
export function graphemeLength(text: string): number {
  let n = 0
  for (const _ of segmenter.segment(text)) n++
  return n
}

/** X/Twitter weighted length (URLs = 23, emoji = 2, Hebrew/Latin = 1). */
export function weightedLength(text: string): number {
  return twitter.parseTweet(text).weightedLength
}

export function makeKey(topicId: string, seriesIndex: number, part: number): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${topicId}/s${pad(seriesIndex)}/p${pad(part)}`
}

export function loadAllSources(): SourceRecord[] {
  if (!existsSync(SOURCE_DIR)) {
    throw new Error('No source/ directory. Run extract.ts first.')
  }
  return readdirSync(SOURCE_DIR)
    .filter((f) => f.endsWith('.json'))
    .sort()
    .flatMap((f) => readJson<SourceRecord[]>(join(SOURCE_DIR, f)))
}

/** Every output file, with its path, so validation can report where a problem lives. */
export function loadAllOutputs(topicId?: string): { file: string; entries: unknown }[] {
  if (!existsSync(OUTPUT_DIR)) return []
  const topics = readdirSync(OUTPUT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && (!topicId || d.name === topicId))
    .map((d) => d.name)
    .sort()
  const files: { file: string; entries: unknown }[] = []
  for (const t of topics) {
    for (const f of readdirSync(join(OUTPUT_DIR, t)).filter((x) => x.endsWith('.json')).sort()) {
      const file = join(OUTPUT_DIR, t, f)
      let entries: unknown
      try {
        entries = readJson<unknown>(file)
      } catch (e) {
        entries = { __parseError: String(e) }
      }
      files.push({ file, entries })
    }
  }
  return files
}

export function reviewKey(key: string, tweetHash: string): string {
  return `${key}@${tweetHash}`
}

/** Reviews indexed by reviewKey(), so verdicts on older tweet versions never apply to a rewrite. */
export function loadAllReviews(): Map<string, ReviewEntry> {
  const reviews = new Map<string, ReviewEntry>()
  if (!existsSync(REVIEW_DIR)) return reviews
  for (const f of readdirSync(REVIEW_DIR).filter((x) => x.endsWith('.json')).sort()) {
    for (const r of readJson<ReviewEntry[]>(join(REVIEW_DIR, f))) {
      reviews.set(reviewKey(r.key, r.tweetHash), r)
    }
  }
  return reviews
}

export function loadManifest(): Manifest | null {
  return existsSync(MANIFEST_PATH) ? readJson<Manifest>(MANIFEST_PATH) : null
}

export function normalizeForCompare(text: string): string {
  return text.replace(/\s+/g, ' ').replace(/[^\p{L}\p{N} ]/gu, '').trim().toLowerCase()
}

export function wordSet(text: string): Set<string> {
  return new Set(normalizeForCompare(text).split(' ').filter((w) => w.length > 1))
}

export function jaccard(a: Set<string>, b: Set<string>): number {
  let inter = 0
  for (const w of a) if (b.has(w)) inter++
  const union = a.size + b.size - inter
  return union === 0 ? 0 : inter / union
}
