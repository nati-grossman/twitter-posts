import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה multimodal AI (טקסט+תמונה+קול)?'

export const aiFutureMultimodal: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'למה',``),
    seriesPost(3, SERIES, 'GPT-4V',``),
    seriesPost(4, SERIES, 'קול',``),
    seriesPost(5, SERIES, 'איחוד',``),
    seriesPost(6, SERIES, 'יצירה',``),
    seriesPost(7, SERIES, 'עלות',``),
    seriesPost(8, SERIES, 'רובוטיקה',``),
    seriesPost(9, SERIES, 'מגבלות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
