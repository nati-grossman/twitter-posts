import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה אלגוריתם פיד?'

export const scaleFeedAlgo: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מיון, לא רק זמן',``),
    seriesPost(2, SERIES, 'ציון',``),
    seriesPost(3, SERIES, 'Candidate generation',``),
    seriesPost(4, SERIES, 'Exploration',``),
    seriesPost(5, SERIES, 'Diversity',``),
    seriesPost(6, SERIES, 'Instagram / X',``),
    seriesPost(7, SERIES, 'שקיפות',``),
    seriesPost(8, SERIES, 'מניפולציה',``),
    seriesPost(9, SERIES, 'מפתחים',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
