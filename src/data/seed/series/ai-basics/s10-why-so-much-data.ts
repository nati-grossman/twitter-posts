import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה AI צריך כל כך הרבה נתונים?'

export const aiBasicsWhyData: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'פרמטרים רבים',``),
    seriesPost(2, SERIES, 'ממד גבוה',``),
    seriesPost(3, SERIES, 'שפה',``),
    seriesPost(4, SERIES, 'הכללה',``),
    seriesPost(5, SERIES, 'חוק מסדר',``),
    seriesPost(6, SERIES, 'Data efficiency',``),
    seriesPost(7, SERIES, 'סינתטי לא מחליף',``),
    seriesPost(8, SERIES, 'עלות',``),
    seriesPost(9, SERIES, 'איכות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
