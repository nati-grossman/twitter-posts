/**
 * Read-only snapshot of the seed posts into content-migration/source/<topicId>.json.
 * Never writes inside src/. Safe to rerun: output is deterministic for unchanged seed content.
 */
import { join } from 'node:path'
import { SEED_TOPICS } from '../../src/data/seed/topics/index.ts'
import { SOURCE_DIR, graphemeLength, makeKey, sha, writeJson, type SourceRecord } from './lib.ts'

const SUBTITLE_RE = /^(.+?) \((\d+)\/10\) — (.+)$/

const seen = new Set<string>()
let total = 0

for (const topic of SEED_TOPICS) {
  const records: SourceRecord[] = []
  topic.subtopics.forEach((series, i) => {
    series.posts.forEach((post, j) => {
      const m = post.title.match(SUBTITLE_RE)
      const part = m ? Number(m[2]) : j + 1
      const key = makeKey(topic.id, i + 1, part)
      if (seen.has(key)) throw new Error(`Duplicate key ${key}`)
      seen.add(key)
      records.push({
        key,
        topicId: topic.id,
        topicName: topic.name,
        seriesIndex: i + 1,
        seriesName: series.name,
        part,
        subtitle: m ? m[3] : post.title,
        title: post.title,
        postType: post.postType,
        tags: post.tags ?? [],
        sourceText: post.content,
        sourceChars: graphemeLength(post.content),
        sourceHash: sha(`${post.title}\n${post.content}`),
      })
    })
  })
  writeJson(join(SOURCE_DIR, `${topic.id}.json`), records)
  total += records.length
  console.log(`${topic.id.padEnd(26)} ${records.length} posts`)
}

console.log(`\nExtracted ${total} posts from ${SEED_TOPICS.length} topics into ${SOURCE_DIR}`)
