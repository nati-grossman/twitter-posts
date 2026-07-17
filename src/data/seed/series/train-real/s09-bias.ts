import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה bias בדאטה?'

export const trainRealBias: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'ייצוג',``),
    seriesPost(3, SERIES, 'סטריאוטיפ',``),
    seriesPost(4, SERIES, 'היסטורי',``),
    seriesPost(5, SERIES, 'מקור',``),
    seriesPost(6, SERIES, 'מדידה',``),
    seriesPost(7, SERIES, 'תיקון',``),
    seriesPost(8, SERIES, 'RLHF',``),
    seriesPost(9, SERIES, 'לא רק טכני',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
