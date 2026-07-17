import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך בני אדם מתקנים מודלים?'

export const trainRealHumansFix: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא יד ידנית',``),
    seriesPost(2, SERIES, 'דירוג זוגות',``),
    seriesPost(3, SERIES, 'Red team',``),
    seriesPost(4, SERIES, 'Policy',``),
    seriesPost(5, SERIES, 'דוגמאות זהב',``),
    seriesPost(6, SERIES, 'הסרה',``),
    seriesPost(7, SERIES, 'System prompt',``),
    seriesPost(8, SERIES, 'גרסאות',``),
    seriesPost(9, SERIES, 'מגבלה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
