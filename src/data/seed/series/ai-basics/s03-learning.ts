import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מחשב לומד במקום להיות מתוכנת?'

export const aiBasicsLearning: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא if על כל מקרה',``),
    seriesPost(2, SERIES, 'Loss',``),
    seriesPost(3, SERIES, 'Gradient descent',``),
    seriesPost(4, SERIES, 'Epoch',``),
    seriesPost(5, SERIES, 'Backpropagation',``),
    seriesPost(6, SERIES, 'היפרפרמטרים',``),
    seriesPost(7, SERIES, 'Validation',``),
    seriesPost(8, SERIES, 'מול תכנות קלאסי',``),
    seriesPost(9, SERIES, 'כשל',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
