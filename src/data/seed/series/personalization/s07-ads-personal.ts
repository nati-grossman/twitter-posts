import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך פרסומות מותאמות אישית עובדות?'

export const persAdsPersonal: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מטרה',``),
    seriesPost(2, SERIES, 'Auction',``),
    seriesPost(3, SERIES, 'Audience',``),
    seriesPost(4, SERIES, 'Retargeting',``),
    seriesPost(5, SERIES, 'Lookalike',``),
    seriesPost(6, SERIES, 'Contextual',``),
    seriesPost(7, SERIES, 'Creative',``),
    seriesPost(8, SERIES, 'מדידה',``),
    seriesPost(9, SERIES, 'רגולציה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
