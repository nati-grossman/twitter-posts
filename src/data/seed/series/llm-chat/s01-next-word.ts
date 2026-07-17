import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל שפה מנבא את המילה הבאה?'

export const llmChatNextWord: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הליבה',``),
    seriesPost(2, SERIES, 'Autoregressive',``),
    seriesPost(3, SERIES, 'Logits',``),
    seriesPost(4, SERIES, 'Sampling',``),
    seriesPost(5, SERIES, 'Top-p / top-k',``),
    seriesPost(6, SERIES, 'הקשר',``),
    seriesPost(7, SERIES, 'לא תכנון',``),
    seriesPost(8, SERIES, 'Stop token',``),
    seriesPost(9, SERIES, 'Beam search (ישן יותר)',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
