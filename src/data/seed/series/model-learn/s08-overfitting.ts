import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה overfitting?'

export const modelLearnOverfitting: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שנן במקום ללמוד',``),
    seriesPost(2, SERIES, 'אנלוגיה',``),
    seriesPost(3, SERIES, 'גרף',``),
    seriesPost(4, SERIES, 'מודל גדול מדי',``),
    seriesPost(5, SERIES, 'Regularization',``),
    seriesPost(6, SERIES, 'More data',``),
    seriesPost(7, SERIES, 'LLM',``),
    seriesPost(8, SERIES, 'Early stopping',``),
    seriesPost(9, SERIES, 'Cross-validation',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
