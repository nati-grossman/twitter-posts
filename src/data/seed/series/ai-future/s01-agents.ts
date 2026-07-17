import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה AI agents?'

export const aiFutureAgents: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה',``),
    seriesPost(2, SERIES, 'מול צאט',``),
    seriesPost(3, SERIES, 'ReAct',``),
    seriesPost(4, SERIES, 'Planner',``),
    seriesPost(5, SERIES, 'זיכרון',``),
    seriesPost(6, SERIES, 'סיכון',``),
    seriesPost(7, SERIES, 'דוגמאות',``),
    seriesPost(8, SERIES, 'מגבלה',``),
    seriesPost(9, SERIES, 'עתיד',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
