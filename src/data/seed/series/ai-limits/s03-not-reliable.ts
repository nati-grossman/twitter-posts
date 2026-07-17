import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה מודלים לא תמיד אמינים?'

export const aiLimitsNotReliable: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הסתברותי', `**דגימה** — **אותו** קלט — **פלט** שונה — **לא** דטרמיניזם מוצר.`),
    seriesPost(2, SERIES, 'לא יודע', `אין **מד** פנימי “בטוח” — **לא** מחזיר **לא יודע** אמיתי — **מנחש**.`),
    seriesPost(3, SERIES, 'תאריך', `cutoff — **לא** יודע היום — **מדמה** עדכני — **שקר** בטעות.`),
    seriesPost(4, SERIES, 'מתמטיקה', `חשבון **טועה** — **נראה** נכון — **מחשבון** חיצוני — **חובה**.`),
    seriesPost(5, SERIES, 'לוגיקה', `סילוגיזם — **נופל** — **שפה** חזקה — **היגיון** חלש.`),
    seriesPost(6, SERIES, 'עומס', `פרומפט ארוך — **מפספס** פרט — **לא** “עייף” — **מגבלה**.`),
    seriesPost(7, SERIES, 'גרסאות', `GPT-4 vs 3.5 — **שונה** — **לא** אחיד — **בדוק** גרסה.`),
    seriesPost(8, SERIES, 'מוצר', `מסננים, temperature — **משתנה** — **לא** רק weights.`),
    seriesPost(9, SERIES, 'SLA', `אין **אחריות** כמו DB — **best effort** — **לא** מערכת קריטית לבד.`),
    seriesPost(10, SERIES, 'סיכום', `**לא אמין = סטוכסטי + בלי עוגן עובדתי + חלש בלוגיקה/מספרים — מתאים לטיוטה, לא לאמת.**

שכבת **אימות** אנושית.`),
  ],
}
