import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך שני אתרים מדברים אחד עם השני?'

export const buildingSitesTalk: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא כבל ישיר',``),
    seriesPost(2, SERIES, 'דוגמה: תשלום',``),
    seriesPost(3, SERIES, 'CORS',``),
    seriesPost(4, SERIES, 'Server-to-server',``),
    seriesPost(5, SERIES, 'OAuth',``),
    seriesPost(6, SERIES, 'Embed',``),
    seriesPost(7, SERIES, 'Webhooks',``),
    seriesPost(8, SERIES, 'SDK',``),
    seriesPost(9, SERIES, 'שגיאות וריטרי',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
