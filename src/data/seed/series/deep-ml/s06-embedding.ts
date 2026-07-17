import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה embedding?'

export const deepMlEmbedding: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'וקטור במקום מילה',``),
    seriesPost(2, SERIES, 'למה לא one-hot',``),
    seriesPost(3, SERIES, 'נלמד',``),
    seriesPost(4, SERIES, 'מרחב',``),
    seriesPost(5, SERIES, 'sentence embedding',``),
    seriesPost(6, SERIES, 'תמונה גם',``),
    seriesPost(7, SERIES, 'לא משמעות אנושית',``),
    seriesPost(8, SERIES, 'שכבת embedding',``),
    seriesPost(9, SERIES, 'שמירה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
