import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה מודל (Model)?'

export const aiBasicsModel: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**מודל** — פונקציה מתמטית **ענקית** עם **פרמטרים** (מיליונים/מיליארדים) — קלט → פלט.`),
    seriesPost(2, SERIES, 'לא קובץ אחד קטן', `GPT, ResNet — **ארכיטקטורה** + **משקלים** (weights) — נשמרים בדיסק — **טוענים** לריצה.`),
    seriesPost(3, SERIES, 'אימון מעדכן', `לפני אימון — **אקראי**. אחרי — **מכוון** למשימה — **למידה** = שינוי מספרים.`),
    seriesPost(4, SERIES, 'Inference', `**שימוש** — קלט חדש — **לא** משנים משקלים — **רק** חישוב — **production**.`),
    seriesPost(5, SERIES, 'גודל', `7B, 70B — **פרמטרים** — **יותר** ≠ תמיד טוב — **עלות** GPU — **trade-off**.`),
    seriesPost(6, SERIES, 'Foundation model', `מודל **כללי** — אימון עצום — **fine-tune** למשימה — **בסיס** לרוב המוצרים.`),
    seriesPost(7, SERIES, 'מול אלגוריתם', `מיון בועות — **קבוע**. מודל — **משתנה** לפי דאטה — **שונה**.`),
    seriesPost(8, SERIES, 'גרסאות', `GPT-4, Claude 3 — **משפחות** — **לא** אותו קובץ — **בוחרים** לפי משימה.`),
    seriesPost(9, SERIES, 'שחיקה', `מודל ישן — **לא** מעודכן לעולם חדש — **retrain** — **תחזוקה**.`),
    seriesPost(10, SERIES, 'סיכום', `**מודל = מכונה לומדת מספרים שממפה קלט לפלט.**

אימון **בונה** — inference **מריץ**.`),
  ],
}
