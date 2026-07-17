import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה neural network?'

export const deepMlNeuralNetwork: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'השראה ביולוגית',``),
    seriesPost(2, SERIES, 'קלט ופלט',``),
    seriesPost(3, SERIES, 'לא תכנות ידני',``),
    seriesPost(4, SERIES, 'Deep = הרבה שכבות',``),
    seriesPost(5, SERIES, 'אוניברסלי',``),
    seriesPost(6, SERIES, 'אימון',``),
    seriesPost(7, SERIES, 'מול רשת רדודה',``),
    seriesPost(8, SERIES, 'Black box',``),
    seriesPost(9, SERIES, 'היסטוריה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
