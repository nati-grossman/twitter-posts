import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה חוזים חכמים?'

export const futureSmartContracts: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'קוד כחוזה',``),
    seriesPost(2, SERIES, 'Ethereum',``),
    seriesPost(3, SERIES, 'דוגמה',``),
    seriesPost(4, SERIES, 'Immutable',``),
    seriesPost(5, SERIES, 'Oracle',``),
    seriesPost(6, SERIES, 'DeFi',``),
    seriesPost(7, SERIES, 'Legal',``),
    seriesPost(8, SERIES, 'Upgradeable',``),
    seriesPost(9, SERIES, 'מול API רגיל',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
