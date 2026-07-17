import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה AI לפעמים ממציא תשובות?'

export const aiLimitsInventsAnswers: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא מחפש אמת',``),
    seriesPost(2, SERIES, 'לחץ להשלים',``),
    seriesPost(3, SERIES, 'דאטה מעורבת',``),
    seriesPost(4, SERIES, 'שמות ומספרים',``),
    seriesPost(5, SERIES, 'נדיר באימון',``),
    seriesPost(6, SERIES, 'Temperature',``),
    seriesPost(7, SERIES, 'RAG חלקי',``),
    seriesPost(8, SERIES, 'עברית',``),
    seriesPost(9, SERIES, 'לא באג',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
