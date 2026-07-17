import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה tool use במודלים?'

export const aiFutureToolUse: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'למה',``),
    seriesPost(3, SERIES, 'Schema',``),
    seriesPost(4, SERIES, 'שרת מריץ',``),
    seriesPost(5, SERIES, 'דוגמאות',``),
    seriesPost(6, SERIES, 'ריבוי',``),
    seriesPost(7, SERIES, 'טעויות',``),
    seriesPost(8, SERIES, 'MCP',``),
    seriesPost(9, SERIES, 'UX',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
