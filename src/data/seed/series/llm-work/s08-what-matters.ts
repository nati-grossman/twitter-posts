import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל יודע מה חשוב במשפט?'

export const llmWorkWhatMatters: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא יודע — לומד', `**משקלי Attention** — **נלמדו** — **לא** כלל ידני — **מיליארדים** דוגמאות.`),
    seriesPost(2, SERIES, 'דפוסים סטטיסטיים', `נושא → פועל — **not** → **not** — **הקשר** חוזר באימון — **העתקה**.`),
    seriesPost(3, SERIES, 'שכבות עמוקות', `שכבה 1 — **מקומי** — שכבה 40 — **מושגים** — **היררכיה** — **מופשט**.`),
    seriesPost(4, SERIES, 'מילות מפתח', `שמות, מספרים — **Attention גבוה** — **לפעמים** — **לא** מובטח.`),
    seriesPost(5, SERIES, 'פרומפט', `**אתה** מכוון — “רק עובדות” — **משקל** לסגנון — **לא** מוח.`),
    seriesPost(6, SERIES, 'הטיה', `מילה נפוצה — **Attention** מטעה — **רעש** — **לא** חשיבות אמיתית.`),
    seriesPost(7, SERIES, 'Negation', `לא, אבל — **קשה** — **Attention** **טועה** — **ידוע**.`),
    seriesPost(8, SERIES, 'מול אדם', `אדם — **כוונה** — מודל — **קורלציה** — **לא** הבנה.`),
    seriesPost(9, SERIES, 'Mechanistic', `חוקרים **מעגלים** — induction heads — **חלקית** הבנה — **מחקר**.`),
    seriesPost(10, SERIES, 'סיכום', `**“מה חשוב” = משקלי Attention שנלמדו מדפוסים — לא שיקול דעת.**

פרומפט + אימון — **מכוון** — **לא** מבטיח.`),
  ],
}
