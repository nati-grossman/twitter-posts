import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה fine-tuning?'

export const llmChatFineTuning: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'מול pretrain',``),
    seriesPost(3, SERIES, 'Full vs LoRA',``),
    seriesPost(4, SERIES, 'דאטה קטן',``),
    seriesPost(5, SERIES, 'Overfit',``),
    seriesPost(6, SERIES, 'Catastrophic forgetting',``),
    seriesPost(7, SERIES, 'API fine-tune',``),
    seriesPost(8, SERIES, 'מול prompt',``),
    seriesPost(9, SERIES, 'רישוי',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
