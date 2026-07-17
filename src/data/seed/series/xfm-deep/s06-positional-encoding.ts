import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה positional encoding?'

export const xfmDeepPositionalEncoding: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הבעיה', `Attention **סימטרי** — **cat sat** = **sat cat**? — **לא** — **צריך** מיקום.`),
    seriesPost(2, SERIES, 'סינוסים מקוריים', `sin/cos לפי מיקום — **קבוע** — **לא** נלמד — **2017** — **יופי** מתמטי.`),
    seriesPost(3, SERIES, 'Learned', `וקטור לכל מיקום 0…N — **נלמד** — **GPT** — **גמיש**.`),
    seriesPost(4, SERIES, 'חיבור', `embedding מילה **+** embedding מיקום — **לפני** שכבה 1 — **סכום**.`),
    seriesPost(5, SERIES, 'RoPE', `Rotary — **מסובב** Q ו-K — **יחסי** מיקום — **Llama** — **סטנדרט**.`),
    seriesPost(6, SERIES, 'ALiBi', `הטיה ליניארית — **בלי** טבלת מיקום — **הארכת** חלון — **חלופה**.`),
    seriesPost(7, SERIES, 'אורך', `מיקום 50,000 — **מוגבל** באימון — **הרחבה** — **טכניקות**.`),
    seriesPost(8, SERIES, 'לא תאריך', `מיקום **במשפט** — **לא** זמן אמיתי — **סדר** טוקנים.`),
    seriesPost(9, SERIES, 'בלי = כשל', `בלי positional — **בלגן** — **מודל** מת — **חובה**.`),
    seriesPost(10, SERIES, 'סיכום', `**Positional encoding = מידע “איפה במשפט” — מוסיפים ל-embedding כדי לשמור סדר.**

Attention + מיקום = **שפה**.`),
  ],
}
