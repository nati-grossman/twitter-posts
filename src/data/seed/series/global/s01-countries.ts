import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך האינטרנט מחולק בין מדינות?'

export const globalCountries: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא גבולות פיזיים',``),
    seriesPost(2, SERIES, 'ccTLD',``),
    seriesPost(3, SERIES, 'IXP מקומי',``),
    seriesPost(4, SERIES, 'כניסה ויציאה בינלאומית',``),
    seriesPost(5, SERIES, 'רגולציה שונה',``),
    seriesPost(6, SERIES, 'סינון וחסימות',``),
    seriesPost(7, SERIES, 'Digital divide',``),
    seriesPost(8, SERIES, 'סטטיסטיקה',``),
    seriesPost(9, SERIES, 'ארגונים',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
