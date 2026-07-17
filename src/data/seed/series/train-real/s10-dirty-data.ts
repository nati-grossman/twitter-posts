import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה דאטה לא נקי הורס מודלים?'

export const trainRealDirtyData: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לומד הכל',``),
    seriesPost(2, SERIES, 'הזיות',``),
    seriesPost(3, SERIES, 'רעילות',``),
    seriesPost(4, SERIES, 'spam',``),
    seriesPost(5, SERIES, 'כפילויות',``),
    seriesPost(6, SERIES, 'PII',``),
    seriesPost(7, SERIES, 'קוד זדוני',``),
    seriesPost(8, SERIES, 'עלות',``),
    seriesPost(9, SERIES, 'קשה לתקן',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
