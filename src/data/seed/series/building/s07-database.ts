import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה database?'

export const buildingDatabase: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מחסן מסודר',``),
    seriesPost(2, SERIES, 'SQL relational',``),
    seriesPost(3, SERIES, 'NoSQL',``),
    seriesPost(4, SERIES, 'ORM',``),
    seriesPost(5, SERIES, 'ACID',``),
    seriesPost(6, SERIES, 'אינדקס',``),
    seriesPost(7, SERIES, 'גיבוי',``),
    seriesPost(8, SERIES, 'לא בקובץ JSON אחד',``),
    seriesPost(9, SERIES, 'Data warehouse',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
