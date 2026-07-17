import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה SQL Injection (ברמה רעיונית)?'

export const defenseSqlInjection: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הבעיה בשורה אחת',``),
    seriesPost(2, SERIES, 'דוגמה רעיונית',``),
    seriesPost(3, SERIES, 'לא רק התחברות',``),
    seriesPost(4, SERIES, 'למה זה עדיין קיים',``),
    seriesPost(5, SERIES, 'הפתרון הנכון',``),
    seriesPost(6, SERIES, 'ORM לא קסם',``),
    seriesPost(7, SERIES, 'הגנות נוספות',``),
    seriesPost(8, SERIES, 'NoSQL גם',``),
    seriesPost(9, SERIES, 'בדיקות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
