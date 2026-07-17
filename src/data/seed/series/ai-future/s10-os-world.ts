import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'האם AI יכול להיות מערכת הפעלה של העולם הדיגיטלי?'

export const aiFutureOsWorld: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מטאפורה',``),
    seriesPost(2, SERIES, 'Copilot+',``),
    seriesPost(3, SERIES, 'אורקסטרציה',``),
    seriesPost(4, SERIES, 'API everything',``),
    seriesPost(5, SERIES, 'סטנדרט',``),
    seriesPost(6, SERIES, 'בעלות',``),
    seriesPost(7, SERIES, 'כשל',``),
    seriesPost(8, SERIES, 'אנושי',``),
    seriesPost(9, SERIES, 'חלופה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
