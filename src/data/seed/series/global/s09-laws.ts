import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך חוקים משפיעים על אינטרנט?'

export const globalLaws: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'אינטרנט חוצה גבולות',``),
    seriesPost(2, SERIES, 'GDPR',``),
    seriesPost(3, SERIES, 'DMCA וזכויות',``),
    seriesPost(4, SERIES, 'חסימות ממשלתיות',``),
    seriesPost(5, SERIES, 'שמירת מידע',``),
    seriesPost(6, SERIES, 'מיסוי דיגיטלי',``),
    seriesPost(7, SERIES, 'פיצול משפטי',``),
    seriesPost(8, SERIES, 'פלטפורמות כשופט',``),
    seriesPost(9, SERIES, 'קריפטו ורגולציה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
