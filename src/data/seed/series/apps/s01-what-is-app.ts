import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה אפליקציה?'

export const appsWhatIsApp: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא רק אייקון',``),
    seriesPost(2, SERIES, 'Native מול Web',``),
    seriesPost(3, SERIES, 'Client',``),
    seriesPost(4, SERIES, 'מול מערכת הפעלה',``),
    seriesPost(5, SERIES, 'חנות אפליקציות',``),
    seriesPost(6, SERIES, 'Desktop',``),
    seriesPost(7, SERIES, 'SaaS בדפדפן',``),
    seriesPost(8, SERIES, 'Micro-app',``),
    seriesPost(9, SERIES, 'לא OS',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
