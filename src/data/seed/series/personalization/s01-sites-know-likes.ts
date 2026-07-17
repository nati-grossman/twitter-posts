import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך אתרים יודעים מה אתה אוהב?'

export const persSitesKnowLikes: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא קריאת מחשבות',``),
    seriesPost(2, SERIES, 'דפוסים',``),
    seriesPost(3, SERIES, 'מפה לתוויות',``),
    seriesPost(4, SERIES, 'מול חברים',``),
    seriesPost(5, SERIES, 'הקשר',``),
    seriesPost(6, SERIES, 'מכשיר',``),
    seriesPost(7, SERIES, 'חיפוש מפורש',``),
    seriesPost(8, SERIES, 'שגיאות',``),
    seriesPost(9, SERIES, 'שקיפות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
