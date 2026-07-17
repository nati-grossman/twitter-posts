import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך עובד ביטקוין (ברעיון)?'

export const futureBitcoin: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מטרה',``),
    seriesPost(2, SERIES, 'UTXO',``),
    seriesPost(3, SERIES, 'Transaction',``),
    seriesPost(4, SERIES, 'Mining',``),
    seriesPost(5, SERIES, 'Blocks',``),
    seriesPost(6, SERIES, 'Wallet address',``),
    seriesPost(7, SERIES, 'מגבלות',``),
    seriesPost(8, SERIES, 'Lightning',``),
    seriesPost(9, SERIES, 'Store of value',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
