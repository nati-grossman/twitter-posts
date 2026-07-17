import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה transformers החליפו RNNs?'

export const xfmDeepVsRnn: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'RNN בסיס',``),
    seriesPost(2, SERIES, 'Vanishing gradient',``),
    seriesPost(3, SERIES, 'מקבילות',``),
    seriesPost(4, SERIES, 'מרחק',``),
    seriesPost(5, SERIES, '2017–2020',``),
    seriesPost(6, SERIES, 'אורך',``),
    seriesPost(7, SERIES, 'LSTM GRU',``),
    seriesPost(8, SERIES, 'עלות Attention',``),
    seriesPost(9, SERIES, 'לא אפס RNN',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
