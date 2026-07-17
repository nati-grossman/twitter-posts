import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מפחיתים עומס על שרת?'

export const perfReduceServerLoad: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'פחות עבודה', `סטטי ל-CDN — **לא** מגיע לשרת — **הכי יעיל**.`),
    seriesPost(2, SERIES, 'Cache', `90% בקשות מ-Redis — **DB** נח — **קריטי**.`),
    seriesPost(3, SERIES, 'Rate limiting', `מגבילים IP — **DDoS** — **משתמש** לא מקריס — **429**.`),
    seriesPost(4, SERIES, 'Pagination', `לא 10,000 שורות — **20** — **cursor** — **פחות** RAM.`),
    seriesPost(5, SERIES, 'Offload', `תמונה resize — **שירות** נפרד — **לא** CPU אפליקציה — **worker**.`),
    seriesPost(6, SERIES, 'Connection pool', `לא חיבור DB חדש כל בקשה — **מאגר** — **מהיר**.`),
    seriesPost(7, SERIES, 'Read replica', `קריאות ל-**עותק** — כתיבה ל-primary — **מפזר**.`),
    seriesPost(8, SERIES, 'Debouncing', `חיפוש — **מחכים** 300ms — **פחות** בקשות — **UX**.`),
    seriesPost(9, SERIES, 'Scale out', `יותר instances — **LB** — **לא** שרת אחד ענק.`),
    seriesPost(10, SERIES, 'סיכום', `**פחות עומס = פחות עבודה לבקשה + cache + הגבלה + scale.**

שרת **שורד** כש**רוב** לא מגיעים אליו.`),
  ],
}
