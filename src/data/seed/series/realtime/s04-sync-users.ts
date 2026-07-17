import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך נוצרת סינכרוניזציה בין משתמשים?'

export const realtimeSyncUsers: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מקור אמת אחד',``),
    seriesPost(2, SERIES, 'Operational Transform',``),
    seriesPost(3, SERIES, 'Timestamps',``),
    seriesPost(4, SERIES, 'Conflict',``),
    seriesPost(5, SERIES, 'Presence',``),
    seriesPost(6, SERIES, 'Optimistic UI',``),
    seriesPost(7, SERIES, 'Event ordering',``),
    seriesPost(8, SERIES, 'Offline',``),
    seriesPost(9, SERIES, 'שעון שרת',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
