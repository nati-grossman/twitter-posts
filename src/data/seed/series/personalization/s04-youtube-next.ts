import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך יוטיוב בוחר לך סרטון הבא?'

export const persYoutubeNext: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מטרה: watch time',``),
    seriesPost(2, SERIES, 'היסטוריה',``),
    seriesPost(3, SERIES, 'Sidebar',``),
    seriesPost(4, SERIES, 'Home',``),
    seriesPost(5, SERIES, 'Thumbnail + title',``),
    seriesPost(6, SERIES, 'קטגוריות',``),
    seriesPost(7, SERIES, 'Shorts נפרד',``),
    seriesPost(8, SERIES, 'לא ממליץ בלי נתונים',``),
    seriesPost(9, SERIES, 'kids',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
