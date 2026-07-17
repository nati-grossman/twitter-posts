import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך משפט הופך למספרים?'

export const llmWorkTextToNumbers: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'Pipeline',``),
    seriesPost(2, SERIES, 'Tokenizer',``),
    seriesPost(3, SERIES, 'Embedding layer',``),
    seriesPost(4, SERIES, 'Position',``),
    seriesPost(5, SERIES, 'Batch',``),
    seriesPost(6, SERIES, 'Float',``),
    seriesPost(7, SERIES, 'Decode חזרה',``),
    seriesPost(8, SERIES, 'Unicode',``),
    seriesPost(9, SERIES, 'לא ASCII ישן',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
