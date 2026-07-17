import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך שומרים מידע בצורה חכמה?'

export const buildingSmartData: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'נורמליזציה',``),
    seriesPost(2, SERIES, 'סכמה',``),
    seriesPost(3, SERIES, 'מפתחות',``),
    seriesPost(4, SERIES, 'אינדקסים חכמים',``),
    seriesPost(5, SERIES, 'Partitioning',``),
    seriesPost(6, SERIES, 'Cache כשכבה',``),
    seriesPost(7, SERIES, 'ארכיון',``),
    seriesPost(8, SERIES, 'הצפנה ו-PII',``),
    seriesPost(9, SERIES, 'Migrations',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
