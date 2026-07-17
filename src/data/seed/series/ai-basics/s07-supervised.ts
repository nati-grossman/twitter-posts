import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה supervised learning?'

export const aiBasicsSupervised: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מורה עם תשובות', `**Supervised** — לכל קלט **תשובה נכונה** — המודל **לומד** לחזות אותה — **הכי נפוץ**.`),
    seriesPost(2, SERIES, 'Classification', `ספאם / לא — חתול / כלב — **קטגוריה** — **cross-entropy** loss.`),
    seriesPost(3, SERIES, 'Regression', `מחיר, טמפרטורה — **מספר** — **MSE** — **שגיאה מרובעת**.`),
    seriesPost(4, SERIES, 'דוגמאות', `מייל מסומן, תמונה מתויגת — **מיליונים** — **דפוס** — **הכללה**.`),
    seriesPost(5, SERIES, 'Overfitting', `זוכר **אימון** — נכשל **חדש** — **regularization** — **יותר** דאטה.`),
    seriesPost(6, SERIES, 'Underfitting', `פשוט מדי — **גם** train גרוע — **מודל גדול יותר** או פיצ’רים.`),
    seriesPost(7, SERIES, 'Imbalanced', `99% לא ספאם — **מטעה** accuracy — **מדדים** אחרים — F1, recall.`),
    seriesPost(8, SERIES, 'Fine-tune', `LLM — **supervised** על הוראות — “ענה כך” — **SFT** — **שלב** אחרי pretrain.`),
    seriesPost(9, SERIES, 'Label noise', `תיוג שגוי — **מבלבל** — **ניקוי** — **איכות** תוויות.`),
    seriesPost(10, SERIES, 'סיכום', `**Supervised = למידה עם תשובות נכונות — סיווג ורגרסיה.**

רוב **מוצרי AI** מתחילים כאן.`),
  ],
}
