import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה קורה כשפותחים אפליקציה?'

export const appsOnOpen: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לחיצה על אייקון',``),
    seriesPost(2, SERIES, 'Splash',``),
    seriesPost(3, SERIES, 'Init',``),
    seriesPost(4, SERIES, 'Cold start',``),
    seriesPost(5, SERIES, 'רשת',``),
    seriesPost(6, SERIES, 'Permissions',``),
    seriesPost(7, SERIES, 'Analytics',``),
    seriesPost(8, SERIES, 'Deep link',``),
    seriesPost(9, SERIES, 'כשל',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
