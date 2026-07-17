import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה background process?'

export const appsBackground: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'Foreground מול Background', `**Foreground** — אתה **רואה** — **Background** — רץ **בלי** UI פעיל — **מוגבל**.`),
    seriesPost(2, SERIES, 'למה', `הורדת קובץ — **מוזיקה** — **סנכרון** — **מיקום** — **לא** לעצור כשיוצאים.`),
    seriesPost(3, SERIES, 'iOS מחמיר', `דקות — **התראה** — **סוללה** — **Background App Refresh** — **משתמש** שולט.`),
    seriesPost(4, SERIES, 'Android גמיש יותר', `**Service** — **WorkManager** — **עדיין** מגבלות — **Doze**.`),
    seriesPost(5, SERIES, 'Threads', `UI thread — **לא** לחסום — עבודה כבדה — **worker** — **ANR** אם תקוע.`),
    seriesPost(6, SERIES, 'Push handler', `הודעה מגיעה — **קוד** מתעורר — **מעדכן** — **חוזר** לישון.`),
    seriesPost(7, SERIES, 'Location', `מעקב — **בקשת** הרשאה “תמיד” — **סוללה** — **פרטיות**.`),
    seriesPost(8, SERIES, 'Kill', `OS **הורג** process — **זיכרון** — **שחזור** state — **לא** מובטח.`),
    seriesPost(9, SERIES, 'Headless JS', `React Native — **משימה** בלי מסך — **מוגבל** זמן.`),
    seriesPost(10, SERIES, 'סיכום', `**Background = עבודה כשלא בפוקוס — מוגבלת על ידי OS לסוללה ופרטיות.**

תכנון = **מינימום** רקע — **מקסימום** מה שבמסך.`),
  ],
}
