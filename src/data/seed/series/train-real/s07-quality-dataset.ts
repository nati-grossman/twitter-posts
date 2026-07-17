import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה dataset איכותי?'

export const trainRealQualityDataset: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא רק גודל',``),
    seriesPost(2, SERIES, 'מגוון',``),
    seriesPost(3, SERIES, 'תיוג נכון',``),
    seriesPost(4, SERIES, 'עדכני',``),
    seriesPost(5, SERIES, 'מאוזן',``),
    seriesPost(6, SERIES, 'רישוי',``),
    seriesPost(7, SERIES, 'פרטיות',``),
    seriesPost(8, SERIES, 'דופליקטים',``),
    seriesPost(9, SERIES, 'Human in loop',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
