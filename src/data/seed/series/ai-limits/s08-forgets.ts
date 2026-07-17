import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה AI שוכח מידע?'

export const aiLimitsForgets: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא זיכרון', `**אין** DB פנימי לשיחה — **רק** מה **בחלון** עכשיו — **לא** אתמול.`),
    seriesPost(2, SERIES, 'חלון מלא', `שיחה ארוכה — **ישן** **נזרק** — **“שכח”** — **טכני**.`),
    seriesPost(3, SERIES, 'סיכום', `מוצרים **מסכמים** היסטוריה — **אובדן** פרטים — **קירוב**.`),
    seriesPost(4, SERIES, 'מרכז Attention', `מילים **באמצע** ארוך — **פחות** משקל — **lost in the middle**.`),
    seriesPost(5, SERIES, 'פרומפט ארוך', `מסמך ענק — **מפספס** פסקה — **לא** קריאה אנושית — **מגבלה**.`),
    seriesPost(6, SERIES, 'session חדש', `טאב חדש — **אפס** — **לא** אותו מודל “זוכר” — **אין** user memory ברירת מחדל.`),
    seriesPost(7, SERIES, 'RAG', `זיכרון **חיצוני** — **מסמכים** — **לא** שכחה — **retrieval**.`),
    seriesPost(8, SERIES, 'fine-tune', `**לא** מעדכן weights בשיחה — **לא** לומד ממך **קבוע** — **אלא** API memory.`),
    seriesPost(9, SERIES, 'בלבול', `שאלה על פרט מוקדם — **טועה** — **נראה** שכחה — **לפעמים** לא היה בחלון.`),
    seriesPost(10, SERIES, 'סיכום', `**שוכח = מידע מחוץ לחלון או דחוי ב-Attention — לא “זיכרון לקוי”.**

תכנן **חיצוני** — notes, RAG.`),
  ],
}
