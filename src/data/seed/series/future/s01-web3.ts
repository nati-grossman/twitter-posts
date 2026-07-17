import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה Web3?'

export const futureWeb3: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הבטחה בקצרה',``),
    seriesPost(2, SERIES, 'Web1 Web2',``),
    seriesPost(3, SERIES, 'Wallet',``),
    seriesPost(4, SERIES, 'dApp',``),
    seriesPost(5, SERIES, 'מגבלות',``),
    seriesPost(6, SERIES, 'Token',``),
    seriesPost(7, SERIES, 'DAO',``),
    seriesPost(8, SERIES, 'מיתוס',``),
    seriesPost(9, SERIES, 'שימושים אמיתיים',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
