import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך אפליקציות מתעדכנות?'

export const appsUpdates: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'סוגי עדכון',``),
    seriesPost(2, SERIES, 'App Store flow',``),
    seriesPost(3, SERIES, 'OTA — CodePush',``),
    seriesPost(4, SERIES, 'Force update',``),
    seriesPost(5, SERIES, 'Feature flags',``),
    seriesPost(6, SERIES, 'Schema migration',``),
    seriesPost(7, SERIES, 'Staged rollout',``),
    seriesPost(8, SERIES, 'Web app',``),
    seriesPost(9, SERIES, 'Rollback',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
