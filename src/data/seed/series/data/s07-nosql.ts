import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה NoSQL?'

export const dataNosql: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא SQL אחד',``),
    seriesPost(2, SERIES, 'Document',``),
    seriesPost(3, SERIES, 'Key-Value',``),
    seriesPost(4, SERIES, 'Column',``),
    seriesPost(5, SERIES, 'Graph',``),
    seriesPost(6, SERIES, 'מתי',``),
    seriesPost(7, SERIES, 'CAP',``),
    seriesPost(8, SERIES, 'Eventual consistency',``),
    seriesPost(9, SERIES, 'Polyglot persistence',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
