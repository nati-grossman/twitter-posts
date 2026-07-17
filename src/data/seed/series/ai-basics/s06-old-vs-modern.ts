import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה ההבדל בין AI ישן ל-ML מודרני?'

export const aiBasicsOldVsModern: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'AI ישן — סמלי',``),
    seriesPost(2, SERIES, 'בעיית הקנה מידה',``),
    seriesPost(3, SERIES, 'ML מודרני',``),
    seriesPost(4, SERIES, 'Deep Learning',``),
    seriesPost(5, SERIES, 'Transformers',``),
    seriesPost(6, SERIES, 'Feature engineering',``),
    seriesPost(7, SERIES, 'היברידי היום',``),
    seriesPost(8, SERIES, 'סיבה למעבר',``),
    seriesPost(9, SERIES, 'מיתוסים',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
