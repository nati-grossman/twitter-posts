import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה reinforcement learning?'

export const aiBasicsReinforcement: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'למידה מניסיון',``),
    seriesPost(2, SERIES, 'לא תשובה מיידית',``),
    seriesPost(3, SERIES, 'Policy',``),
    seriesPost(4, SERIES, 'Exploration vs exploitation',``),
    seriesPost(5, SERIES, 'דוגמאות',``),
    seriesPost(6, SERIES, 'Reward shaping',``),
    seriesPost(7, SERIES, 'Simulation',``),
    seriesPost(8, SERIES, 'RLHF בקצרה',``),
    seriesPost(9, SERIES, 'קשה לייצב',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
