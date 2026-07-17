import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה hallucination?'

export const aiLimitsHallucination: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'לא ראייה',``),
    seriesPost(3, SERIES, 'סוגים',``),
    seriesPost(4, SERIES, 'Confident',``),
    seriesPost(5, SERIES, 'מדידה',``),
    seriesPost(6, SERIES, 'RAG',``),
    seriesPost(7, SERIES, 'Grounding',``),
    seriesPost(8, SERIES, 'משפטי',``),
    seriesPost(9, SERIES, 'מחקר',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
