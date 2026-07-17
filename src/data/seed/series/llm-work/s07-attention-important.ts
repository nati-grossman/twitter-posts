import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה attention כל כך חשוב?'

export const llmWorkAttentionImportant: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'בלי זה אין LLM',``),
    seriesPost(2, SERIES, 'מרחק ארוך',``),
    seriesPost(3, SERIES, 'מקביל',``),
    seriesPost(4, SERIES, 'תרגום',``),
    seriesPost(5, SERIES, 'In-context learning',``),
    seriesPost(6, SERIES, 'Interpretability',``),
    seriesPost(7, SERIES, 'Scaling laws',``),
    seriesPost(8, SERIES, 'חלופות',``),
    seriesPost(9, SERIES, 'עלות אמיתית',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
