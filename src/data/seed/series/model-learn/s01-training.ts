import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה אימון (Training) של מודל?'

export const modelLearnTraining: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא תכנות ידני',``),
    seriesPost(2, SERIES, 'לפני ואחרי',``),
    seriesPost(3, SERIES, 'שלבים',``),
    seriesPost(4, SERIES, 'GPU',``),
    seriesPost(5, SERIES, 'Dataset',``),
    seriesPost(6, SERIES, 'Hyperparameters',``),
    seriesPost(7, SERIES, 'Checkpoint',``),
    seriesPost(8, SERIES, 'Inference ≠ Training',``),
    seriesPost(9, SERIES, 'עצירה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
