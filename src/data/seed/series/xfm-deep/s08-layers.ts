import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה שכבות בתוך transformer?'

export const xfmDeepLayers: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'בלוק = שכבה',``),
    seriesPost(2, SERIES, 'תת-שכבות',``),
    seriesPost(3, SERIES, 'FFN',``),
    seriesPost(4, SERIES, 'היררכיה',``),
    seriesPost(5, SERIES, 'יותר = יותר?',``),
    seriesPost(6, SERIES, 'Residual',``),
    seriesPost(7, SERIES, 'Dropout',``),
    seriesPost(8, SERIES, 'MoE',``),
    seriesPost(9, SERIES, 'Pruning',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
