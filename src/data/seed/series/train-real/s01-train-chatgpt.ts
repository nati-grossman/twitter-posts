import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מאמנים מודל כמו ChatGPT בפועל?'

export const trainRealTrainChatgpt: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא קסם',``),
    seriesPost(2, SERIES, 'שלבים',``),
    seriesPost(3, SERIES, 'נתונים',``),
    seriesPost(4, SERIES, 'חישוב',``),
    seriesPost(5, SERIES, 'היפר-פרמטרים',``),
    seriesPost(6, SERIES, 'צקפוינטים',``),
    seriesPost(7, SERIES, 'הערכה',``),
    seriesPost(8, SERIES, 'אחרי שחרור',``),
    seriesPost(9, SERIES, 'סוד מסחרי',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
