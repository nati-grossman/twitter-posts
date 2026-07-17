import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה DDoS attack?'

export const defenseDdos: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'DoS vs DDoS',``),
    seriesPost(2, SERIES, 'מה קורה למשתמש',``),
    seriesPost(3, SERIES, 'סוגי תעבורה',``),
    seriesPost(4, SERIES, 'בוטנט',``),
    seriesPost(5, SERIES, 'Amplification',``),
    seriesPost(6, SERIES, 'מול פריצה',``),
    seriesPost(7, SERIES, 'הגנה — סינון',``),
    seriesPost(8, SERIES, 'CAPTCHA ואתגרים',``),
    seriesPost(9, SERIES, 'מי עושה ולמה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
