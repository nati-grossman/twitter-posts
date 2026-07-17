import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל מבין הקשר?'

export const deepMlContext: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא זיכרון כמו אדם',``),
    seriesPost(2, SERIES, 'Context window',``),
    seriesPost(3, SERIES, 'Attention = הקשר',``),
    seriesPost(4, SERIES, 'שכבות מצטברות',``),
    seriesPost(5, SERIES, 'שיחה ארוכה',``),
    seriesPost(6, SERIES, 'System prompt',``),
    seriesPost(7, SERIES, 'מגבלות',``),
    seriesPost(8, SERIES, 'In-context learning',``),
    seriesPost(9, SERIES, 'מול RAG',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
