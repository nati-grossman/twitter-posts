import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל משתפר עם טעויות?'

export const modelLearnMistakes: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'טעות = אות',``),
    seriesPost(2, SERIES, 'Backprop',``),
    seriesPost(3, SERIES, 'כיוון תיקון',``),
    seriesPost(4, SERIES, 'לא זיכרון מושלם',``),
    seriesPost(5, SERIES, 'Batch',``),
    seriesPost(6, SERIES, 'רעש בדאטה',``),
    seriesPost(7, SERIES, 'Hard examples',``),
    seriesPost(8, SERIES, 'RL',``),
    seriesPost(9, SERIES, 'אדם בלולאה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
