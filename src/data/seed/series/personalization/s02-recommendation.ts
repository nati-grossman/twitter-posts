import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה recommendation system?'

export const persRecommendation: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'Content-based',``),
    seriesPost(3, SERIES, 'Collaborative',``),
    seriesPost(4, SERIES, 'Hybrid',``),
    seriesPost(5, SERIES, 'Ranking',``),
    seriesPost(6, SERIES, 'Cold start',``),
    seriesPost(7, SERIES, 'Exploration',``),
    seriesPost(8, SERIES, 'מטריקות',``),
    seriesPost(9, SERIES, 'RL',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
