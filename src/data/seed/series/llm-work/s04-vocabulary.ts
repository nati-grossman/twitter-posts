import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה vocabulary של מודל?'

export const llmWorkVocabulary: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מילון סגור',``),
    seriesPost(2, SERIES, 'Output layer',``),
    seriesPost(3, SERIES, 'לא כל מילה',``),
    seriesPost(4, SERIES, 'מרחב',``),
    seriesPost(5, SERIES, 'גרסאות',``),
    seriesPost(6, SERIES, 'OOV ישן',``),
    seriesPost(7, SERIES, 'Multilingual',``),
    seriesPost(8, SERIES, 'הרחבה',``),
    seriesPost(9, SERIES, ' logits גדולים',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
