import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה מגבלות הקשר (context limit)?'

export const aiLimitsContextLimit: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'מספרים',``),
    seriesPost(3, SERIES, 'Attention',``),
    seriesPost(4, SERIES, 'מה נכנס',``),
    seriesPost(5, SERIES, 'חיתוך',``),
    seriesPost(6, SERIES, 'סיכום ארוך',``),
    seriesPost(7, SERIES, 'KV cache',``),
    seriesPost(8, SERIES, 'הארכה',``),
    seriesPost(9, SERIES, 'תכנון',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
