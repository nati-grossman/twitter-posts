import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך AI מתוחזק בזמן אמת?'

export const aiProdRealtimeOps: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, '24/7',``),
    seriesPost(2, SERIES, 'מוניטור',``),
    seriesPost(3, SERIES, 'לוגים',``),
    seriesPost(4, SERIES, 'גרסאות',``),
    seriesPost(5, SERIES, 'Abuse',``),
    seriesPost(6, SERIES, 'עומס',``),
    seriesPost(7, SERIES, 'בטיחות',``),
    seriesPost(8, SERIES, 'עלות live',``),
    seriesPost(9, SERIES, 'תאימות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
