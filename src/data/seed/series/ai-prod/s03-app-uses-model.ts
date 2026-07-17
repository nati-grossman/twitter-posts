import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך אפליקציה משתמשת במודל?'

export const aiProdAppUsesModel: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'ארכיטקטורה',``),
    seriesPost(2, SERIES, 'פרומפט',``),
    seriesPost(3, SERIES, 'תשובה',``),
    seriesPost(4, SERIES, 'כלים',``),
    seriesPost(5, SERIES, 'RAG',``),
    seriesPost(6, SERIES, 'Timeout',``),
    seriesPost(7, SERIES, 'Fallback',``),
    seriesPost(8, SERIES, 'לוגים',``),
    seriesPost(9, SERIES, 'עלות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
