import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה fault tolerance?'

export const deepInfraFaultTolerance: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'Fault vs Failure',``),
    seriesPost(3, SERIES, 'Replication',``),
    seriesPost(4, SERIES, 'Circuit breaker',``),
    seriesPost(5, SERIES, 'Idempotency',``),
    seriesPost(6, SERIES, 'Chaos engineering',``),
    seriesPost(7, SERIES, 'CAP theorem (רעיון)',``),
    seriesPost(8, SERIES, 'Multi-region',``),
    seriesPost(9, SERIES, 'Backup ≠ tolerance',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
