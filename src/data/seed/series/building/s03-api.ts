import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה API?'

export const buildingApi: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'מסעדה',``),
    seriesPost(3, SERIES, 'REST נפוץ',``),
    seriesPost(4, SERIES, 'Request ו-Response',``),
    seriesPost(5, SERIES, 'Public vs Private',``),
    seriesPost(6, SERIES, 'GraphQL',``),
    seriesPost(7, SERIES, 'Webhooks',``),
    seriesPost(8, SERIES, 'תיעוד (Documentation)',``),
    seriesPost(9, SERIES, 'גרסאות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
