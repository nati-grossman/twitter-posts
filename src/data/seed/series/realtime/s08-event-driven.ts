import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה event-driven architecture?'

export const realtimeEventDriven: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'אירוע במקום פקודה',``),
    seriesPost(2, SERIES, 'Producer Consumer',``),
    seriesPost(3, SERIES, 'מול request-response',``),
    seriesPost(4, SERIES, 'Topics ו-partitions',``),
    seriesPost(5, SERIES, 'At-least-once',``),
    seriesPost(6, SERIES, 'CQRS',``),
    seriesPost(7, SERIES, 'Saga',``),
    seriesPost(8, SERIES, 'Serverless events',``),
    seriesPost(9, SERIES, 'מורכבות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
