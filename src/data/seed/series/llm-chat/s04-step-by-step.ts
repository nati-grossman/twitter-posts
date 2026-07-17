import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך נוצרת תשובה של ChatGPT שלב אחרי שלב?'

export const llmChatStepByStep: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מסלול',``),
    seriesPost(2, SERIES, 'Prefill',``),
    seriesPost(3, SERIES, 'Decode',``),
    seriesPost(4, SERIES, 'KV cache',``),
    seriesPost(5, SERIES, 'Streaming',``),
    seriesPost(6, SERIES, 'Moderation',``),
    seriesPost(7, SERIES, 'Tools',``),
    seriesPost(8, SERIES, 'RAG בשרשרת',``),
    seriesPost(9, SERIES, 'עלות זמן',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
