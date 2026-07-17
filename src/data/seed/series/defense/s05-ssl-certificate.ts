import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה SSL certificate?'

export const defenseSslCertificate: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'SSL, TLS, HTTPS',``),
    seriesPost(2, SERIES, 'מה התעודה עושה',``),
    seriesPost(3, SERIES, 'Certificate Authority',``),
    seriesPost(4, SERIES, 'Handshake',``),
    seriesPost(5, SERIES, 'מה מוגן',``),
    seriesPost(6, SERIES, 'תפוגה וחידוש',``),
    seriesPost(7, SERIES, 'סוגי אימות',``),
    seriesPost(8, SERIES, 'Mixed content',``),
    seriesPost(9, SERIES, 'לא שווה "אמיתי"',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
