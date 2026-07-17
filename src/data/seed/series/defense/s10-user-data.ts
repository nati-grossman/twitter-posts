import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך חברות שומרות על מידע משתמשים?'

export const defenseUserData: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא "תיקייה אחת"',``),
    seriesPost(2, SERIES, 'הצפנה',``),
    seriesPost(3, SERIES, 'הפרדה',``),
    seriesPost(4, SERIES, 'GDPR וחוקים',``),
    seriesPost(5, SERIES, 'מינימום איסוף',``),
    seriesPost(6, SERIES, 'דליפות',``),
    seriesPost(7, SERIES, 'צד שלישי — processors',``),
    seriesPost(8, SERIES, 'גיבוי ושחזור',``),
    seriesPost(9, SERIES, 'שקיפות למשתמש',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
