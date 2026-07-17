import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל יודע סדר של מילים?'

export const xfmDeepWordOrder: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא מטבעית', `בלי מיקום — **רק** שקיות מילים — **סדר** אבוד — **משמעות** נשברת.`),
    seriesPost(2, SERIES, 'מיקום בוקטור', `טוקן 3 — **וקטור** ייחודי — **נבדל** מטוקן 3 במקום אחר — **באותו** משפט.`),
    seriesPost(3, SERIES, 'יחסי', `RoPE — **מרחק** בין מילים — **קרוב** vs **רחוק** — **דפוס** למידה.`),
    seriesPost(4, SERIES, 'Causal', `רואה **רק** שמאל — **סדר זמן** גנרציה — **עבר** קובע **עתיד**.`),
    seriesPost(5, SERIES, 'דקדוק', `נושא לפני פועל — **דפוס** מיליוני — **מיקום** + **Attention** — **יחד**.`),
    seriesPost(6, SERIES, 'היפוך', `אימון על **סדר נכון** — **היפוך** נדיר — **לא** מבין כמו אדם — **סטטיסטיקה**.`),
    seriesPost(7, SERIES, 'רשימות', `1, 2, 3 — **מיקום** + **תוכן** — **סדר מספרים** — **למידה**.`),
    seriesPost(8, SERIES, 'עברית RTL', `כיוון תצוגה **≠** סדר טוקנים — **tokenizer** קובע — **מיקום** פנימי.`),
    seriesPost(9, SERIES, 'חלון', `מעבר ל-N — **נחתך** — **לא** זוכר סדר **רחוק** — **מגבלה**.`),
    seriesPost(10, SERIES, 'סיכום', `**סדר = positional encoding + causal mask + דפוסי אימון — לא “תחושת זמן”.**

בלי זה — **אנגרם**.`),
  ],
}
