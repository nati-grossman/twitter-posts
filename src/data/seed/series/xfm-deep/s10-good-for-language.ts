import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה transformers טובים לשפה?'

export const xfmDeepGoodForLanguage: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'תלות ארוכה',``),
    seriesPost(2, SERIES, 'דו-כיוון הקשר',``),
    seriesPost(3, SERIES, 'מקבילות אימון',``),
    seriesPost(4, SERIES, 'משימה אחת',``),
    seriesPost(5, SERIES, 'דפוסים רב-קנים',``),
    seriesPost(6, SERIES, 'Few-shot',``),
    seriesPost(7, SERIES, 'רב-לשוני',``),
    seriesPost(8, SERIES, 'לא מושלם',``),
    seriesPost(9, SERIES, 'דומיננטיות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
