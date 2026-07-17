import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה מודלים שמייצרים קוד?'

export const aiFutureCodeModels: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'לא IDE',``),
    seriesPost(3, SERIES, 'הקשר',``),
    seriesPost(4, SERIES, 'שפות',``),
    seriesPost(5, SERIES, 'באגים',``),
    seriesPost(6, SERIES, 'אבטחה',``),
    seriesPost(7, SERIES, 'Refactor',``),
    seriesPost(8, SERIES, 'Terminal',``),
    seriesPost(9, SERIES, 'עתיד',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
