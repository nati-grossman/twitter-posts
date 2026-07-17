import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך Cloud עובד באמת?'

export const deepInfraCloud: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא ענן בשמיים',``),
    seriesPost(2, SERIES, 'IaaS PaaS SaaS',``),
    seriesPost(3, SERIES, 'Pay as you go',``),
    seriesPost(4, SERIES, 'Regions ו-AZs',``),
    seriesPost(5, SERIES, 'API לכל דבר',``),
    seriesPost(6, SERIES, 'Shared responsibility',``),
    seriesPost(7, SERIES, 'Vendor lock-in',``),
    seriesPost(8, SERIES, 'Hybrid',``),
    seriesPost(9, SERIES, 'Green ועלות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
