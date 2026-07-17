import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך AI רואה תמונות?'

export const aiFutureSeeImages: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא עיניים',``),
    seriesPost(2, SERIES, 'Vision encoder',``),
    seriesPost(3, SERIES, 'Patches',``),
    seriesPost(4, SERIES, 'OCR',``),
    seriesPost(5, SERIES, 'תיאור',``),
    seriesPost(6, SERIES, 'מספרים',``),
    seriesPost(7, SERIES, 'רזולוציה',``),
    seriesPost(8, SERIES, 'בטיחות',``),
    seriesPost(9, SERIES, 'עברית בתמונה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
