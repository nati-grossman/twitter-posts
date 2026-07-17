import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך עושים חיפוש בתוך דאטה ענק?'

export const dataSearchBig: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא SELECT על הכל',``),
    seriesPost(2, SERIES, 'Index',``),
    seriesPost(3, SERIES, 'Elasticsearch',``),
    seriesPost(4, SERIES, 'Inverted index',``),
    seriesPost(5, SERIES, 'Vector search',``),
    seriesPost(6, SERIES, 'Bloom filter',``),
    seriesPost(7, SERIES, 'MapReduce / Spark',``),
    seriesPost(8, SERIES, 'Caching',``),
    seriesPost(9, SERIES, 'Query plan',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
