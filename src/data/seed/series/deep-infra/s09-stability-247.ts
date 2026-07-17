import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מערכת שומרת על יציבות 24/7?'

export const deepInfraStability247: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, '24/7 לא אומר מושלם',``),
    seriesPost(2, SERIES, 'Redundancy',``),
    seriesPost(3, SERIES, 'Health Checks',``),
    seriesPost(4, SERIES, 'Rolling Update',``),
    seriesPost(5, SERIES, 'Monitoring',``),
    seriesPost(6, SERIES, 'Incident Response',``),
    seriesPost(7, SERIES, 'Rate Limiting',``),
    seriesPost(8, SERIES, 'Graceful Degradation',``),
    seriesPost(9, SERIES, 'Maintenance Window',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
