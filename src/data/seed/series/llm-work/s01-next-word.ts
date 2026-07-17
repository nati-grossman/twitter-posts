import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל מנבא את המילה הבאה?'

export const llmWorkNextWord: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'המשימה הבסיסית', `**LLM** — Language Model — **מחשב** הסתברות ל**טוקן הבא** — לא “תשובה שלמה” בבת אחת.`),
    seriesPost(2, SERIES, 'Autoregressive', `טוקן 1 → טוקן 2 → … — **כל** חדש **רואה** את כל הקודמים — **שרשרת**.`),
    seriesPost(3, SERIES, 'Logits', `שכבה אחרונה — **ציון** לכל מילה ב-vocab — **softmax** — **התפלגות**.`),
    seriesPost(4, SERIES, 'Sampling', `לא תמיד הכי גבוה — **temperature** — **יצירתיות** — **top-p**.`),
    seriesPost(5, SERIES, 'הסתברות מותנית', `P(מילה | כל מה שלפני) — **זה** המודל — **סטטיסטיקה** של שפה.`),
    seriesPost(6, SERIES, 'Training goal', `באימון — **ניחוש** הבא — **loss** — **מיליוני** משפטים — **דפוס**.`),
    seriesPost(7, SERIES, 'Inference', `בשימוש — **אותו** מנגנון — **לא** מעדכן weights — **רק** forward.`),
    seriesPost(8, SERIES, 'Stop', `EOS token — **סוף** — או **מגבלת** אורך — **עוצר**.`),
    seriesPost(9, SERIES, 'לא תכנון', `לא “יודע” סוף משפט מראש — **בונה** מילה מילה — **סיכון** סטייה.`),
    seriesPost(10, SERIES, 'סיכום', `**מנבא מילה הבאה = התפלגות על vocab → דגימה → חזרה — כל הטקסט כך.**

זה **כל** ChatGPT בליבה.`),
  ],
}
