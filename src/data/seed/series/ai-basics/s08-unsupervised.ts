import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה unsupervised learning?'

export const aiBasicsUnsupervised: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'בלי תשובות',``),
    seriesPost(2, SERIES, 'Clustering',``),
    seriesPost(3, SERIES, 'Dimensionality reduction',``),
    seriesPost(4, SERIES, 'Anomaly detection',``),
    seriesPost(5, SERIES, 'Pretraining',``),
    seriesPost(6, SERIES, 'Autoencoder',``),
    seriesPost(7, SERIES, 'קשה להעריך',``),
    seriesPost(8, SERIES, 'Recommendation',``),
    seriesPost(9, SERIES, 'Self-supervised',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
