import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך אתרים "זוכרים" מיליארדי משתמשים?'

export const scaleBillionsUsers: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא זיכרון אחד',``),
    seriesPost(2, SERIES, 'Sharding',``),
    seriesPost(3, SERIES, 'ID גלובלי',``),
    seriesPost(4, SERIES, 'Cache per user',``),
    seriesPost(5, SERIES, 'לא SQL אחד',``),
    seriesPost(6, SERIES, 'Event log',``),
    seriesPost(7, SERIES, 'GDPR מחיקה',``),
    seriesPost(8, SERIES, 'Consistency',``),
    seriesPost(9, SERIES, 'ספירה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
