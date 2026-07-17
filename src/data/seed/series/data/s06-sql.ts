import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה database SQL?'

export const dataSql: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'DB יחסי',``),
    seriesPost(2, SERIES, 'SELECT',``),
    seriesPost(3, SERIES, 'JOIN',``),
    seriesPost(4, SERIES, 'INSERT UPDATE DELETE',``),
    seriesPost(5, SERIES, 'Schema',``),
    seriesPost(6, SERIES, 'Primary key',``),
    seriesPost(7, SERIES, 'Index',``),
    seriesPost(8, SERIES, 'מתי SQL',``),
    seriesPost(9, SERIES, 'ORM',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
