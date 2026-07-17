import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה API באפליקציות?'

export const appsApiInApps: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'חוזה',``),
    seriesPost(2, SERIES, 'דוגמה',``),
    seriesPost(3, SERIES, 'SDK',``),
    seriesPost(4, SERIES, 'מפתחות',``),
    seriesPost(5, SERIES, 'OAuth',``),
    seriesPost(6, SERIES, 'GraphQL',``),
    seriesPost(7, SERIES, 'Rate limit',``),
    seriesPost(8, SERIES, 'Mock',``),
    seriesPost(9, SERIES, 'OpenAPI',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
