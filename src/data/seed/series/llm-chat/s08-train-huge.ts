import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מאמנים מודל שפה ענק?'

export const llmChatTrainHuge: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שלושה שלבים',``),
    seriesPost(2, SERIES, 'Pretrain',``),
    seriesPost(3, SERIES, 'תשתית',``),
    seriesPost(4, SERIES, 'נתונים',``),
    seriesPost(5, SERIES, 'ארכיטקטורה',``),
    seriesPost(6, SERIES, 'SFT',``),
    seriesPost(7, SERIES, 'RLHF',``),
    seriesPost(8, SERIES, 'DPO / אלטרנטיבות',``),
    seriesPost(9, SERIES, 'לא לכולם',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
