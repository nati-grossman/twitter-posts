import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מגנים על אתר מהתקפות?'

export const defenseProtectSite: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שכבות, לא קסם אחד',``),
    seriesPost(2, SERIES, 'עדכונים',``),
    seriesPost(3, SERIES, 'HTTPS בכל מקום',``),
    seriesPost(4, SERIES, 'קלט ופלט',``),
    seriesPost(5, SERIES, 'אימות והרשאות',``),
    seriesPost(6, SERIES, 'WAF ו-CDN',``),
    seriesPost(7, SERIES, 'ניטור ולוגים',``),
    seriesPost(8, SERIES, 'גיבויים',``),
    seriesPost(9, SERIES, 'תהליכים',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
