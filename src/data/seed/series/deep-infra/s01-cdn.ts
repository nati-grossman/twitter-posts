import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה CDN ולמה זה מזרז אתרים?'

export const deepInfraCdn: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הבעיה: מרחק',``),
    seriesPost(2, SERIES, 'מה זה CDN',``),
    seriesPost(3, SERIES, 'איך זה מזרז',``),
    seriesPost(4, SERIES, 'Cache ו-TTL',``),
    seriesPost(5, SERIES, 'Origin server',``),
    seriesPost(6, SERIES, 'דינמי vs סטטי',``),
    seriesPost(7, SERIES, 'ספקים',``),
    seriesPost(8, SERIES, 'DDoS בונוס',``),
    seriesPost(9, SERIES, 'Cache invalidation',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
