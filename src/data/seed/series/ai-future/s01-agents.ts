import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה AI agents?'

export const aiFutureAgents: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**Agent** — מודל + **לולאה** + **כלים** — **מטרה** — **צעדים** — **לא** תשובה אחת.`),
    seriesPost(2, SERIES, 'מול צאט', `צאט — **שאלה-תשובה** — Agent — **תכנון** — **ביצוע** — **בדיקה**.`),
    seriesPost(3, SERIES, 'ReAct', `חשיבה → **פעולה** → תצפית → **חוזר** — **דפוס** נפוץ — **מחקר**.`),
    seriesPost(4, SERIES, 'Planner', `מפרק משימה — **תת-משימות** — **מנהל** — **אורקסטרטור**.`),
    seriesPost(5, SERIES, 'זיכרון', `היסטוריה, **notes** — **חיצוני** — **לא** רק חלון — **מצטבר**.`),
    seriesPost(6, SERIES, 'סיכון', `מחיקת קבצים, **העברת** כסף — **אישור** אנושי — **sandbox**.`),
    seriesPost(7, SERIES, 'דוגמאות', `Cursor, Devin, **AutoGPT** — **מוצרים** — **הייפ** + **אמיתי**.`),
    seriesPost(8, SERIES, 'מגבלה', `טועה **בצעד** 3 — **מצטבר** — **לא** אמין 100% — **פיקוח**.`),
    seriesPost(9, SERIES, 'עתיד', `יותר **אוטונומיה** — **פחות** קליקים — **אחריות** **גדלה**.`),
    seriesPost(10, SERIES, 'סיכום', `**AI agent = LLM שמחליט צעדים ומשתמש בכלים עד למטרה — לא רק מדבר.**

השלב **הבא** אחרי צאט.`),
  ],
}
