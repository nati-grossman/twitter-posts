import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מי שולט באינטרנט?'

export const globalWhoControls: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'אין מלך אחד',``),
    seriesPost(2, SERIES, 'ICANN ודומיינים',``),
    seriesPost(3, SERIES, 'IETF — פרוטוקולים',``),
    seriesPost(4, SERIES, 'ספקים וכבלים',``),
    seriesPost(5, SERIES, 'פלטפורמות',``),
    seriesPost(6, SERIES, 'ממשלות',``),
    seriesPost(7, SERIES, 'משתמשים וקוד פתוח',``),
    seriesPost(8, SERIES, 'מיתוס “ארה״ב שולטת”',``),
    seriesPost(9, SERIES, 'Net neutrality ורגולציה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
