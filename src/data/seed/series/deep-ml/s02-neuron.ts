import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך נוירון מלאכותי עובד?'

export const deepMlNeuron: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'יחידת בסיס',``),
    seriesPost(2, SERIES, 'weighted sum',``),
    seriesPost(3, SERIES, 'activation',``),
    seriesPost(4, SERIES, 'למה לא לינארי',``),
    seriesPost(5, SERIES, 'sigmoid ו-softmax',``),
    seriesPost(6, SERIES, 'אנלוגיה',``),
    seriesPost(7, SERIES, 'מיליונים יחד',``),
    seriesPost(8, SERIES, 'dead neuron',``),
    seriesPost(9, SERIES, 'biological gap',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
