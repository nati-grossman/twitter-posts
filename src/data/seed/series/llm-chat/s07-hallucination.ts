import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה hallucination ב-AI?'

export const llmChatHallucination: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'לא רק LLM',``),
    seriesPost(3, SERIES, 'סוגים',``),
    seriesPost(4, SERIES, 'סיבות',``),
    seriesPost(5, SERIES, 'RAG מפחית',``),
    seriesPost(6, SERIES, 'מדידה',``),
    seriesPost(7, SERIES, 'סיכון',``),
    seriesPost(8, SERIES, 'Confabulation',``),
    seriesPost(9, SERIES, 'מיתולוגיה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
