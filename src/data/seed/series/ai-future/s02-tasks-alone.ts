import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך AI יכול לבצע משימות לבד?'

export const aiFutureTasksAlone: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לולאה',``),
    seriesPost(2, SERIES, 'כלים',``),
    seriesPost(3, SERIES, 'Function calling',``),
    seriesPost(4, SERIES, 'דוגמה',``),
    seriesPost(5, SERIES, 'מגבלות',``),
    seriesPost(6, SERIES, 'אישור',``),
    seriesPost(7, SERIES, 'זמן',``),
    seriesPost(8, SERIES, 'שגיאות',``),
    seriesPost(9, SERIES, 'לא AGI',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
