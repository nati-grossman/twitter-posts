import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך אפליקציה שומרת נתונים מקומית?'

export const appsLocalStorage: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'למה מקומי',``),
    seriesPost(2, SERIES, 'SQLite',``),
    seriesPost(3, SERIES, 'Key-Value',``),
    seriesPost(4, SERIES, 'קבצים',``),
    seriesPost(5, SERIES, 'Encrypted',``),
    seriesPost(6, SERIES, 'Sync',``),
    seriesPost(7, SERIES, 'Cache policy',``),
    seriesPost(8, SERIES, 'מחיקה',``),
    seriesPost(9, SERIES, 'Web',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
