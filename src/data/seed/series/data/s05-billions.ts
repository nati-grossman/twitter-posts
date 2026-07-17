import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך שומרים מיליארדי נתונים?'

export const dataBillions: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא דיסק אחד',``),
    seriesPost(2, SERIES, 'Data lake',``),
    seriesPost(3, SERIES, 'Partitioning',``),
    seriesPost(4, SERIES, 'Replication',``),
    seriesPost(5, SERIES, 'Compression',``),
    seriesPost(6, SERIES, 'Tiering',``),
    seriesPost(7, SERIES, 'Sharding DB',``),
    seriesPost(8, SERIES, 'CDN לקבצים',``),
    seriesPost(9, SERIES, 'מחיקה ו-GDPR',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
