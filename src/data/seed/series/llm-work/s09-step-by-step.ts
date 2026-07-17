import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך נוצרת תשובה שלמה צעד-אחר-צעד?'

export const llmWorkStepByStep: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לולאה', `פרומפט → **טוקן 1** → append → **טוקן 2** → … — **generation loop**.`),
    seriesPost(2, SERIES, 'Forward pass', `כל פעם — **כל** הרשת — **טוקן אחרון** חדש — **KV** שאר — **מהיר**.`),
    seriesPost(3, SERIES, 'Decode', `ID → טקסט — **מצטבר** — **streaming** — **SSE** — **מילה מילה**.`),
    seriesPost(4, SERIES, 'Stop conditions', `EOS — **מגבלה** — **stop sequences** — **משתמש** עוצר.`),
    seriesPost(5, SERIES, 'Temperature', `0 = **דטרמיניסטי** — גבוה = **אקראי** — **אותו** פרומפט — **שונה**.`),
    seriesPost(6, SERIES, 'Coherence', `כל טוקן **רואה** קודמים — **סתירה** — **פחות** סביר — **לא** תכנון גלובלי.`),
    seriesPost(7, SERIES, 'Tool use', `מודל **מחליט** לקרוא API — **טקסט** → **פעולה** → **תוצאה** בפרומפט — **שוב** לולאה.`),
    seriesPost(8, SERIES, 'Chain-of-thought', `“בוא נחשוב” — **יותר** טוקנים — **Attention** **מאריך** — **דיוק** לפעמים.`),
    seriesPost(9, SERIES, 'שגיאות מצטברות', `טעות מוקדם — **ממשיך** — **hallucination** — **אין** undo פנימי.`),
    seriesPost(10, SERIES, 'סיכום', `**תשובה שלמה = אלפי ניבויי טוקן ברצף — כל אחד תלוי בכל מה שנכתב עד כה.**

זה **בנייה** — לא **הדפסה** מוכנה.`),
  ],
}
