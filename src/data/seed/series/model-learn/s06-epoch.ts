import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה epoch באימון?'

export const modelLearnEpoch: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מחזור מלא',``),
    seriesPost(2, SERIES, 'שלב',``),
    seriesPost(3, SERIES, 'מול iteration',``),
    seriesPost(4, SERIES, 'Shuffle',``),
    seriesPost(5, SERIES, 'Early stopping',``),
    seriesPost(6, SERIES, 'Overfit',``),
    seriesPost(7, SERIES, 'גדול דאטה',``),
    seriesPost(8, SERIES, 'Checkpoint per epoch',``),
    seriesPost(9, SERIES, 'Learning rate schedule',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
