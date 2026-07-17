import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך טיקטוק בונה פיד?'

export const persTiktokFeed: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'For You Page',``),
    seriesPost(2, SERIES, 'אותות חזקים',``),
    seriesPost(3, SERIES, 're-watch',``),
    seriesPost(4, SERIES, 'תגובות',``),
    seriesPost(5, SERIES, 'embedding',``),
    seriesPost(6, SERIES, 'batch',``),
    seriesPost(7, SERIES, 'cold start',``),
    seriesPost(8, SERIES, 'filter bubble',``),
    seriesPost(9, SERIES, 'לא רק AI גנרי',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
