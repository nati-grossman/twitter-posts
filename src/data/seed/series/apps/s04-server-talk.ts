import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך אפליקציה מתקשרת עם שרת?'

export const appsServerTalk: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'Client-Server',``),
    seriesPost(2, SERIES, 'HTTPS',``),
    seriesPost(3, SERIES, 'Headers',``),
    seriesPost(4, SERIES, 'REST',``),
    seriesPost(5, SERIES, 'Timeout',``),
    seriesPost(6, SERIES, 'Retry',``),
    seriesPost(7, SERIES, 'WebSocket',``),
    seriesPost(8, SERIES, 'גרסאות API',``),
    seriesPost(9, SERIES, 'Offline queue',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
