import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך עושים מודל מהיר יותר?'

export const aiProdFaster: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'KV cache',``),
    seriesPost(2, SERIES, 'Quantization',``),
    seriesPost(3, SERIES, 'מודל קטן',``),
    seriesPost(4, SERIES, 'FlashAttention',``),
    seriesPost(5, SERIES, 'Speculative',``),
    seriesPost(6, SERIES, 'Hardware',``),
    seriesPost(7, SERIES, 'אורך פלט',``),
    seriesPost(8, SERIES, 'Caching תשובות',``),
    seriesPost(9, SERIES, 'Parallel',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
