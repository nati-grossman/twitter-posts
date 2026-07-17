import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מידע זורם בתוך מודל?'

export const xfmDeepInfoFlow: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'כניסה',``),
    seriesPost(2, SERIES, 'למעלה',``),
    seriesPost(3, SERIES, 'רוחב',``),
    seriesPost(4, SERIES, 'Residual highway',``),
    seriesPost(5, SERIES, 'פלט',``),
    seriesPost(6, SERIES, 'KV cache',``),
    seriesPost(7, SERIES, 'Gradient באימון',``),
    seriesPost(8, SERIES, 'Bottleneck',``),
    seriesPost(9, SERIES, 'Information mixing',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
