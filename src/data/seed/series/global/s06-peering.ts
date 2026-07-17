import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה peering בין רשתות?'

export const globalPeering: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'מול Transit',``),
    seriesPost(3, SERIES, 'Settlement-free',``),
    seriesPost(4, SERIES, 'Paid peering',``),
    seriesPost(5, SERIES, 'Public peering',``),
    seriesPost(6, SERIES, 'Private peering',``),
    seriesPost(7, SERIES, 'Peering policy',``),
    seriesPost(8, SERIES, 'למה לא תמיד',``),
    seriesPost(9, SERIES, 'השפעה על משתמש',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
