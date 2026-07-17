import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך AI מבין וידאו?'

export const aiFutureVideo: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'זמן',``),
    seriesPost(2, SERIES, 'דגימה',``),
    seriesPost(3, SERIES, 'Sora',``),
    seriesPost(4, SERIES, 'הבנה',``),
    seriesPost(5, SERIES, 'אודיו',``),
    seriesPost(6, SERIES, 'עלות',``),
    seriesPost(7, SERIES, 'זיכרון',``),
    seriesPost(8, SERIES, 'יישומים',``),
    seriesPost(9, SERIES, 'deepfake',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
