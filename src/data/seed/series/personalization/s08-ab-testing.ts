import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה A/B testing?'

export const persAbTesting: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'ניסוי',``),
    seriesPost(2, SERIES, 'היפותזה',``),
    seriesPost(3, SERIES, 'סטטיסטיקה',``),
    seriesPost(4, SERIES, 'מול personalization',``),
    seriesPost(5, SERIES, 'Feature flags',``),
    seriesPost(6, SERIES, 'רעיונות רעים',``),
    seriesPost(7, SERIES, 'אתיקה',``),
    seriesPost(8, SERIES, 'רב-ארמי',``),
    seriesPost(9, SERIES, 'תרבות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
