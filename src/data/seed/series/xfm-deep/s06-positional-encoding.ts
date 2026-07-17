import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה positional encoding?'

export const xfmDeepPositionalEncoding: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הבעיה',``),
    seriesPost(2, SERIES, 'סינוסים מקוריים',``),
    seriesPost(3, SERIES, 'Learned',``),
    seriesPost(4, SERIES, 'חיבור',``),
    seriesPost(5, SERIES, 'RoPE',``),
    seriesPost(6, SERIES, 'ALiBi',``),
    seriesPost(7, SERIES, 'אורך',``),
    seriesPost(8, SERIES, 'לא תאריך',``),
    seriesPost(9, SERIES, 'בלי = כשל',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
