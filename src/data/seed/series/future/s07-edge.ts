import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה edge computing?'

export const futureEdge: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'העברת חישוב',``),
    seriesPost(2, SERIES, 'למה',``),
    seriesPost(3, SERIES, 'מול Cloud',``),
    seriesPost(4, SERIES, 'CDN קרוב',``),
    seriesPost(5, SERIES, 'IoT',``),
    seriesPost(6, SERIES, '5G MEC',``),
    seriesPost(7, SERIES, 'פרטיות',``),
    seriesPost(8, SERIES, 'סינכרון',``),
    seriesPost(9, SERIES, 'AI at edge',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
