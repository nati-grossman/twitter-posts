import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך AI יכול לבצע משימות לבד?'

export const aiFutureTasksAlone: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לולאה', `מטרה → **תכנון** → **פעולה** → **תוצאה** → **האם** סיימתי? — **חוזר**.`),
    seriesPost(2, SERIES, 'כלים', `API, דפדפן, קבצים — **ידיים** — **מודל** **מחליט** מתי.`),
    seriesPost(3, SERIES, 'Function calling', `מודל **מחזיר** JSON — **שרת** **מריץ** — **תוצאה** חוזרת — **בטוח** יותר.`),
    seriesPost(4, SERIES, 'דוגמה', `“סכם את המיילים שלי” — **קריאה** — **סיכום** — **שליחה** — **רצף**.`),
    seriesPost(5, SERIES, 'מגבלות', `לא **באמת** רואה מסך — **תלוי** אינטגרציה — **שביר**.`),
    seriesPost(6, SERIES, 'אישור', `צעדים **רגישים** — **אדם** מאשר — **human-in-the-loop**.`),
    seriesPost(7, SERIES, 'זמן', `משימה **ארוכה** — **דקות** — **עלות** טוקנים — **תקציב**.`),
    seriesPost(8, SERIES, 'שגיאות', `טעות מוקדם — **ממשיך** — **צריך** rollback — **לא** מושלם.`),
    seriesPost(9, SERIES, 'לא AGI', `**אוטומציה** צרה — **לא** “עושה הכל” — **תחום** מוגדר.`),
    seriesPost(10, SERIES, 'סיכום', `**משימות לבד = לולאת תכנון + כלים + בדיקה — אוטומציה חכמה, לא עובד אנושי מלא.**

מתאים ל**workflow** — **לא** לכל חיים.`),
  ],
}
