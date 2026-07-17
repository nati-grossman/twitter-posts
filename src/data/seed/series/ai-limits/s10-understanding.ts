import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'האם AI באמת מבין משהו?'

export const aiLimitsUnderstanding: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'המחלוקת',``),
    seriesPost(2, SERIES, 'סטטיסטיקה',``),
    seriesPost(3, SERIES, 'Chinese Room',``),
    seriesPost(4, SERIES, 'יכולות',``),
    seriesPost(5, SERIES, 'טעויות',``),
    seriesPost(6, SERIES, 'מוח',``),
    seriesPost(7, SERIES, 'שימושי',``),
    seriesPost(8, SERIES, 'סיכון',``),
    seriesPost(9, SERIES, 'מחקר',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
