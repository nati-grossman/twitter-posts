import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה קריפטוגרפיה באינטרנט?'

export const futureCryptoInternet: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא מטבעות בלבד',``),
    seriesPost(2, SERIES, 'Symmetric',``),
    seriesPost(3, SERIES, 'Asymmetric',``),
    seriesPost(4, SERIES, 'Hash',``),
    seriesPost(5, SERIES, 'TLS',``),
    seriesPost(6, SERIES, 'End-to-end',``),
    seriesPost(7, SERIES, 'Zero-knowledge',``),
    seriesPost(8, SERIES, 'Post-quantum',``),
    seriesPost(9, SERIES, 'מפתחות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
