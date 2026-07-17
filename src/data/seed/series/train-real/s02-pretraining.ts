import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה pretraining?'

export const trainRealPretraining: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**Pretraining** — אימון ראשון על **המון** טקסט גולמי — **חיזוי** הבא — **בסיס**.`),
    seriesPost(2, SERIES, 'ללא תוויות', `לא “שאלה-תשובה” — **רק** רצף — **self-supervised** — **זול** יחסית לכמות.`),
    seriesPost(3, SERIES, 'מה לומד', `דקדוק, עובדות, קוד, סגנונות — **סטטיסטיקה** שפה — **לא** הוראות.`),
    seriesPost(4, SERIES, 'גודל', `GPT-3 — **300B** טוקנים? — **טריליונים** היום — **Chinchilla** — **אופטימום**.`),
    seriesPost(5, SERIES, 'עלות', `החלק **היקר** ביותר — **שבועות** GPU — **פעם אחת** לבסיס.`),
    seriesPost(6, SERIES, 'Foundation model', `תוצאה — **מודל יסוד** — **מתאים** לכולם — **לא** מוצר סופי.`),
    seriesPost(7, SERIES, 'רישוי', `Common Crawl, ספרים — **משפטי** — **הסרה** — **DMCA** — **סיכון**.`),
    seriesPost(8, SERIES, 'Multimodal', `תמונה+טקסט — **pretrain** משותף — **GPT-4V** — **אותו** רעיון.`),
    seriesPost(9, SERIES, 'לא מספיק', `Pretrain בלבד — **לא** מספיק — **לא** בטוח — **צריך** שלבים.`),
    seriesPost(10, SERIES, 'סיכום', `**Pretraining = ללמוד שפה מהמון טקסט בלי תיוג — הבסיס של כל LLM מודרני.**

בלי זה — **אין** ChatGPT.`),
  ],
}
