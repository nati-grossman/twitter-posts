import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מערכת ענקית בנויה ממאות חלקים קטנים?'

export const scaleManyParts: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא קוביית קסם אחת',``),
    seriesPost(2, SERIES, 'שכבות',``),
    seriesPost(3, SERIES, 'API Gateway',``),
    seriesPost(4, SERIES, 'Message queues',``),
    seriesPost(5, SERIES, 'Observability',``),
    seriesPost(6, SERIES, 'Contracts',``),
    seriesPost(7, SERIES, 'Feature flags',``),
    seriesPost(8, SERIES, 'Platform teams',``),
    seriesPost(9, SERIES, 'מפת מנטלית',``),
    seriesPost(10, SERIES, 'סיכום — המפה המלאה',``),
  ],
}
