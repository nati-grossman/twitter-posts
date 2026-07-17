import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה context window?'

export const llmChatContextWindow: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'חלון הקשר',``),
    seriesPost(2, SERIES, 'דוגמאות',``),
    seriesPost(3, SERIES, 'מעבר לגבול',``),
    seriesPost(4, SERIES, 'Attention cost',``),
    seriesPost(5, SERIES, 'שיחה ארוכה',``),
    seriesPost(6, SERIES, 'מול זיכרון אנושי',``),
    seriesPost(7, SERIES, 'Long context tricks',``),
    seriesPost(8, SERIES, 'מסמך שלם',``),
    seriesPost(9, SERIES, 'מחיר API',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
