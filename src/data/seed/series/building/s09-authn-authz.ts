import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה authentication vs authorization?'

export const buildingAuthnAuthz: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שתי מילים, שני תפקידים',``),
    seriesPost(2, SERIES, 'דוגמת מועדון',``),
    seriesPost(3, SERIES, 'Login',``),
    seriesPost(4, SERIES, 'Roles',``),
    seriesPost(5, SERIES, 'Token מכיל מה',``),
    seriesPost(6, SERIES, '401 vs 403',``),
    seriesPost(7, SERIES, 'Scope ב-OAuth',``),
    seriesPost(8, SERIES, 'שגיאה נפוצה',``),
    seriesPost(9, SERIES, 'Zero Trust',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
