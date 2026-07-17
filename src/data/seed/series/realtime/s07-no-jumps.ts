import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מערכות מונעות קפיצות בזמן אמת?'

export const realtimeNoJumps: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'קפיצה = חוסר רציפות',``),
    seriesPost(2, SERIES, 'Interpolation',``),
    seriesPost(3, SERIES, 'Extrapolation',``),
    seriesPost(4, SERIES, 'Dead reckoning',``),
    seriesPost(5, SERIES, 'Buffer jitter',``),
    seriesPost(6, SERIES, 'Snap threshold',``),
    seriesPost(7, SERIES, 'Smooth camera',``),
    seriesPost(8, SERIES, 'Frame sync',``),
    seriesPost(9, SERIES, 'Rollback netcode',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
