import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה הגבול בין התאמה לפגיעה בפרטיות?'

export const persPrivacyLine: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'התאמה טובה',``),
    seriesPost(2, SERIES, 'פגיעה',``),
    seriesPost(3, SERIES, 'הסכמה',``),
    seriesPost(4, SERIES, 'מינימום',``),
    seriesPost(5, SERIES, 'שקיפות',``),
    seriesPost(6, SERIES, 'Profiling',``),
    seriesPost(7, SERIES, 'ילדים',``),
    seriesPost(8, SERIES, 'כלי משתמש',``),
    seriesPost(9, SERIES, 'אחריות חברה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
