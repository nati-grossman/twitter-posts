import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך self-attention עובד רעיונית?'

export const xfmDeepSelfAttention: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שאלה',``),
    seriesPost(2, SERIES, 'שלושה וקטורים',``),
    seriesPost(3, SERIES, 'ציון',``),
    seriesPost(4, SERIES, 'Softmax',``),
    seriesPost(5, SERIES, 'שילוב',``),
    seriesPost(6, SERIES, 'אנלוגיה',``),
    seriesPost(7, SERIES, 'ללא מיקום עדיין',``),
    seriesPost(8, SERIES, 'Scaled',``),
    seriesPost(9, SERIES, 'חזרה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
