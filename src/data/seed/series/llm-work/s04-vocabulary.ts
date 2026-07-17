import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה vocabulary של מודל?'

export const llmWorkVocabulary: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מילון סגור', `**Vocabulary** — רשימת **כל** הטוקנים האפשריים — **גודל** קבוע — **למשל** 100k.`),
    seriesPost(2, SERIES, 'Output layer', `שכבה אחרונה — **גודל** = vocab — **כל** תא = טוקן אחד — **logit**.`),
    seriesPost(3, SERIES, 'לא כל מילה', `מילה נדירה — **מפוצלת** לחלקים — **עדיין** ב-vocab — **BPE**.`),
    seriesPost(4, SERIES, 'מרחב', `100k **כיוונים** — **דחיסה** — **לא** מיליון מילים עצמאיות — **שיתוף** חלקים.`),
    seriesPost(5, SERIES, 'גרסאות', `GPT-4 vocab **≠** Llama — **לא** מחליפים tokenizer — **זוג**.`),
    seriesPost(6, SERIES, 'OOV ישן', `Out of vocabulary — **נדיר** ב-BPE — **byte-level** — **כמעט** הכל.`),
    seriesPost(7, SERIES, 'Multilingual', `אותו vocab — **רב** שפות — **לא** מילון לכל שפה — **משותף**.`),
    seriesPost(8, SERIES, 'הרחבה', `לא מוסיפים מילים **באמצע** — **מודל חדש** — **אימון** מחדש — **לא** plug-in.`),
    seriesPost(9, SERIES, ' logits גדולים', `vocab ענק — **שכבה** כבדה — **חלק** מפרמטרים — **עלות**.`),
    seriesPost(10, SERIES, 'סיכום', `**Vocabulary = מפתחות הטוקנים שהמודל יכול להוציא — תקרת “מילים”.**

גדול = **גמיש** — **יקר** בחישוב.`),
  ],
}
