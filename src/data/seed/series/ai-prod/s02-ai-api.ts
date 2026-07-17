import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה API של AI?'

export const aiProdAiApi: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'מפתח',``),
    seriesPost(3, SERIES, 'JSON',``),
    seriesPost(4, SERIES, 'Streaming',``),
    seriesPost(5, SERIES, 'מחיר',``),
    seriesPost(6, SERIES, 'ספקים',``),
    seriesPost(7, SERIES, 'שגיאות',``),
    seriesPost(8, SERIES, 'Embeddings API',``),
    seriesPost(9, SERIES, 'Self-host',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
