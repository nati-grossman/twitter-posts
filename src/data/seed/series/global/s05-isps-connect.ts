import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך ספקי אינטרנט מתחברים אחד לשני?'

export const globalIspsConnect: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שכבות',``),
    seriesPost(2, SERIES, 'Tier 1',``),
    seriesPost(3, SERIES, 'Tier 2/3',``),
    seriesPost(4, SERIES, 'IXP',``),
    seriesPost(5, SERIES, 'כבל ימי לספק',``),
    seriesPost(6, SERIES, 'מסלול בחירה',``),
    seriesPost(7, SERIES, 'CDN עוקף חלק',``),
    seriesPost(8, SERIES, 'חסימות בין ספקים',``),
    seriesPost(9, SERIES, 'מובייל',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
