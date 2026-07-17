import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה מיקרו-שירותים (Microservices)?'

export const scaleMicroservices: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'פיצול לפי תפקיד',``),
    seriesPost(2, SERIES, 'למה',``),
    seriesPost(3, SERIES, 'API ביניהם',``),
    seriesPost(4, SERIES, 'בעיות',``),
    seriesPost(5, SERIES, 'Service mesh',``),
    seriesPost(6, SERIES, 'Deployment',``),
    seriesPost(7, SERIES, 'לא תמיד צריך',``),
    seriesPost(8, SERIES, 'Serverless',``),
    seriesPost(9, SERIES, 'Netflix / Uber',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
