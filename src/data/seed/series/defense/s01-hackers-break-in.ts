import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך האקרים פורצים לאתרים?'

export const defenseHackersBreakIn: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא "קסם" אחד',``),
    seriesPost(2, SERIES, 'נקודות כניסה',``),
    seriesPost(3, SERIES, 'קלט זדוני',``),
    seriesPost(4, SERIES, 'סיסמאות וחשבונות',``),
    seriesPost(5, SERIES, 'תוכנה לא מעודכנת',``),
    seriesPost(6, SERIES, 'הנדסה חברתית',``),
    seriesPost(7, SERIES, 'שרשרת אספקה',``),
    seriesPost(8, SERIES, 'פנימי',``),
    seriesPost(9, SERIES, 'אחרי כניסה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
