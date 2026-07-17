import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה attention?'

export const llmWorkAttention: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שאלה פשוטה',``),
    seriesPost(2, SERIES, 'Query Key Value',``),
    seriesPost(3, SERIES, 'Self-attention',``),
    seriesPost(4, SERIES, 'מטריצה',``),
    seriesPost(5, SERIES, 'Multi-head',``),
    seriesPost(6, SERIES, 'Masked',``),
    seriesPost(7, SERIES, 'Softmax',``),
    seriesPost(8, SERIES, 'לפני RNN',``),
    seriesPost(9, SERIES, 'עלות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
