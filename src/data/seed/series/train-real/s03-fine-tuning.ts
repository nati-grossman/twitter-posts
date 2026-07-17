import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה fine-tuning?'

export const trainRealFineTuning: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'אחרי pretrain',``),
    seriesPost(2, SERIES, 'SFT',``),
    seriesPost(3, SERIES, 'פחות נתונים',``),
    seriesPost(4, SERIES, 'LoRA',``),
    seriesPost(5, SERIES, 'Domain',``),
    seriesPost(6, SERIES, 'Instruction',``),
    seriesPost(7, SERIES, 'Overfitting',``),
    seriesPost(8, SERIES, 'API fine-tune',``),
    seriesPost(9, SERIES, 'לא תחליף RLHF',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
