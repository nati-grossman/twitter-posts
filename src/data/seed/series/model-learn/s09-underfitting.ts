import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה underfitting?'

export const modelLearnUnderfitting: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'פשוט מדי',``),
    seriesPost(2, SERIES, 'סימנים',``),
    seriesPost(3, SERIES, 'מודל קטן',``),
    seriesPost(4, SERIES, 'פיצרים חלשים',``),
    seriesPost(5, SERIES, 'מעט epochs',``),
    seriesPost(6, SERIES, 'Learning rate',``),
    seriesPost(7, SERIES, 'דאטה מלוכלך',``),
    seriesPost(8, SERIES, 'Bias גבוה',``),
    seriesPost(9, SERIES, 'פתרון',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
