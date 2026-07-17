import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל שומר הקשר?'

export const llmWorkContext: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא זיכרון נצחי',``),
    seriesPost(2, SERIES, 'Context window',``),
    seriesPost(3, SERIES, 'KV cache',``),
    seriesPost(4, SERIES, 'Attention רואה הכל',``),
    seriesPost(5, SERIES, 'שיחה ארוכה',``),
    seriesPost(6, SERIES, 'System prompt',``),
    seriesPost(7, SERIES, 'RAG',``),
    seriesPost(8, SERIES, 'מגבלה',``),
    seriesPost(9, SERIES, 'Long context tech',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
