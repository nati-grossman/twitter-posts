import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה אפליקציה?'

export const appsWhatIsApp: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא רק אייקון', `**אפליקציה** — תוכנה שרצה על **מכשיר** (טלפון, מחשב) — **משימה** למשתמש — לא דף בדפדפן בלבד.`),
    seriesPost(2, SERIES, 'Native מול Web', `**Native** — iOS/Android — קוד מותאם. **PWA/Web** — דפדפן — **שכבות** שונות.`),
    seriesPost(3, SERIES, 'Client', `רוב האפליקציות — **לקוח** — מדבר עם **שרת** — לא הכל מקומי.`),
    seriesPost(4, SERIES, 'מול מערכת הפעלה', `אנדרואיד/iOS **מנהלים** — זיכרון, הרשאות, חיים — **אתה** בתוך מסגרת.`),
    seriesPost(5, SERIES, 'חנות אפליקציות', `App Store / Play — **חבילה** — חתימה — **עדכונים** — **מדיניות**.`),
    seriesPost(6, SERIES, 'Desktop', `Excel, VS Code — **אותו רעיון** — **GUI** + לוגיקה + קבצים/רשת.`),
    seriesPost(7, SERIES, 'SaaS בדפדפן', `Gmail בטאב — **אפליקציה** לכל דבר — **SPA** — **JS כבד**.`),
    seriesPost(8, SERIES, 'Micro-app', `ווידג'ט, שעון — **קטן** — **מוגבל** — **אותו** מושג.`),
    seriesPost(9, SERIES, 'לא OS', `אפליקציה **לא** מחליפה Windows — **רצה מעל** — **sandbox**.`),
    seriesPost(10, SERIES, 'סיכום', `**אפליקציה = תוכנה עם UI למשתמש, על מכשיר, לרוב עם שרת מאחורי.**

הבא: **מבנה פנימי**.`),
  ],
}
