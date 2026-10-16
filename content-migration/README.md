# Single-tweet migration

Turns every seed post (a 3–4 tweet thread) into one standalone tweet of at most 200 characters.
The app and its seed files in `src/` are never modified; everything lives in this directory.

## Layout

| Path | Written by | Contents |
|------|-----------|----------|
| `config.json` | you | limit, target range, retry count, filler blacklist |
| `source/<topicId>.json` | `extract` | read-only snapshot of the original posts with stable keys and hashes |
| `output/<topicId>/sNN.json` | writers | `[{ key, sourceHash, tweet }]`, one file per series |
| `review-queue/<topicId>.json` | `validate` | tweets that passed the hard checks and wait for a reviewer |
| `review/<topicId>.json` | reviewer | `[{ key, tweetHash, verdict: "pass" \| "revise", reason? }]` |
| `manifest.json` | `validate` | status of every post: `pending`, `stale`, `retry`, `manual_review`, `needs_review`, `ok` |
| `report.json` | `validate` | totals, per-topic counts, missing/duplicate/unknown keys, character stats, per-post errors |
| `single-tweets.json` | `merge` | final deliverable: every post with its metadata and the new tweet |

Post key: `<topicId>/sNN/pNN` (series index within the topic, part number). The app itself matches posts by topic + series name + part, so this key is stable as long as the topic order of series doesn't change.

## Running

```bash
npm run tweets:extract                       # snapshot seed posts into source/
npm run tweets:validate -- --topic ai-basics --dry   # check one topic, write nothing
npm run tweets:validate                      # full validation: updates manifest, report, review-queue
npm run tweets:merge                         # single-tweets.json with approved ("ok") tweets only
npm run tweets:merge -- --all                # also include tweets still waiting for review
```

`--limit 280` overrides the configured limit for a validate run.

## Workflow

1. `extract` — rerun any time; output is deterministic. If a seed post changes, its hash changes and the existing tweet becomes `stale`.
2. Writers fill `output/<topic>/sNN.json`, each writer owning distinct topics (no shared files). They check their work with `validate --dry --topic`.
3. `validate` (coordinator only) updates the manifest and builds `review-queue/`.
4. A reviewer reads the queue and writes `review/<topic>.json`, copying `tweetHash` so the verdict applies only to that exact text.
5. `validate` again: `pass` → `ok`; `revise` or a failed hard check → `retry`. Each distinct failed version counts as a retry; after `maxRetries` retries the post goes to `manual_review`. Nothing is ever truncated automatically.
6. `merge`.

Every step is idempotent: rerunning validate on unchanged files doesn't add retries, and merge always rebuilds the full file in the same order.

## Checks

Hard (block `ok`): valid schema; key exists and appears once; source hash matches; non-empty, trimmed; grapheme count **and** X weighted length (twitter-text: URLs = 23, emoji = 2) within the limit; contains Hebrew; no blacklisted filler; no markdown bold, blank lines, hashtags or emoji that weren't in the original; no `1/3` labels or 👇; doesn't end in an ellipsis; isn't a prefix of the original; not identical to another tweet.

Soft (warnings in the report): shorter than `targetMin`, longer than `targetMax`, line breaks, near-duplicates (word Jaccard ≥ `nearDuplicateThreshold`).
