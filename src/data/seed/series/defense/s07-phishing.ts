import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה phishing?'

export const defensePhishing: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה פשוטה',``),
    seriesPost(2, SERIES, 'Spear vs המוני',``),
    seriesPost(3, SERIES, 'ערוצים',``),
    seriesPost(4, SERIES, 'איך נראה',``),
    seriesPost(5, SERIES, 'קישור מסוכן',``),
    seriesPost(6, SERIES, 'קבצים מצורפים',``),
    seriesPost(7, SERIES, 'Business Email Compromise',``),
    seriesPost(8, SERIES, 'הגנה אישית',``),
    seriesPost(9, SERIES, 'הגנה בארגון',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
