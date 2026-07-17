import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל משתמש באינטרנט?'

export const aiFutureInternet: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא גלישה חופשית',``),
    seriesPost(2, SERIES, 'Browse',``),
    seriesPost(3, SERIES, 'RAG web',``),
    seriesPost(4, SERIES, 'עדכון',``),
    seriesPost(5, SERIES, 'סיכון',``),
    seriesPost(6, SERIES, 'מחיר',``),
    seriesPost(7, SERIES, 'Perplexity',``),
    seriesPost(8, SERIES, 'API חיצוני',``),
    seriesPost(9, SERIES, 'פרטיות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
