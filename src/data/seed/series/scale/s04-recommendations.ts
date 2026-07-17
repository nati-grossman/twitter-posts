import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך פייסבוק/טיקטוק ממליצים על תוכן?'

export const scaleRecommendations: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא רק חברים',``),
    seriesPost(2, SERIES, 'סיגנלים',``),
    seriesPost(3, SERIES, 'מודל ML',``),
    seriesPost(4, SERIES, 'Two Towers',``),
    seriesPost(5, SERIES, 'Cold start',``),
    seriesPost(6, SERIES, 'Filter bubble',``),
    seriesPost(7, SERIES, 'A/B tests',``),
    seriesPost(8, SERIES, 'טיקטוק',``),
    seriesPost(9, SERIES, 'לא רק ML',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
