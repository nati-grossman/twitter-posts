import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה A/B testing?'

export const persAbTesting: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'ניסוי', `**A/B** — חצי רואים **כפתור ירוק**, חצי **אדום** — **מי** לוחץ יותר?`),
    seriesPost(2, SERIES, 'היפותזה', `“ירוק יעלה המרה” — **בודקים** — **לא** ניחוש.`),
    seriesPost(3, SERIES, 'סטטיסטיקה', `מספיק **משתמשים** — **מובהקות** — **לא** יום אחד — **p-value**.`),
    seriesPost(4, SERIES, 'מול personalization', `A/B — **אותו** מוצר לכולם — **התאמה** — **שונה** לכל אחד — **שכבות**.`),
    seriesPost(5, SERIES, 'Feature flags', `מדליקים ל-5% — **בטוח** — **rollback** — **מהיר**.`),
    seriesPost(6, SERIES, 'רעיונות רעים', `20 וариאנטים — **בלי** תיאוריה — **p-hacking** — **מטעה**.`),
    seriesPost(7, SERIES, 'אתיקה', `לא לבדוק **רעיל** — **הסכמה** — **שקיפות** פנימית.`),
    seriesPost(8, SERIES, 'רב-ארמי', `A/B/C/D — **multivariate** — **מורכב** — **יותר** תנועה.`),
    seriesPost(9, SERIES, 'תרבות', `דאטה-driven — **לא** “המנכ״ל אהב” — **מוצר** מודרני.`),
    seriesPost(10, SERIES, 'סיכום', `**A/B = ניסוי מבוקר על קהל אמיתי — מדידה, לא דעה.**

משפר **מוצר לכולם** — לא רק **פרופיל אישי**.`),
  ],
}
