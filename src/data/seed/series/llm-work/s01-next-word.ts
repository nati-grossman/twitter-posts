import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל מנבא את המילה הבאה?'

export const llmWorkNextWord: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'המשימה הבסיסית',``),
    seriesPost(2, SERIES, 'Autoregressive',``),
    seriesPost(3, SERIES, 'Logits',``),
    seriesPost(4, SERIES, 'Sampling',``),
    seriesPost(5, SERIES, 'הסתברות מותנית',``),
    seriesPost(6, SERIES, 'Training goal',``),
    seriesPost(7, SERIES, 'Inference',``),
    seriesPost(8, SERIES, 'Stop',``),
    seriesPost(9, SERIES, 'לא תכנון',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
