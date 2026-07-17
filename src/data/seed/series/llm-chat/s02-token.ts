import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה token?'

export const llmChatToken: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'יחידת חיוב',``),
    seriesPost(2, SERIES, 'BPE',``),
    seriesPost(3, SERIES, 'עברית',``),
    seriesPost(4, SERIES, 'מספרים',``),
    seriesPost(5, SERIES, 'קלט ופלט',``),
    seriesPost(6, SERIES, 'Special tokens',``),
    seriesPost(7, SERIES, 'אורך משוער',``),
    seriesPost(8, SERIES, 'Tokenizer mismatch',``),
    seriesPost(9, SERIES, 'אבטחה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
