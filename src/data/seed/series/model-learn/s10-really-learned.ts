import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך יודעים שמודל באמת למד?'

export const modelLearnReallyLearned: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא loss בלבד',``),
    seriesPost(2, SERIES, 'Generalization',``),
    seriesPost(3, SERIES, 'OOD',``),
    seriesPost(4, SERIES, 'Benchmarks',``),
    seriesPost(5, SERIES, 'Human eval',``),
    seriesPost(6, SERIES, 'Calibration',``),
    seriesPost(7, SERIES, 'A/B production',``),
    seriesPost(8, SERIES, 'Red flags',``),
    seriesPost(9, SERIES, 'לא הבנה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
