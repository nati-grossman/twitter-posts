import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה fault tolerance?'

export const deepInfraFaultTolerance: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**Fault tolerance** — המערכת **ממשיכה לעבוד** (או מתדרדרת בצורה מבוקרת) כש**חלק נכשל**.

לא “לעולם לא נשבר” — **סובל שבירה**.`),
    seriesPost(2, SERIES, 'Fault vs Failure', `**Fault** — תקלה פנימית (דיסק רועש). **Failure** — המשתמש **רואה** — המטרה: fault **לא** הופך ל-failure.`),
    seriesPost(3, SERIES, 'Replication', `DB **primary + replica** — נפל primary — **promote** — **דקות** — RPO/RTO.`),
    seriesPost(4, SERIES, 'Circuit breaker', `שירות B איטי — **מפסיקים** לקרוא זמנית — **לא** מקריסים את A — **retry** מאוחר.`),
    seriesPost(5, SERIES, 'Idempotency', `בקשה כפולה (רשת נתקעה) — **אותה תוצאה** — לא חיוב פעמיים — **קריטי** לתשלומים.`),
    seriesPost(6, SERIES, 'Chaos engineering', `מכוון **שוברים** שרת ב-production (בזהירות) — **בודקים** — Netflix Chaos Monkey.`),
    seriesPost(7, SERIES, 'CAP theorem (רעיון)', `רשת מפוצלת — **בוחרים** עקביות או זמינות — **לא** שלושתם תמיד — **trade-off**.`),
    seriesPost(8, SERIES, 'Multi-region', `רעידה מכבה region — **failover** לאזור אחר — **יקר** — בנקים, גלובלי.`),
    seriesPost(9, SERIES, 'Backup ≠ tolerance', `גיבוי **משחזר** אחרי אסון — tolerance = **ממשיך בזמן אמת** — **שניהם** צריכים.`),
    seriesPost(10, SERIES, 'סיכום', `**Fault tolerance = עיצוב כך שכשל מקומי לא הורס את הכל.**

קשור ל-**24/7, redundancy, circuit breakers, replicas**.`),
  ],
}
