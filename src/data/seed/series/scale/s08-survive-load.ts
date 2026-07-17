import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך אתרים גדולים שורדים עומסים ענקיים?'

export const scaleSurviveLoad: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא שרת אחד גיבור',``),
    seriesPost(2, SERIES, 'Stateless app',``),
    seriesPost(3, SERIES, 'Cache everywhere',``),
    seriesPost(4, SERIES, 'Read replicas',``),
    seriesPost(5, SERIES, 'Async',``),
    seriesPost(6, SERIES, 'Rate limit + WAF',``),
    seriesPost(7, SERIES, 'Graceful degradation',``),
    seriesPost(8, SERIES, 'Multi-region',``),
    seriesPost(9, SERIES, 'Chaos engineering',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
