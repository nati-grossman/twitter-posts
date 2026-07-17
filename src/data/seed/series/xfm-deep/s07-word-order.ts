import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל יודע סדר של מילים?'

export const xfmDeepWordOrder: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא מטבעית',``),
    seriesPost(2, SERIES, 'מיקום בוקטור',``),
    seriesPost(3, SERIES, 'יחסי',``),
    seriesPost(4, SERIES, 'Causal',``),
    seriesPost(5, SERIES, 'דקדוק',``),
    seriesPost(6, SERIES, 'היפוך',``),
    seriesPost(7, SERIES, 'רשימות',``),
    seriesPost(8, SERIES, 'עברית RTL',``),
    seriesPost(9, SERIES, 'חלון',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
