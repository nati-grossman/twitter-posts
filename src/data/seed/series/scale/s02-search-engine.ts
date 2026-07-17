import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מנוע חיפוש עובד מאחורי הקלעים?'

export const scaleSearchEngine: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שלושה שלבים',``),
    seriesPost(2, SERIES, 'Crawler (זחלן)',``),
    seriesPost(3, SERIES, 'Parsing',``),
    seriesPost(4, SERIES, 'Tokenization',``),
    seriesPost(5, SERIES, 'Inverted Index',``),
    seriesPost(6, SERIES, 'Ranking Signals',``),
    seriesPost(7, SERIES, 'Ads',``),
    seriesPost(8, SERIES, 'Personalization',``),
    seriesPost(9, SERIES, 'SEO',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
