import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה supervised learning?'

export const aiBasicsSupervised: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מורה עם תשובות',``),
    seriesPost(2, SERIES, 'Classification',``),
    seriesPost(3, SERIES, 'Regression',``),
    seriesPost(4, SERIES, 'דוגמאות',``),
    seriesPost(5, SERIES, 'Overfitting',``),
    seriesPost(6, SERIES, 'Underfitting',``),
    seriesPost(7, SERIES, 'Imbalanced',``),
    seriesPost(8, SERIES, 'Fine-tune',``),
    seriesPost(9, SERIES, 'Label noise',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
