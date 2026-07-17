import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך נוצרת תשובה שלמה צעד-אחר-צעד?'

export const llmWorkStepByStep: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לולאה',``),
    seriesPost(2, SERIES, 'Forward pass',``),
    seriesPost(3, SERIES, 'Decode',``),
    seriesPost(4, SERIES, 'Stop conditions',``),
    seriesPost(5, SERIES, 'Temperature',``),
    seriesPost(6, SERIES, 'Coherence',``),
    seriesPost(7, SERIES, 'Tool use',``),
    seriesPost(8, SERIES, 'Chain-of-thought',``),
    seriesPost(9, SERIES, 'שגיאות מצטברות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
