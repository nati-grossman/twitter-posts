import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך משחקים אונליין מעבירים מצב משחק?'

export const realtimeGameState: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מצב משחק',``),
    seriesPost(2, SERIES, 'Client prediction',``),
    seriesPost(3, SERIES, 'Server authoritative',``),
    seriesPost(4, SERIES, 'Snapshot',``),
    seriesPost(5, SERIES, 'Interpolation',``),
    seriesPost(6, SERIES, 'Lag compensation',``),
    seriesPost(7, SERIES, 'Interest management',``),
    seriesPost(8, SERIES, 'Dedicated server',``),
    seriesPost(9, SERIES, 'MMO',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
