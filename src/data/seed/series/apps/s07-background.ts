import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה background process?'

export const appsBackground: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'Foreground מול Background',``),
    seriesPost(2, SERIES, 'למה',``),
    seriesPost(3, SERIES, 'iOS מחמיר',``),
    seriesPost(4, SERIES, 'Android גמיש יותר',``),
    seriesPost(5, SERIES, 'Threads',``),
    seriesPost(6, SERIES, 'Push handler',``),
    seriesPost(7, SERIES, 'Location',``),
    seriesPost(8, SERIES, 'Kill',``),
    seriesPost(9, SERIES, 'Headless JS',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
