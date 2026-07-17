import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה אינדקס (Index) של אתרים?'

export const scaleIndex: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מפתח לספר',``),
    seriesPost(2, SERIES, 'Inverted',``),
    seriesPost(3, SERIES, 'מול DB index',``),
    seriesPost(4, SERIES, 'גודל',``),
    seriesPost(5, SERIES, 'עדכון',``),
    seriesPost(6, SERIES, 'Elasticsearch',``),
    seriesPost(7, SERIES, 'Full-text',``),
    seriesPost(8, SERIES, 'מחיקה',``),
    seriesPost(9, SERIES, 'Private',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
