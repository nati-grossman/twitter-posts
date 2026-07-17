import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה צריך הרבה דאטה כדי לאמן AI?'

export const modelLearnWhyMuchData: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'פרמטרים רבים', `מיליון weights — **צריך** דוגמאות **להגביל** — **אחרת** זוכר — **לא** מכליל.`),
    seriesPost(2, SERIES, 'ממד גבוה', `תמונה, טקסט — **מרחב** עצום — **דוגמאות** מכסות **וריאציות**.`),
    seriesPost(3, SERIES, 'זיהוי דפוס', `סטטיסטיקה — **רואים** חתול מזוויות — **אור** — **גזע** — **לא** 10 תמונות.`),
    seriesPost(4, SERIES, 'rare cases', `מחלה נדירה — **צריך** מספיק — **רפואה** — **לא** מתעלם.`),
    seriesPost(5, SERIES, 'bias', `דאטה **לא מייצג** — מודל **מוטה** — **יותר** דאטה **מגוון** — **לא** רק **יותר**.`),
    seriesPost(6, SERIES, 'Chinchilla', `אופטימום data/compute — **יותר tokens** לפעמים מ**יותר** פרמטרים — **מחקר**.`),
    seriesPost(7, SERIES, 'Data augmentation', `סיבוב תמונה — **מגדיל** — **סינתטי** — **לא** מחליף אמיתי.`),
    seriesPost(8, SERIES, 'few-shot', `LLM — **פרומפט** — **פחות** fine-tune — **לא** אפס דאטה.`),
    seriesPost(9, SERIES, 'עלות', `איסוף — **תיוג** — **יקר** — **בקבוק** אמיתי.`),
    seriesPost(10, SERIES, 'סיכום', `**הרבה דאטה = מספיק דוגמאות ללמידה יציבה בממד גבוה — איכות + גיוון.**

פחות דאטה = **מודל קטן**, **משימה צרה**, **transfer**.`),
  ],
}
