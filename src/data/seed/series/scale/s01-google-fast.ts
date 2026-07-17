import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך גוגל מחפש מידע כל כך מהר?'

export const scaleGoogleFast: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא סורק את האינטרנט עכשיו',``),
    seriesPost(2, SERIES, 'אינדקס הפוך',``),
    seriesPost(3, SERIES, 'מיליארדי דפים — מבנה',``),
    seriesPost(4, SERIES, 'Cache',``),
    seriesPost(5, SERIES, 'Ranking',``),
    seriesPost(6, SERIES, 'Autocomplete',``),
    seriesPost(7, SERIES, 'Data Centers',``),
    seriesPost(8, SERIES, 'מה איטי',``),
    seriesPost(9, SERIES, 'מול DB רגיל',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
