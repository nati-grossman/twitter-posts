import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה inference (הרצת מודל)?'

export const aiProdInference: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'מול אימון',``),
    seriesPost(3, SERIES, 'Forward pass',``),
    seriesPost(4, SERIES, 'GPU',``),
    seriesPost(5, SERIES, 'KV cache',``),
    seriesPost(6, SERIES, 'Quantization',``),
    seriesPost(7, SERIES, 'Cold start',``),
    seriesPost(8, SERIES, 'שרת',``),
    seriesPost(9, SERIES, 'Edge',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
