import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה load balancing?'

export const scaleLoadBalancing: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מפזר עומס',``),
    seriesPost(2, SERIES, 'Round Robin',``),
    seriesPost(3, SERIES, 'Least connections',``),
    seriesPost(4, SERIES, 'Health checks',``),
    seriesPost(5, SERIES, 'SSL termination',``),
    seriesPost(6, SERIES, 'DNS level',``),
    seriesPost(7, SERIES, 'Sticky session',``),
    seriesPost(8, SERIES, 'Kubernetes',``),
    seriesPost(9, SERIES, 'Bottleneck',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
