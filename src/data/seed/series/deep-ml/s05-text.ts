import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך AI מזהה טקסט?'

export const deepMlText: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'טקסט = רצף',``),
    seriesPost(2, SERIES, 'Tokenization',``),
    seriesPost(3, SERIES, 'ישן: Bag of Words',``),
    seriesPost(4, SERIES, 'RNN / LSTM',``),
    seriesPost(5, SERIES, 'Transformer היום',``),
    seriesPost(6, SERIES, 'Classification',``),
    seriesPost(7, SERIES, 'NER',``),
    seriesPost(8, SERIES, 'שפות שונות',``),
    seriesPost(9, SERIES, 'אורך',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
