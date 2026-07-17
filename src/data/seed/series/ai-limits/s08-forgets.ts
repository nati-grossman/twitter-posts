import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה AI שוכח מידע?'

export const aiLimitsForgets: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא זיכרון',``),
    seriesPost(2, SERIES, 'חלון מלא',``),
    seriesPost(3, SERIES, 'סיכום',``),
    seriesPost(4, SERIES, 'מרכז Attention',``),
    seriesPost(5, SERIES, 'פרומפט ארוך',``),
    seriesPost(6, SERIES, 'session חדש',``),
    seriesPost(7, SERIES, 'RAG',``),
    seriesPost(8, SERIES, 'fine-tune',``),
    seriesPost(9, SERIES, 'בלבול',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
