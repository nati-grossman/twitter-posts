import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה צריך הרבה דאטה כדי לאמן AI?'

export const modelLearnWhyMuchData: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'פרמטרים רבים',``),
    seriesPost(2, SERIES, 'ממד גבוה',``),
    seriesPost(3, SERIES, 'זיהוי דפוס',``),
    seriesPost(4, SERIES, 'rare cases',``),
    seriesPost(5, SERIES, 'bias',``),
    seriesPost(6, SERIES, 'Chinchilla',``),
    seriesPost(7, SERIES, 'Data augmentation',``),
    seriesPost(8, SERIES, 'few-shot',``),
    seriesPost(9, SERIES, 'עלות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
