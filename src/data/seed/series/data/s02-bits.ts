import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מידע מיוצג במחשב (0 ו-1)?'

export const dataBits: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'ביט',``),
    seriesPost(2, SERIES, 'בייט',``),
    seriesPost(3, SERIES, 'בינארי',``),
    seriesPost(4, SERIES, 'Unicode',``),
    seriesPost(5, SERIES, 'מספרים',``),
    seriesPost(6, SERIES, 'תמונה',``),
    seriesPost(7, SERIES, 'שמע',``),
    seriesPost(8, SERIES, 'Hex',``),
    seriesPost(9, SERIES, 'Big Endian',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
