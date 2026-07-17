import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מזהים תשובה שגויה של AI?'

export const aiLimitsSpotWrong: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'כלל ראשון',``),
    seriesPost(2, SERIES, 'ציטוטים',``),
    seriesPost(3, SERIES, 'סתירה פנימית',``),
    seriesPost(4, SERIES, 'מספרים',``),
    seriesPost(5, SERIES, 'נדיר מדי',``),
    seriesPost(6, SERIES, 'שפה מושלמת',``),
    seriesPost(7, SERIES, 'שני מודלים',``),
    seriesPost(8, SERIES, 'RAG',``),
    seriesPost(9, SERIES, 'דומיין',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
