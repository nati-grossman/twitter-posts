import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך אפליקציה מתקשרת עם שרת?'

export const appsServerTalk: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'Client-Server', `אפליקציה **לא** מחזיקה את כל המידע — **שואלת** שרת — **JSON** לרוב.`),
    seriesPost(2, SERIES, 'HTTPS', `מוצפן — **מניעת** האזנה — **certificate** — **חובה**.`),
    seriesPost(3, SERIES, 'Headers', `Authorization: Bearer token — **מזהה** — **Content-Type** — **מטא**.`),
    seriesPost(4, SERIES, 'REST', `GET פוסטים — POST צור — **status** 200/401/500 — **מטפלים** ב-UI.`),
    seriesPost(5, SERIES, 'Timeout', `רשת איטית — **נכשל** — **הודעה** — **לא** תלוי לנצח.`),
    seriesPost(6, SERIES, 'Retry', `ניסיון חוזר — **exponential backoff** — **לא** להציף שרת.`),
    seriesPost(7, SERIES, 'WebSocket', `צ’אט — **חיבור פתוח** — **דחיפה** — **לא** polling.`),
    seriesPost(8, SERIES, 'גרסאות API', `API גרסה 2 — **אפליקציה ישנה** — **תואמת** — **force update** לפעמים.`),
    seriesPost(9, SERIES, 'Offline queue', `פעולה בלי רשת — **תור** — **שולח** כשחוזר — **sync**.`),
    seriesPost(10, SERIES, 'סיכום', `**תקשורת = HTTPS + JSON + token + טיפול בשגיאות ו-timeout.**

האפליקציה **לקוח** — השרת **אמת** (לרוב).`),
  ],
}
