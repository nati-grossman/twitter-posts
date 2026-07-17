import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך WhatsApp עובד בזמן אמת?'

export const realtimeWhatsapp: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא SMS',``),
    seriesPost(2, SERIES, 'חיבור מתמיד',``),
    seriesPost(3, SERIES, 'E2E encryption',``),
    seriesPost(4, SERIES, 'נמען לא מחובר',``),
    seriesPost(5, SERIES, 'קבוצות',``),
    seriesPost(6, SERIES, 'סטטוס ומדיה',``),
    seriesPost(7, SERIES, 'שיחות קול',``),
    seriesPost(8, SERIES, 'מיליוני משתמשים',``),
    seriesPost(9, SERIES, 'מהירות מורגשת',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
