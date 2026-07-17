import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה שכבות בתוך transformer?'

export const xfmDeepLayers: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'בלוק = שכבה', `לעתים **שכבה** = **בלוק** אחד — 12, 32, 96 — **עומק**.`),
    seriesPost(2, SERIES, 'תת-שכבות', `Multi-Head Attention → **Add&Norm** → FFN → **Add&Norm** — **שני** שלבים.`),
    seriesPost(3, SERIES, 'FFN', `Feed-Forward — **הרחבה** 4× — **הקטנה** — **“חשיבה”** מקומית per token.`),
    seriesPost(4, SERIES, 'היררכיה', `שכבה נמוכה — **תחביר** — גבוהה — **מושג**, עובדה — **מופשט**.`),
    seriesPost(5, SERIES, 'יותר = יותר?', `לא תמיד — **Chinchilla** — **נתונים** + **גודל** — **איזון**.`),
    seriesPost(6, SERIES, 'Residual', `x + sublayer(x) — **מעבר** ישיר — **למידה** קלה — **עמוק**.`),
    seriesPost(7, SERIES, 'Dropout', `באימון — **כיבוי** אקראי — **מניעת** overfit — **לא** ב-inference.`),
    seriesPost(8, SERIES, 'MoE', `Mixture of Experts — **חלק** מה-FFN — **מיליארדים** — **sparse** — **GPT-4**?`),
    seriesPost(9, SERIES, 'Pruning', `הסרת שכבות — **קטן** — **איכות** יורדת — **דחיסה**.`),
    seriesPost(10, SERIES, 'סיכום', `**שכבות = חזרה על Attention+FFN — כל שכבה מעמיקה ייצוג.**

עומק — **לא** קסם — **פרמטרים** + **נתונים**.`),
  ],
}
