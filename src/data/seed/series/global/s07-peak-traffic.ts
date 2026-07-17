import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך תעבורה עולמית מתנהלת בשעות עומס?'

export const globalPeakTraffic: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'גלים לפי אזור זמן',``),
    seriesPost(2, SERIES, 'Congestion',``),
    seriesPost(3, SERIES, 'QoS ותעדוף',``),
    seriesPost(4, SERIES, 'CDN מפזר עומס',``),
    seriesPost(5, SERIES, 'אירועים חריגים',``),
    seriesPost(6, SERIES, 'Backbone upgrade',``),
    seriesPost(7, SERIES, 'Anycast',``),
    seriesPost(8, SERIES, 'לילה “שקט”',``),
    seriesPost(9, SERIES, 'מדידה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
