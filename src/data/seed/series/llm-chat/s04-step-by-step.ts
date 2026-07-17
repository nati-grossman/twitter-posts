import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך נוצרת תשובה של ChatGPT שלב אחרי שלב?'

export const llmChatStepByStep: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מסלול', `פרומפט → **tokenize** → **forward** → טוקן 1 → שוב → … → **stop** → טקסט.`),
    seriesPost(2, SERIES, 'Prefill', `שלב 1 — **קורא** כל הפרומפט **במקביל** — **ממלא** cache — **מהיר** יחסית.`),
    seriesPost(3, SERIES, 'Decode', `שלב 2 — **טוקן אחר טוקן** — **איטי** — מה שרואים **זורם**.`),
    seriesPost(4, SERIES, 'KV cache', `שומר **מפתחות/ערכים** מטוקנים קודמים — **לא** מחשב מחדש הכל — **מהיר**.`),
    seriesPost(5, SERIES, 'Streaming', `שולחים ללקוח **לפני** סיום — SSE — **מרגיש** מיידי.`),
    seriesPost(6, SERIES, 'Moderation', `סינון **לפני/אחרי** — **מדיניות** — **לא** רק המודל הגולמי.`),
    seriesPost(7, SERIES, 'Tools', `קריאה לפונקציה — **עוצר** — **מבצע** — **מזין** תוצאה — **ממשיך** — **סוכן**.`),
    seriesPost(8, SERIES, 'RAG בשרשרת', `שליפת מסמכים — **מוסיף** להקשר — **אז** מייצר — **שלב נפרד**.`),
    seriesPost(9, SERIES, 'עלות זמן', `טוקן ראשון — **prefill**. כל הבא — **decode** — **GPU** עמוס.`),
    seriesPost(10, SERIES, 'סיכום', `**תשובה = prefill + decode חוזר + cache + אולי כלים/סינון.**

“הקלדה” = **יצירה סדרתית** — לא מסמך מוכן.`),
  ],
}
