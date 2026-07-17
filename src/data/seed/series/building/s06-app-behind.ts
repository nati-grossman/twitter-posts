import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך אפליקציה עובדת מאחורי הקלעים?'

export const buildingAppBehind: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לחיצה אחת — שרשרת',``),
    seriesPost(2, SERIES, 'Client State',``),
    seriesPost(3, SERIES, 'בקשת רשת',``),
    seriesPost(4, SERIES, 'שרת מקבל',``),
    seriesPost(5, SERIES, 'DB Query',``),
    seriesPost(6, SERIES, 'תור משימות',``),
    seriesPost(7, SERIES, 'Cache',``),
    seriesPost(8, SERIES, 'שגיאות',``),
    seriesPost(9, SERIES, 'לוגים וניטור',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
