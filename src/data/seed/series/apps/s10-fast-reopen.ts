import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך אפליקציה נסגרת ונפתחת מהר?'

export const appsFastReopen: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא סגירה אמיתית',``),
    seriesPost(2, SERIES, 'Warm start',``),
    seriesPost(3, SERIES, 'Snapshot',``),
    seriesPost(4, SERIES, 'State restore',``),
    seriesPost(5, SERIES, 'Kill בזיכרון',``),
    seriesPost(6, SERIES, 'Lazy load',``),
    seriesPost(7, SERIES, 'Prefetch',``),
    seriesPost(8, SERIES, 'קטן APK',``),
    seriesPost(9, SERIES, 'משתמש סוגר',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
