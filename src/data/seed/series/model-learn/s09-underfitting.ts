import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה underfitting?'

export const modelLearnUnderfitting: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'פשוט מדי', `**Underfitting** — **גם** train **גרוע** — **לא** לכד דפוס — **קו ישר** על עננים.`),
    seriesPost(2, SERIES, 'סימנים', `loss **גבוה** — accuracy **נמוך** — **תמיד** — **לא** משתפר.`),
    seriesPost(3, SERIES, 'מודל קטן', `לא מספיק **קיבולת** — **הגדל** — **עמוק** יותר.`),
    seriesPost(4, SERIES, 'פיצרים חלשים', `רק צבע — **צריך** צורה — **engineering** — **embeddings**.`),
    seriesPost(5, SERIES, 'מעט epochs', `עצרתם **מוקדם** — **המשיכו** — **בדקו** overfit.`),
    seriesPost(6, SERIES, 'Learning rate', `גדול מדי — **לא מתכנס** — קטן מדי — **איטי** — **תכוון**.`),
    seriesPost(7, SERIES, 'דאטה מלוכלך', `לא **מסתדר** — **נקו** — **לא** רק מודל.`),
    seriesPost(8, SERIES, 'Bias גבוה', `שגיאה **מערכתית** — **תמיד** טועה באותו כיוון — **מודל לא מתאים**.`),
    seriesPost(9, SERIES, 'פתרון', `מודל חזק יותר — **יותר** אימון — **פיצרים** — **אופטימייזר** — **ניסוי**.`),
    seriesPost(10, SERIES, 'סיכום', `**Underfitting = לא מספיק למידה — train וtest שניהם חלשים.**

ההפך מ-overfit — **שניהם** בעיות.`),
  ],
}
