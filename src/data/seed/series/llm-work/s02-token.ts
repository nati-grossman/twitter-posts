import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה token באמת?'

export const llmWorkToken: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'יחידת עיבוד',``),
    seriesPost(2, SERIES, 'BPE',``),
    seriesPost(3, SERIES, 'עברית',``),
    seriesPost(4, SERIES, 'ID',``),
    seriesPost(5, SERIES, 'Context limit',``),
    seriesPost(6, SERIES, 'Special',``),
    seriesPost(7, SERIES, 'מחיר API',``),
    seriesPost(8, SERIES, 'Tokenizer ≠ מודל',``),
    seriesPost(9, SERIES, 'רווחים',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
