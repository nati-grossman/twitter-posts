import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה Frontend מול Backend?'

export const buildingFrontendBackend: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'חלוקה פשוטה',``),
    seriesPost(2, SERIES, 'איפה רץ',``),
    seriesPost(3, SERIES, 'טכנולוגיות נפוצות',``),
    seriesPost(4, SERIES, 'מי עושה מה',``),
    seriesPost(5, SERIES, 'תקשורת ביניהם',``),
    seriesPost(6, SERIES, 'סודות',``),
    seriesPost(7, SERIES, 'SSR ו-Hybrid',``),
    seriesPost(8, SERIES, 'Mobile',``),
    seriesPost(9, SERIES, 'BFF (Backend For Frontend)',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
