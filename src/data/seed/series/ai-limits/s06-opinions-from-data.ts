import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה AI לומד דעות מהדאטה?'

export const aiLimitsOpinionsFromData: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'דעה = דפוס',``),
    seriesPost(2, SERIES, 'לא עובדות',``),
    seriesPost(3, SERIES, 'פוליטיקה',``),
    seriesPost(4, SERIES, 'RLHF',``),
    seriesPost(5, SERIES, 'ניטרלי מדומה',``),
    seriesPost(6, SERIES, 'שאלה מכוונת',``),
    seriesPost(7, SERIES, 'לא מצביע',``),
    seriesPost(8, SERIES, 'מומחה מדומה',``),
    seriesPost(9, SERIES, 'שקיפות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
