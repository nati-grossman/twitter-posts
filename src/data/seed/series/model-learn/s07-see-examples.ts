import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל רואה דוגמאות?'

export const modelLearnSeeExamples: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא עיניים',``),
    seriesPost(2, SERIES, 'Normalization',``),
    seriesPost(3, SERIES, 'Token IDs',``),
    seriesPost(4, SERIES, 'Batch',``),
    seriesPost(5, SERIES, 'Augmentation',``),
    seriesPost(6, SERIES, 'Label',``),
    seriesPost(7, SERIES, 'Attention',``),
    seriesPost(8, SERIES, 'רעש',``),
    seriesPost(9, SERIES, 'Multimodal',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
