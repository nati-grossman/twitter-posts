import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל משתפר עם טעויות?'

export const modelLearnMistakes: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'טעות = אות', `חזה **חתול** — אמר **כלב** — **loss גבוה** — **סימן** לשנות weights.`),
    seriesPost(2, SERIES, 'Backprop', `מפיץ **אשם** לאחור — איזה weight **השפיע** — **כמה** לשנות.`),
    seriesPost(3, SERIES, 'כיוון תיקון', `gradient — **ירידה** — **צעד קטן** — **שוב** — **איטי** אבל **יציב**.`),
    seriesPost(4, SERIES, 'לא זיכרון מושלם', `לא “שומר” את הטעות — **מעדכן** פרמטרים — **הכללה** לדוגמאות **דומות**.`),
    seriesPost(5, SERIES, 'Batch', `1000 דוגמאות — **ממוצע** gradient — **פחות** רועש — **יציב**.`),
    seriesPost(6, SERIES, 'רעש בדאטה', `תיוג שגוי — **מבלבל** — **מנקים** — **לא** רק אלגוריתם.`),
    seriesPost(7, SERIES, 'Hard examples', `דוגמאות **קשות** — **יותר** משקל — **מוקד** — **curriculum**.`),
    seriesPost(8, SERIES, 'RL', `טעות = **פרס נמוך** — **למידה** מניסוי — **לא** רק label.`),
    seriesPost(9, SERIES, 'אדם בלולאה', `RLHF — טעות **בטקסט** — **דירוג** — **reward model** — **יישור**.`),
    seriesPost(10, SERIES, 'סיכום', `**משתפר = מודד טעות (loss) → מחשב gradient → מעדכן weights → חוזר.**

למידה = **תיקון חוזר**, לא **הבנה**.`),
  ],
}
