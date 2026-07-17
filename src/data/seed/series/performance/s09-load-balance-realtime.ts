import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מאזנים עומסים בזמן אמת?'

export const perfLoadBalanceRealtime: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'Load Balancer',``),
    seriesPost(2, SERIES, 'Auto scaling',``),
    seriesPost(3, SERIES, 'Health',``),
    seriesPost(4, SERIES, 'Sticky session',``),
    seriesPost(5, SERIES, 'Global',``),
    seriesPost(6, SERIES, 'Rate limit',``),
    seriesPost(7, SERIES, 'Circuit breaker',``),
    seriesPost(8, SERIES, 'Real-time',``),
    seriesPost(9, SERIES, 'Metrics',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
