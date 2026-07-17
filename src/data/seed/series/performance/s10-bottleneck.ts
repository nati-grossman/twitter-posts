import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה performance bottleneck?'

export const perfBottleneck: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'צוואר בקבוק',``),
    seriesPost(2, SERIES, 'אנלוגיה',``),
    seriesPost(3, SERIES, 'DB',``),
    seriesPost(4, SERIES, 'רשת',``),
    seriesPost(5, SERIES, 'CPU',``),
    seriesPost(6, SERIES, 'זיכרון',``),
    seriesPost(7, SERIES, 'מציאות',``),
    seriesPost(8, SERIES, 'Amdahl',``),
    seriesPost(9, SERIES, 'פתרון',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
