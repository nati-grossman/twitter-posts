import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה token באמת?'

export const llmWorkToken: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'יחידת עיבוד', `**Token** — לא בהכרח מילה — **חתיכת** טקסט — **המודל רואה רק tokens**.`),
    seriesPost(2, SERIES, 'BPE', `Byte Pair Encoding — **מפצל** — un + believable — **יעיל** — **50k–200k** סוגים.`),
    seriesPost(3, SERIES, 'עברית', `יותר tokens **למילה** — **יקר** — **אותיות** — **לא** אותו מחיר לאנגלית.`),
    seriesPost(4, SERIES, 'ID', `hello → 15496 — **מספר** — **embedding** — **לא** טקסט פנימי.`),
    seriesPost(5, SERIES, 'Context limit', `128k tokens — **קלט+פלט** — **חלון** — **לא** אינסופי.`),
    seriesPost(6, SERIES, 'Special', `סיום, התחלת הודעה — **מבנה** שיחה — **ChatML**.`),
    seriesPost(7, SERIES, 'מחיר API', `גובים **לטוקן** — **אורך** = **כסף** — **תכנון** פרומפט.`),
    seriesPost(8, SERIES, 'Tokenizer ≠ מודל', `שינוי tokenizer — **שובר** — **זוג** קבוע — **גרסה**.`),
    seriesPost(9, SERIES, 'רווחים', `רווח — **לפעמים** token — **לא** תמיד — **תלוי** שפה.`),
    seriesPost(10, SERIES, 'סיכום', `**Token = יחידת הטקסט שה-LLM סופר, מעבד ומחייב.**

לפני מילה — **תמיד** tokenize.`),
  ],
}
