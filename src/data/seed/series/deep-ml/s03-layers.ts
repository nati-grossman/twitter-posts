import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה שכבות (layers) במודל?'

export const deepMlLayers: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שכבה = שלב',``),
    seriesPost(2, SERIES, 'היררכיה',``),
    seriesPost(3, SERIES, 'Dense / Fully connected',``),
    seriesPost(4, SERIES, 'Convolution',``),
    seriesPost(5, SERIES, 'Attention layer',``),
    seriesPost(6, SERIES, 'Input / Output',``),
    seriesPost(7, SERIES, 'Hidden',``),
    seriesPost(8, SERIES, 'Dropout',``),
    seriesPost(9, SERIES, 'Batch Norm',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
