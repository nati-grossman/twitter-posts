import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודלים עובדים בקנה מידה של מיליונים?'

export const aiProdScaleMillions: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'בעיה',``),
    seriesPost(2, SERIES, 'אופקי',``),
    seriesPost(3, SERIES, 'תורים',``),
    seriesPost(4, SERIES, 'Rate limit',``),
    seriesPost(5, SERIES, 'Caching',``),
    seriesPost(6, SERIES, 'Routing',``),
    seriesPost(7, SERIES, 'Multi-region',``),
    seriesPost(8, SERIES, 'Cost',``),
    seriesPost(9, SERIES, 'תחזוקה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
