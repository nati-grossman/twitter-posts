import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה bias בדאטה?'

export const trainRealBias: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**Bias** — הטיה — הדאטה **משקף** עולם **לא** מאוזן — **המודל** מחזיק.`),
    seriesPost(2, SERIES, 'ייצוג', `יותר אנגלית — **פחות** עברית — **עיוורון** תרבותי.`),
    seriesPost(3, SERIES, 'סטריאוטיפ', `רופא=גבר — **בטקסטים** — **מחזק** — **מסוכן**.`),
    seriesPost(4, SERIES, 'היסטורי', `טקסטים ישנים — **נורמות** מיושנות — **לא** “אמת” — **שעבר**.`),
    seriesPost(5, SERIES, 'מקור', `Reddit vs אקדמיה — **טון** שונה — **מוצר** שונה.`),
    seriesPost(6, SERIES, 'מדידה', `בנצמרקים **מוטים** — **ציון** שווא — **BBQ**, **fairness**.`),
    seriesPost(7, SERIES, 'תיקון', `דאטה **מאוזן** — **הנחיות** — **לא** מושלם — **מחלוקת**.`),
    seriesPost(8, SERIES, 'RLHF', `מדרגים **מערביים** — **יישור** תרבותי — **מי** “ניטרלי”?`),
    seriesPost(9, SERIES, 'לא רק טכני', `חברה, חוק — **לא** רק loss — **אחריות**.`),
    seriesPost(10, SERIES, 'סיכום', `**Bias בדאטה = מה שלא מיוצג או מיוצג עודף נכנס למודל כ”אמת”.**

מודל **מראה** דאטה — **לא** מתקן עולם.`),
  ],
}
