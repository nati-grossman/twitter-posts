import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה pretraining?'

export const trainRealPretraining: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'ללא תוויות',``),
    seriesPost(3, SERIES, 'מה לומד',``),
    seriesPost(4, SERIES, 'גודל',``),
    seriesPost(5, SERIES, 'עלות',``),
    seriesPost(6, SERIES, 'Foundation model',``),
    seriesPost(7, SERIES, 'רישוי',``),
    seriesPost(8, SERIES, 'Multimodal',``),
    seriesPost(9, SERIES, 'לא מספיק',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
