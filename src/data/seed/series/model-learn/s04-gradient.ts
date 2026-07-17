import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה Gradient Descent?'

export const modelLearnGradient: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'ירידה בהר',``),
    seriesPost(2, SERIES, 'Gradient',``),
    seriesPost(3, SERIES, 'Learning rate',``),
    seriesPost(4, SERIES, 'SGD',``),
    seriesPost(5, SERIES, 'Adam',``),
    seriesPost(6, SERIES, 'מינימום מקומי',``),
    seriesPost(7, SERIES, 'מיליוני ממדים',``),
    seriesPost(8, SERIES, 'לא רק NN',``),
    seriesPost(9, SERIES, 'vanishing',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
