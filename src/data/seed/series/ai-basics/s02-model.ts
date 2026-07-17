import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה מודל (Model)?'

export const aiBasicsModel: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'לא קובץ אחד קטן',``),
    seriesPost(3, SERIES, 'אימון מעדכן',``),
    seriesPost(4, SERIES, 'Inference',``),
    seriesPost(5, SERIES, 'גודל',``),
    seriesPost(6, SERIES, 'Foundation model',``),
    seriesPost(7, SERIES, 'מול אלגוריתם',``),
    seriesPost(8, SERIES, 'גרסאות',``),
    seriesPost(9, SERIES, 'שחיקה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
