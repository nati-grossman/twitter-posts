import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך כל מילה מדברת עם כל מילה?'

export const xfmDeepEveryWordTalks: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מטריצה מלאה',``),
    seriesPost(2, SERIES, 'דוגמה',``),
    seriesPost(3, SERIES, 'לא שווה',``),
    seriesPost(4, SERIES, 'Multi-head',``),
    seriesPost(5, SERIES, 'שכבה 1 vs 40',``),
    seriesPost(6, SERIES, 'Causal',``),
    seriesPost(7, SERIES, 'Bidirectional',``),
    seriesPost(8, SERIES, 'עלות',``),
    seriesPost(9, SERIES, 'Induction',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
