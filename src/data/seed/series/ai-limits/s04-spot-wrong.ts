import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מזהים תשובה שגויה של AI?'

export const aiLimitsSpotWrong: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'כלל ראשון', `**אל** תאמין **בלי** מקור — **חיפוש** — **מאמר** — **אדם**.`),
    seriesPost(2, SERIES, 'ציטוטים', `שם + שנתון — **Google** — **לא** קיים — **hallucination** קלאסי.`),
    seriesPost(3, SERIES, 'סתירה פנימית', `פסקה 1 vs 3 — **שאל** שוב — **בדוק** עקביות.`),
    seriesPost(4, SERIES, 'מספרים', `חשב **מחדש** — Excel — **קוד** — **הרץ** — **לא** בעין.`),
    seriesPost(5, SERIES, 'נדיר מדי', `פרט **ספציפי** מדי — **בטוח** — **חשוד** — **דרוש** מקור.`),
    seriesPost(6, SERIES, 'שפה מושלמת', `חלק — **שגיאות** אנושיות **פחות** — **חלקות** מחשידה.`),
    seriesPost(7, SERIES, 'שני מודלים', `אותה שאלה — **שני** ספקים — **השווה** — **פער** = **זהירות**.`),
    seriesPost(8, SERIES, 'RAG', `שאל **מאיפה** לקח — **ציטוט** — **אין** = **בעיה**.`),
    seriesPost(9, SERIES, 'דומיין', `רפואה, משפט — **מומחה** — **לא** ChatGPT לבד — **חובה**.`),
    seriesPost(10, SERIES, 'סיכום', `**זיהוי = מקור חיצוני + בדיקת מספרים + סתירות + ספקנות לביטחון גבוה.**

AI = **טיוטה** — **לא** verdict.`),
  ],
}
