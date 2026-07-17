import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך ייראו אפליקציות בעוד 10 שנים?'

export const futureApps10Years: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'פחות אייקונים',``),
    seriesPost(2, SERIES, 'היפר-אישי',``),
    seriesPost(3, SERIES, 'AR משולב',``),
    seriesPost(4, SERIES, 'פחות התקנה',``),
    seriesPost(5, SERIES, 'קול וטבעי',``),
    seriesPost(6, SERIES, 'פרטיות מובנית',``),
    seriesPost(7, SERIES, 'תשלום רציף',``),
    seriesPost(8, SERIES, 'עדיין אפליקציות',``),
    seriesPost(9, SERIES, 'פלטפורמות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
