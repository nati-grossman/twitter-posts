import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה WebSockets?'

export const realtimeWebsockets: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'בעיה עם HTTP רגיל',``),
    seriesPost(2, SERIES, 'מנהרה פתוחה',``),
    seriesPost(3, SERIES, 'דחיפה מהשרת',``),
    seriesPost(4, SERIES, 'מול polling',``),
    seriesPost(5, SERIES, 'wss',``),
    seriesPost(6, SERIES, 'scale',``),
    seriesPost(7, SERIES, 'Socket.io',``),
    seriesPost(8, SERIES, 'SSE',``),
    seriesPost(9, SERIES, 'סגירה ו-heartbeat',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
