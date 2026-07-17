import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל רץ בענן?'

export const aiProdCloud: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'קלאסטר',``),
    seriesPost(2, SERIES, 'Kubernetes',``),
    seriesPost(3, SERIES, 'מודל בזיכרון',``),
    seriesPost(4, SERIES, 'Load balancer',``),
    seriesPost(5, SERIES, 'Multi-tenant',``),
    seriesPost(6, SERIES, 'אזורים',``),
    seriesPost(7, SERIES, 'כשל',``),
    seriesPost(8, SERIES, 'עלות ענן',``),
    seriesPost(9, SERIES, 'Private cloud',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
