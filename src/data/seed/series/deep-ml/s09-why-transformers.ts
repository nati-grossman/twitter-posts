import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה transformers שינו את עולם ה-AI?'

export const deepMlWhyTransformers: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'Scale',``),
    seriesPost(2, SERIES, 'הכל במשפחה אחת',``),
    seriesPost(3, SERIES, 'Transfer',``),
    seriesPost(4, SERIES, 'ביצועים',``),
    seriesPost(5, SERIES, 'אקוסיסטם',``),
    seriesPost(6, SERIES, 'ChatGPT רגע',``),
    seriesPost(7, SERIES, 'מחיר כוח',``),
    seriesPost(8, SERIES, 'מגבלות נשארו',``),
    seriesPost(9, SERIES, 'לפני ואחרי',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
