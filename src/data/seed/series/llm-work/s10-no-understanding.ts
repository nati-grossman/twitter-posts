import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה מודלים לא באמת מבינים טקסט?'

export const llmWorkNoUnderstanding: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'סטטיסטיקה',``),
    seriesPost(2, SERIES, 'Stochastic parrot',``),
    seriesPost(3, SERIES, 'Hallucination',``),
    seriesPost(4, SERIES, 'אין גוף',``),
    seriesPost(5, SERIES, 'Syntax בלי semantics',``),
    seriesPost(6, SERIES, 'Benchmark מטעה',``),
    seriesPost(7, SERIES, 'גבולות',``),
    seriesPost(8, SERIES, 'שימושי בכל זאת',``),
    seriesPost(9, SERIES, 'עתיד',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
