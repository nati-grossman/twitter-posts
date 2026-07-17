import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה מודלים לא באמת מבינים טקסט?'

export const llmWorkNoUnderstanding: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'סטטיסטיקה', `**התאמה** לדפוסים — **לא** מודל עולם — **לא** חוויה — **טקסט בלבד**.`),
    seriesPost(2, SERIES, 'Stochastic parrot', `חוזר **יפה** — **בלי** ידיעה — **מטאפורה** שנויה במחלוקת — **שימושי**.`),
    seriesPost(3, SERIES, 'Hallucination', `נשמע **בטוח** — **שגוי** — **אין** “יודע שלא יודע” פנימי — **בדיקה** חיצונית.`),
    seriesPost(4, SERIES, 'אין גוף', `לא רואה, לא מרגיש — **סמלים** — **לא** עובדות — **קשרים** סטטיסטיים.`),
    seriesPost(5, SERIES, 'Syntax בלי semantics', `דקדוק **מצוין** — **משמעות** — **מדומה** — **Chinese Room**.`),
    seriesPost(6, SERIES, 'Benchmark מטעה', `מבחנים — **זיכרון** דפוסים — **לא** AGI — **מדידה** חלקית.`),
    seriesPost(7, SERIES, 'גבולות', `מתמטיקה, לוגיקה — **טועה** — **אין** הוכחה פנימית — **כלים** עוזרים.`),
    seriesPost(8, SERIES, 'שימושי בכל זאת', `כתיבה, קוד, סיכום — **כלי** — **לא** מומחה אמיתי — **אחריות** אנושית.`),
    seriesPost(9, SERIES, 'עתיד', `**ייתכן** הבנה — **לא** מוכח — **מחקר** — **זהירות**.`),
    seriesPost(10, SERIES, 'סיכום', `**LLM לא מבין כמו אדם — מנבא טקסט סביר. שימוש חכם = יודעים את הגבול.**

מדהים — **לא** מוח.`),
  ],
}
