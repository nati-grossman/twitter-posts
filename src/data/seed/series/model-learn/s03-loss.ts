import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה פונקציית הפסד (Loss)?'

export const modelLearnLoss: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מדד טעות', `**Loss** — מספר — **כמה רחוק** מהאמת — **נמוך** = טוב — **מטרה** להקטין.`),
    seriesPost(2, SERIES, 'MSE', `רגרסיה — **ריבוע** הפרש — **מעניש** טעויות גדולות — **רגיש**.`),
    seriesPost(3, SERIES, 'Cross-entropy', `סיווג — **הסתברות** לקטגוריה נכונה — **LLM** — **נפוץ**.`),
    seriesPost(4, SERIES, '0 לא תמיד', `loss 0 — **מושלם** על train — **חשוד** overfit — **לא** מטרה בהכרח.`),
    seriesPost(5, SERIES, 'גרף', `epochs — loss **יורד** — **מתבהר** — **plateau** — **עצור**.`),
    seriesPost(6, SERIES, 'Train vs Val', `train loss נמוך — val **עולה** — **overfit** — **אזהרה**.`),
    seriesPost(7, SERIES, 'לא מטריקה עסקית', `loss נמוך — **עדיין** גרוע למשתמש — **בודקים** גם accuracy, human eval.`),
    seriesPost(8, SERIES, 'רגולריזציה', `מוסיפים **עונש** על weights גדולים — **פחות** overfit — **L2**.`),
    seriesPost(9, SERIES, 'Multi-task', `כמה losses — **משקללים** — **מורכב** — **balance**.`),
    seriesPost(10, SERIES, 'סיכום', `**Loss = פונקציה שמודדת טעות — המנוע שמנחה את האימון.**

בלי loss — **אין** כיוון שיפור.`),
  ],
}
