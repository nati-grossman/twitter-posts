import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מחשבים משמעות של מילים?'

export const deepMlWordMeaning: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא מילון פנימי',``),
    seriesPost(2, SERIES, 'הקשר משנה',``),
    seriesPost(3, SERIES, 'דistributional hypothesis',``),
    seriesPost(4, SERIES, 'שכנים במשפט',``),
    seriesPost(5, SERIES, 'סטטיסטיקה לא פילוסופיה',``),
    seriesPost(6, SERIES, 'רב-לשוני',``),
    seriesPost(7, SERIES, 'נרדפות',``),
    seriesPost(8, SERIES, 'אנלוגיות',``),
    seriesPost(9, SERIES, 'מגבלות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
