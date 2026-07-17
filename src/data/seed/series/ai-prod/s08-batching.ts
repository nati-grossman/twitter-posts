import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה batching בבקשות AI?'

export const aiProdBatching: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'רעיון',``),
    seriesPost(2, SERIES, 'Continuous batching',``),
    seriesPost(3, SERIES, 'מול בודד',``),
    seriesPost(4, SERIES, 'Padding',``),
    seriesPost(5, SERIES, 'API Batch',``),
    seriesPost(6, SERIES, 'Latency tradeoff',``),
    seriesPost(7, SERIES, 'Embedding batch',``),
    seriesPost(8, SERIES, 'Inference server',``),
    seriesPost(9, SERIES, 'Training batch',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
