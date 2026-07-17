import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה קובץ?'

export const dataFile: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'יחידת אחסון',``),
    seriesPost(2, SERIES, 'מול תיקייה',``),
    seriesPost(3, SERIES, 'Metadata',``),
    seriesPost(4, SERIES, 'סיומת',``),
    seriesPost(5, SERIES, 'Binary מול Text',``),
    seriesPost(6, SERIES, 'Stream',``),
    seriesPost(7, SERIES, 'Cloud object',``),
    seriesPost(8, SERIES, 'Versioning',``),
    seriesPost(9, SERIES, 'Lock',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
