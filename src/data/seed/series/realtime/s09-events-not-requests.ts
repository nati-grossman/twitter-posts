import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מערכות מגיבות לאירועים במקום בקשות?'

export const realtimeEventsNotRequests: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'דחיפה מול משיכה',``),
    seriesPost(2, SERIES, 'Message broker',``),
    seriesPost(3, SERIES, 'Pub/Sub',``),
    seriesPost(4, SERIES, 'Webhooks',``),
    seriesPost(5, SERIES, 'Change Data Capture',``),
    seriesPost(6, SERIES, 'Reactive streams',``),
    seriesPost(7, SERIES, 'Fan-out',``),
    seriesPost(8, SERIES, 'Ordering',``),
    seriesPost(9, SERIES, 'Dead letter queue',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
