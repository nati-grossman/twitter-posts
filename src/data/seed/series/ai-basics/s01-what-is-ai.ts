import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה בכלל בינה מלאכותית?'

export const aiBasicsWhatIsAi: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא רובוט בסרט',``),
    seriesPost(2, SERIES, 'רחב מדי',``),
    seriesPost(3, SERIES, 'מטרה: דפוסים',``),
    seriesPost(4, SERIES, 'מול אוטומציה רגילה',``),
    seriesPost(5, SERIES, 'Weak vs Strong',``),
    seriesPost(6, SERIES, 'ML בתוך AI',``),
    seriesPost(7, SERIES, 'לא קסם',``),
    seriesPost(8, SERIES, 'במוצר',``),
    seriesPost(9, SERIES, 'היסטוריה בקצרה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
