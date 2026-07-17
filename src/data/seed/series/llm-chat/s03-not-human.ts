import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה מודלים לא באמת מבינים כמו בני אדם?'

export const llmChatNotHuman: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'סטטיסטיקה לא תודעה',``),
    seriesPost(2, SERIES, 'Stochastic parrot',``),
    seriesPost(3, SERIES, 'אין גוף',``),
    seriesPost(4, SERIES, 'אין כוונה',``),
    seriesPost(5, SERIES, 'טעויות עמוקות',``),
    seriesPost(6, SERIES, 'מול מוח',``),
    seriesPost(7, SERIES, 'שימושי בכל זאת',``),
    seriesPost(8, SERIES, 'אנתרופומורפיזם',``),
    seriesPost(9, SERIES, 'בדיקות',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
