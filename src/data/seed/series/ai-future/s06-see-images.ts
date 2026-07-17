import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך AI רואה תמונות?'

export const aiFutureSeeImages: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא עיניים', `**לא** רואה כמו אדם — **פיקסלים** → **מספרים** — **דפוסים**.`),
    seriesPost(2, SERIES, 'Vision encoder', `תמונה → **רשת** (ViT) → **וקטורים** — **מוזג** ל-LLM.`),
    seriesPost(3, SERIES, 'Patches', `ריבועים 16×16 — **טוקנים** ויזואליים — **כמו** מילים — **Attention**.`),
    seriesPost(4, SERIES, 'OCR', `טקסט בתמונה — **למד** ממיליונים — **מסמכים**, שלטים — **שימושי**.`),
    seriesPost(5, SERIES, 'תיאור', `“מה בתמונה?” — **סטטיסטיקה** — **לא** תודעה — **לפעמים** טועה.`),
    seriesPost(6, SERIES, 'מספרים', `ספירה, גרפים — **חלש** — **לא** מחשבון — **זהירות**.`),
    seriesPost(7, SERIES, 'רזולוציה', `מוגבלת — **דחיסה** — **פרטים** אבודים — **תלוי** מוצר.`),
    seriesPost(8, SERIES, 'בטיחות', `תוכן רגיש — **מסננים** — **מדיניות** — **לא** טכני בלבד.`),
    seriesPost(9, SERIES, 'עברית בתמונה', `OCR עברית — **טוב** יותר — **עדיין** בדוק — **RTL**.`),
    seriesPost(10, SERIES, 'סיכום', `**“רואה” = ממיר תמונה לטוקנים ויזואליים שה-LLM מעבד — לא חוויה ויזואלית.**

שימושי — **לא** מצלמה אנושית.`),
  ],
}
