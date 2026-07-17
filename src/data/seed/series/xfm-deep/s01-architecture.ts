import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה transformer architecture?'

export const xfmDeepArchitecture: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, '2017',``),
    seriesPost(2, SERIES, 'בלוק',``),
    seriesPost(3, SERIES, 'פרמטרים',``),
    seriesPost(4, SERIES, 'Decoder-only',``),
    seriesPost(5, SERIES, 'Encoder-only',``),
    seriesPost(6, SERIES, 'Encoder-decoder',``),
    seriesPost(7, SERIES, 'Residual',``),
    seriesPost(8, SERIES, 'Layer Norm',``),
    seriesPost(9, SERIES, 'לא מונולית',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
