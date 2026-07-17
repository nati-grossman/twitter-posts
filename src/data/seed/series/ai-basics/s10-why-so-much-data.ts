import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה AI צריך כל כך הרבה נתונים?'

export const aiBasicsWhyData: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'פרמטרים רבים', `מיליארד **מספרים** — צריך **דוגמאות** להגביל — **אחרת** overfit או underfit.`),
    seriesPost(2, SERIES, 'ממד גבוה', `תמונה 224×224 — **אדיר** — **צריך** מגוון עצום — **כל** זווית, תאורה.`),
    seriesPost(3, SERIES, 'שפה', `טריליון טוקנים — **דפוסים** נדירים — **נדירות** — “כתוב מייל” — **פעם** לא מספיק.`),
    seriesPost(4, SERIES, 'הכללה', `לראות **רק** חתולים לבנים — **כושל** על שחור — **מגוון** = robust.`),
    seriesPost(5, SERIES, 'חוק מסדר', `לעיתים **loss** יורד עם **יותר** דאטה — **חוקי power** — **לא** לינארי לנצח.`),
    seriesPost(6, SERIES, 'Data efficiency', `מחקר: **פחות** דאטה — transfer, few-shot — **עדיין** בסיס גדול ל-LLM.`),
    seriesPost(7, SERIES, 'סינתטי לא מחליף', `מיוצר **עוזר** — **לא** תמיד **אותה** עשירות — **שילוב**.`),
    seriesPost(8, SERIES, 'עלות', `איסוף, תיוג — **מיליונים** — **בקבוק** צוואר — **לא** רק GPU.`),
    seriesPost(9, SERIES, 'איכות', `10M דאטה **גרוע** < 100K **מצוין** — **לא** רק כמות — **curation**.`),
    seriesPost(10, SERIES, 'סיכום', `**הרבה נתונים = מספיק דוגמאות ללמידה יציבה בממד גבוה.**

פחות דאטה? **מודל קטן יותר**, **משימה צרה**, **transfer** — **trade-offs**.`),
  ],
}
