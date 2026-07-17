import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך אפליקציות רצות בענן?'

export const deepInfraAppsInCloud: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מסלול פריסה',``),
    seriesPost(2, SERIES, 'PaaS פשוט',``),
    seriesPost(3, SERIES, 'Containers בענן',``),
    seriesPost(4, SERIES, 'Serverless',``),
    seriesPost(5, SERIES, 'משאבים',``),
    seriesPost(6, SERIES, 'רשת פנימית',``),
    seriesPost(7, SERIES, 'Secrets',``),
    seriesPost(8, SERIES, 'Blue-Green',``),
    seriesPost(9, SERIES, 'Observability',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
