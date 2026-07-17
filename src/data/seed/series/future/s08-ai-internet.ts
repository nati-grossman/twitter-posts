import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך AI משתלב באינטרנט של העתיד?'

export const futureAiInternet: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שכבה חדשה',``),
    seriesPost(2, SERIES, 'סוכנים',``),
    seriesPost(3, SERIES, 'חיפוש',``),
    seriesPost(4, SERIES, 'תוכן מסונתז',``),
    seriesPost(5, SERIES, 'אישי',``),
    seriesPost(6, SERIES, 'תשתית',``),
    seriesPost(7, SERIES, 'רגולציה',``),
    seriesPost(8, SERIES, 'מודלים מקומיים',``),
    seriesPost(9, SERIES, 'פרוטוקולים',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
