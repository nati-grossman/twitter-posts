import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה מודלים לפעמים ממציאים תשובות?'

export const llmChatInvents: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מטרה אחרת',``),
    seriesPost(2, SERIES, 'חסר מקור',``),
    seriesPost(3, SERIES, 'סטטיסטי',``),
    seriesPost(4, SERIES, 'שאלה מכשילה',``),
    seriesPost(5, SERIES, 'ציטוטים',``),
    seriesPost(6, SERIES, 'קוד',``),
    seriesPost(7, SERIES, 'פתרונות',``),
    seriesPost(8, SERIES, 'הנחיות',``),
    seriesPost(9, SERIES, 'משתמש',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
