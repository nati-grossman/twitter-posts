import type { SeedTopic } from '../types'
import { XFM_DEEP_SERIES } from '../series/xfm-deep'

export const transformersDeep: SeedTopic = {
  id: 'transformers-deep',
  name: 'Transformers לעומק (הלב של ChatGPT)',
  description: `ארכיטקטורה, encoder/decoder, Self-Attention, positional encoding, שכבות וזרימת מידע — 10 סדרות × 10 פוסטים.`,
  subtopics: XFM_DEEP_SERIES,
}
