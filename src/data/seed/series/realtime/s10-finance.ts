import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מערכות פיננסיות עובדות בזמן אמת?'

export const realtimeFinance: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מילי-שניות שוות כסף',``),
    seriesPost(2, SERIES, 'Matching engine',``),
    seriesPost(3, SERIES, 'ACID קריטי',``),
    seriesPost(4, SERIES, 'Double-entry',``),
    seriesPost(5, SERIES, 'Real-time fraud',``),
    seriesPost(6, SERIES, 'תשלומי כרטיס',``),
    seriesPost(7, SERIES, 'Blockchain',``),
    seriesPost(8, SERIES, 'Streaming מחירים',``),
    seriesPost(9, SERIES, 'רגולציה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
