import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה API באפליקציות?'

export const appsApiInApps: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'חוזה', `**API** — רשימת **endpoints** — האפליקציה **יודעת** מה לקרוא — **לא** גישה ישירה ל-DB.`),
    seriesPost(2, SERIES, 'דוגמה', `GET /api/user/me — **מחזיר** שם, תמונה — **האפליקציה מציירת**.`),
    seriesPost(3, SERIES, 'SDK', `ספריית Stripe — **עוטפת** API — **פחות** HTTP ידני.`),
    seriesPost(4, SERIES, 'מפתחות', `API key **בשרת** שלך — **לא** באפליקציה ציבורית — **חשוף** אם ב-APK.`),
    seriesPost(5, SERIES, 'OAuth', `התחברות Google — **token** — **האפליקציה** שולחת לשרת שלך.`),
    seriesPost(6, SERIES, 'GraphQL', `שאילתה אחת — **בוחרים** שדות — **פחות** round-trips — **מורכב**.`),
    seriesPost(7, SERIES, 'Rate limit', `יותר מדי בקשות — **429** — **האטה** — **UX**.`),
    seriesPost(8, SERIES, 'Mock', `פיתוח — **שרת מזויף** — **בלי** backend אמיתי — **מהיר**.`),
    seriesPost(9, SERIES, 'OpenAPI', `תיעוד — **גנרט** client — **סנכרון** צוותים.`),
    seriesPost(10, SERIES, 'סיכום', `**API באפליקציה = החוזה בין האפליקציה לשרת — endpoints + פורמט + auth.**

שינוי API = **עדכון** אפליקציה (לפעמים).`),
  ],
}
