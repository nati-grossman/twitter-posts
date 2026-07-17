import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה חוסר עקביות בתשובות?'

export const aiLimitsInconsistency: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'Temperature',``),
    seriesPost(3, SERIES, 'ניסוח',``),
    seriesPost(4, SERIES, 'הקשר',``),
    seriesPost(5, SERIES, 'גרסה',``),
    seriesPost(6, SERIES, 'סתירה פנימית',``),
    seriesPost(7, SERIES, 'בדיקות',``),
    seriesPost(8, SERIES, 'מוצר',``),
    seriesPost(9, SERIES, 'הפחתה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
