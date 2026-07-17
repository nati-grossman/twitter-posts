import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה latency ב-AI?'

export const aiProdLatency: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'TTFT',``),
    seriesPost(3, SERIES, 'TPOT',``),
    seriesPost(4, SERIES, 'רשת',``),
    seriesPost(5, SERIES, 'תור',``),
    seriesPost(6, SERIES, 'אורך',``),
    seriesPost(7, SERIES, 'מודל',``),
    seriesPost(8, SERIES, 'Cold',``),
    seriesPost(9, SERIES, 'UX',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
