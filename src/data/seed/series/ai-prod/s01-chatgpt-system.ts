import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך ChatGPT עובד כמערכת שלמה?'

export const aiProdChatgptSystem: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא רק מודל',``),
    seriesPost(2, SERIES, 'זרימה',``),
    seriesPost(3, SERIES, 'System prompt',``),
    seriesPost(4, SERIES, 'Moderation',``),
    seriesPost(5, SERIES, 'Tools',``),
    seriesPost(6, SERIES, 'זיכרון מוצר',``),
    seriesPost(7, SERIES, 'גרסאות',``),
    seriesPost(8, SERIES, 'Rate limit',``),
    seriesPost(9, SERIES, 'תשתית',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
