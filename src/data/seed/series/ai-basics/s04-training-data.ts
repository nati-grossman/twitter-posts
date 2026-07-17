import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה נתוני אימון (Training data)?'

export const aiBasicsTrainingData: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'דלק',``),
    seriesPost(2, SERIES, 'תוויות',``),
    seriesPost(3, SERIES, 'Dataset',``),
    seriesPost(4, SERIES, 'ניקוי',``),
    seriesPost(5, SERIES, 'Train / Val / Test',``),
    seriesPost(6, SERIES, 'Data leakage',``),
    seriesPost(7, SERIES, 'סינתטי',``),
    seriesPost(8, SERIES, 'פרטיות',``),
    seriesPost(9, SERIES, 'רענון',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
