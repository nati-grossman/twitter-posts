import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה tracking?'

export const persTracking: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מעקב',``),
    seriesPost(2, SERIES, 'Cookies',``),
    seriesPost(3, SERIES, 'Pixel',``),
    seriesPost(4, SERIES, 'Device ID',``),
    seriesPost(5, SERIES, 'Fingerprint',``),
    seriesPost(6, SERIES, 'Cross-site',``),
    seriesPost(7, SERIES, 'GDPR',``),
    seriesPost(8, SERIES, 'חסימה',``),
    seriesPost(9, SERIES, 'First-party',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
