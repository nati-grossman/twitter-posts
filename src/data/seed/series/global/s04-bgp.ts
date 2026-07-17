import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה BGP (ניתוב בין רשתות עולמיות)?'

export const globalBgp: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'GPS של האינטרנט',``),
    seriesPost(2, SERIES, 'Autonomous System',``),
    seriesPost(3, SERIES, 'Path vector',``),
    seriesPost(4, SERIES, 'Peering ו-Transit',``),
    seriesPost(5, SERIES, 'Route leak',``),
    seriesPost(6, SERIES, 'Hijacking',``),
    seriesPost(7, SERIES, 'RPKI',``),
    seriesPost(8, SERIES, 'מול OSPF פנימי',``),
    seriesPost(9, SERIES, 'ניטור',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
