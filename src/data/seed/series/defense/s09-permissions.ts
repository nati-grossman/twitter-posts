import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה permissions באתרים?'

export const defensePermissions: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מי רשאי לעשות מה',``),
    seriesPost(2, SERIES, 'RBAC',``),
    seriesPost(3, SERIES, 'ACL',``),
    seriesPost(4, SERIES, 'OAuth scopes',``),
    seriesPost(5, SERIES, 'API keys',``),
    seriesPost(6, SERIES, 'IDOR',``),
    seriesPost(7, SERIES, 'Frontend ≠ אבטחה',``),
    seriesPost(8, SERIES, 'מובייל',``),
    seriesPost(9, SERIES, 'Zero Trust',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
