import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה prediction?'

export const aiBasicsPrediction: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'חיזוי',``),
    seriesPost(2, SERIES, 'הסתברות',``),
    seriesPost(3, SERIES, 'רגרסיה',``),
    seriesPost(4, SERIES, 'Inference time',``),
    seriesPost(5, SERIES, 'Batch',``),
    seriesPost(6, SERIES, 'Confidence מזויף',``),
    seriesPost(7, SERIES, 'מול הסתברות אמיתית',``),
    seriesPost(8, SERIES, 'Online learning',``),
    seriesPost(9, SERIES, 'Ensemble',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
