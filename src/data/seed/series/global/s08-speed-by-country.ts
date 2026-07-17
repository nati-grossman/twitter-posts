import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה חלק מהאתרים מהירים יותר במדינות שונות?'

export const globalSpeedByCountry: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מרחק ו-latency',``),
    seriesPost(2, SERIES, 'CDN מקומי',``),
    seriesPost(3, SERIES, 'Peering מקומי',``),
    seriesPost(4, SERIES, 'רגולציה וסינון',``),
    seriesPost(5, SERIES, 'תשתית סיבים',``),
    seriesPost(6, SERIES, 'DNS',``),
    seriesPost(7, SERIES, 'Blocking third-party',``),
    seriesPost(8, SERIES, 'שעות שיא מקומיות',``),
    seriesPost(9, SERIES, 'בדיקה נכונה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
