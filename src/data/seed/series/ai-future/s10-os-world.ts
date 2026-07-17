import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'האם AI יכול להיות מערכת הפעלה של העולם הדיגיטלי?'

export const aiFutureOsWorld: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מטאפורה', `**OS** — שכבה **בין** משתמש לכל — **AI** **מנהל** אפליקציות? — **רעיון**.`),
    seriesPost(2, SERIES, 'Copilot+', `Windows — **AI בכל מקום** — **לא** החלפת Windows — **שכבה**.`),
    seriesPost(3, SERIES, 'אורקסטרציה', `מייל, לוח שנה, קבצים — **agent אחד** — **מטרה** — **פחות** אפליקציות?`),
    seriesPost(4, SERIES, 'API everything', `כל שירות **API** — **מודל** מחבר — **תלות** ספקים — **סיכון**.`),
    seriesPost(5, SERIES, 'סטנדרט', `MCP, plugins — **שפה** משותפת — **לא** עדיין OS אחד — **2025**.`),
    seriesPost(6, SERIES, 'בעלות', `מי **שולט**? — Big Tech — **נעילה** — **פרטיות** — **פוליטי**.`),
    seriesPost(7, SERIES, 'כשל', `AI **טועה** — **מוחק** קבצים — **לא** OS אמין כמו **kernel** — **רחוק**.`),
    seriesPost(8, SERIES, 'אנושי', `עדיין **מאשר** — **לא** מלא אוטונומיה — **שנים**.`),
    seriesPost(9, SERIES, 'חלופה', `**לא** OS אחד — **רב** agents — **פדרלי** — **יותר** סביר.`),
    seriesPost(10, SERIES, 'סיכום', `**“OS של העולם הדיגיטלי” = שכבת אורקסטרציה AI מעל כלים — אפשרי חלקית, לא מחר, לא בלי בקרה.**

מגמי — **כן**; **דיקטטורה** של מודל אחד — **לא** בטוח.`),
  ],
}
