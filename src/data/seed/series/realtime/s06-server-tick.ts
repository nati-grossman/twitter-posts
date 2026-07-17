import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה server tick?'

export const realtimeServerTick: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לב המשחק',``),
    seriesPost(2, SERIES, 'Fixed timestep',``),
    seriesPost(3, SERIES, 'קלט בין ticks',``),
    seriesPost(4, SERIES, 'Tick rate ו-FPS',``),
    seriesPost(5, SERIES, 'Overhead',``),
    seriesPost(6, SERIES, 'Determinism',``),
    seriesPost(7, SERIES, 'Network tick',``),
    seriesPost(8, SERIES, 'Slow tick משחק אחר',``),
    seriesPost(9, SERIES, 'Event loop כללי',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
