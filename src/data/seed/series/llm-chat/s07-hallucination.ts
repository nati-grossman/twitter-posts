import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה hallucination ב-AI?'

export const llmChatHallucination: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**Hallucination** — פלט **בטוח** שנשמע נכון — **לא** תואם **מציאות** או **מקור**.`),
    seriesPost(2, SERIES, 'לא רק LLM', `תמונה — **ידיים** מוזרות — **זיהוי** שגוי — **כל** מודל generative.`),
    seriesPost(3, SERIES, 'סוגים', `עובדתי — **מספר** שגוי. מקור — **קישור** מזויף. **הגיוני** — לוגיקה שבורה.`),
    seriesPost(4, SERIES, 'סיבות', `דאטה מלוכלך — **לחץ** לענות — **אין** retrieval — **אורך** פרומפט.`),
    seriesPost(5, SERIES, 'RAG מפחית', `מבוסס **ציטוט** — **לא** מבטל לגמרי — **retrieval שגוי** = hallucination.`),
    seriesPost(6, SERIES, 'מדידה', `benchmarks — **HHEM**, בדיקה אנושית — **אין** מדד אחד מושלם.`),
    seriesPost(7, SERIES, 'סיכון', `רפואה, משפט — **נזק** — **אדם בלולאה** — **חובה** אימות.`),
    seriesPost(8, SERIES, 'Confabulation', `ממלא **חור** בזיכרון — **דומה** לבני אדם — **לא** זהה.`),
    seriesPost(9, SERIES, 'מיתולוגיה', `“יתרפס לבד” — **לא** — **הנדסה** — **שכבות הגנה**.`),
    seriesPost(10, SERIES, 'סיכום', `**Hallucination = יצירה בלי עוגן במציאות — בעיה מובנית ל-LLM.**

מוצר טוב = **מקור + ספקנות + בדיקה**.`),
  ],
}
