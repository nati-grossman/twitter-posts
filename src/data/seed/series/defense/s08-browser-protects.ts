import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך דפדפן מגן עליך מאתרים מסוכנים?'

export const defenseBrowserProtects: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא רק מציג דפים',``),
    seriesPost(2, SERIES, 'Safe Browsing',``),
    seriesPost(3, SERIES, 'Sandbox',``),
    seriesPost(4, SERIES, 'Same-Origin Policy',``),
    seriesPost(5, SERIES, 'HTTPS ואזהרות',``),
    seriesPost(6, SERIES, 'CSP, XSS',``),
    seriesPost(7, SERIES, 'הרשאות',``),
    seriesPost(8, SERIES, 'תוספים — סכנה כפולה',``),
    seriesPost(9, SERIES, 'עדכונים',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
