import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה אינטרנט מבוזר באמת?'

export const globalDecentralized: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מיתוס מול מציאות',``),
    seriesPost(2, SERIES, 'מה כן מבוזר',``),
    seriesPost(3, SERIES, 'מה מרוכז',``),
    seriesPost(4, SERIES, 'DNS',``),
    seriesPost(5, SERIES, 'Blockchain / Web3',``),
    seriesPost(6, SERIES, 'Mesh, Tor',``),
    seriesPost(7, SERIES, 'ActivityPub',``),
    seriesPost(8, SERIES, 'IPFS',``),
    seriesPost(9, SERIES, 'סיכון מרוכזות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
