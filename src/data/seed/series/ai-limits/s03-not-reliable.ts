import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה מודלים לא תמיד אמינים?'

export const aiLimitsNotReliable: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הסתברותי',``),
    seriesPost(2, SERIES, 'לא יודע',``),
    seriesPost(3, SERIES, 'תאריך',``),
    seriesPost(4, SERIES, 'מתמטיקה',``),
    seriesPost(5, SERIES, 'לוגיקה',``),
    seriesPost(6, SERIES, 'עומס',``),
    seriesPost(7, SERIES, 'גרסאות',``),
    seriesPost(8, SERIES, 'מוצר',``),
    seriesPost(9, SERIES, 'SLA',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
