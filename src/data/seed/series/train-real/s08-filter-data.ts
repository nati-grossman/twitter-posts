import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מסננים דאטה לאימון?'

export const trainRealFilterData: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'למה',``),
    seriesPost(2, SERIES, 'היוריסטיקות',``),
    seriesPost(3, SERIES, 'מסנני תוכן',``),
    seriesPost(4, SERIES, 'dedup',``),
    seriesPost(5, SERIES, 'PII',``),
    seriesPost(6, SERIES, 'רעילות',``),
    seriesPost(7, SERIES, 'איכות שפה',``),
    seriesPost(8, SERIES, 'מדגם',``),
    seriesPost(9, SERIES, 'אנושי',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
