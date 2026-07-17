import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה בלוקצ׳יין (ברמה בסיסית)?'

export const futureBlockchain: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'ספר מחשב משותף',``),
    seriesPost(2, SERIES, 'מבוזר',``),
    seriesPost(3, SERIES, 'Hash',``),
    seriesPost(4, SERIES, 'Immutable',``),
    seriesPost(5, SERIES, 'Public vs Private',``),
    seriesPost(6, SERIES, 'Gas',``),
    seriesPost(7, SERIES, 'לא רק מטבע',``),
    seriesPost(8, SERIES, '51% attack',``),
    seriesPost(9, SERIES, 'אנרגיה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
