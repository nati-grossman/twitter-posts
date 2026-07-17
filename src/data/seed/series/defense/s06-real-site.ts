import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך יודעים שאתר "אמיתי" ולא זיוף?'

export const defenseRealSite: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שתי שאלות שונות',``),
    seriesPost(2, SERIES, 'בדוק את הכתובת',``),
    seriesPost(3, SERIES, 'תעודה — לחץ על המנעול',``),
    seriesPost(4, SERIES, 'DNS ו-Pharming',``),
    seriesPost(5, SERIES, '2FA ואפליקציה',``),
    seriesPost(6, SERIES, 'EV ומיתוסים',``),
    seriesPost(7, SERIES, 'חיפוש מודעון',``),
    seriesPost(8, SERIES, 'הרגלי זהב',``),
    seriesPost(9, SERIES, 'ארגונים',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
