import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'האם AI באמת מבין משהו?'

export const aiLimitsUnderstanding: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'המחלוקת', `**מבין**? — **פילוסופיה** + **מדע** — **אין** הסכמה — **2025**.`),
    seriesPost(2, SERIES, 'סטטיסטיקה', `מנבא **טוקנים** — **דפוסים** — **לא** מודל עולם — **סימולציה** שפה.`),
    seriesPost(3, SERIES, 'Chinese Room', `מפרק סימנים — **נכון** — **בלי** הבנה? — **ויכוח** עתיק.`),
    seriesPost(4, SERIES, 'יכולות', `קוד, תרגום — **מרשים** — **לא** מוכיח תודעה — **ביצוע**.`),
    seriesPost(5, SERIES, 'טעויות', `hallucination — **לא** טעות הבנה — **אין** הבנה לטעות בה.`),
    seriesPost(6, SERIES, 'מוח', `אין **נוירונים** — **מטריצות** — **אנלוגיה** מוגבלת — **לא** זהות.`),
    seriesPost(7, SERIES, 'שימושי', `**לא** צריך תודעה לעזור — **כלי** — **מספיק** — **פרגמטי**.`),
    seriesPost(8, SERIES, 'סיכון', `אם **חושבים** שמבין — **מפקידים** יותר מדי — **אחריות**.`),
    seriesPost(9, SERIES, 'מחקר', `mechanistic interpretability — **חלקי** — **מעגלים** — **לא** “נפש”.`),
    seriesPost(10, SERIES, 'סיכום', `**“מבין” — כנראה לא כמו אדם; “עובד” — כן בתחומים מצומצמים. השתמש ככלי, לא כשותף מודע.**

הגבול **חשוב** — **לא** פחד — **בהירות**.`),
  ],
}
