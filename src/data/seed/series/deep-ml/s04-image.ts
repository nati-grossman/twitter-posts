import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל מזהה תמונה?'

export const deepMlImage: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'פיקסלים למספרים',``),
    seriesPost(2, SERIES, 'CNN',``),
    seriesPost(3, SERIES, 'Pooling',``),
    seriesPost(4, SERIES, 'היררכיה חזותית',``),
    seriesPost(5, SERIES, 'Transfer learning',``),
    seriesPost(6, SERIES, 'Data augmentation',``),
    seriesPost(7, SERIES, 'Object detection',``),
    seriesPost(8, SERIES, 'Segmentation',``),
    seriesPost(9, SERIES, 'טעויות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
