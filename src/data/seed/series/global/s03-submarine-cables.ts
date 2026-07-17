import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך כבלי אינטרנט עוברים מתחת לאוקיינוסים?'

export const globalSubmarineCables: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, '99% בינלאומי בכבלים',``),
    seriesPost(2, SERIES, 'איך בונים',``),
    seriesPost(3, SERIES, 'סיב אופטי',``),
    seriesPost(4, SERIES, 'נחיתה בחוף',``),
    seriesPost(5, SERIES, 'מפה גלובלית',``),
    seriesPost(6, SERIES, 'שבירה ותיקון',``),
    seriesPost(7, SERIES, 'בעלות',``),
    seriesPost(8, SERIES, 'ריגול ואבטחה',``),
    seriesPost(9, SERIES, 'לעומת לוויין Starlink',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
