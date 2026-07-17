import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה transformer?'

export const deepMlTransformer: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'המאמר 2017',``),
    seriesPost(2, SERIES, 'Self-Attention',``),
    seriesPost(3, SERIES, 'מקבילי',``),
    seriesPost(4, SERIES, 'Encoder / Decoder',``),
    seriesPost(5, SERIES, 'Multi-head',``),
    seriesPost(6, SERIES, 'Positional encoding',``),
    seriesPost(7, SERIES, 'שכבות עמוקות',``),
    seriesPost(8, SERIES, 'Vision Transformer',``),
    seriesPost(9, SERIES, 'עלות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
