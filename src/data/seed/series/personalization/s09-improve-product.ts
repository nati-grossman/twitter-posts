import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך חברות משפרות מוצרים לפי משתמשים?'

export const persImproveProduct: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לולאת משוב',``),
    seriesPost(2, SERIES, 'Analytics',``),
    seriesPost(3, SERIES, 'סקרים + דאטה',``),
    seriesPost(4, SERIES, 'Cohort',``),
    seriesPost(5, SERIES, 'NPS',``),
    seriesPost(6, SERIES, 'Personalization rollout',``),
    seriesPost(7, SERIES, 'Dark patterns',``),
    seriesPost(8, SERIES, 'Support tickets',``),
    seriesPost(9, SERIES, 'Competitors',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
