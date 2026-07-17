import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה context window?'

export const llmChatContextWindow: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'חלון הקשר', `**Context window** — מקסימום טוקנים **בבת אחת** — קלט + פלט — **זיכרון עבודה**.`),
    seriesPost(2, SERIES, 'דוגמאות', `4K, 32K, 128K, 1M — **מודל/גרסה** — **לא** אינסופי.`),
    seriesPost(3, SERIES, 'מעבר לגבול', `נחתך **תחילה** או **סוף** — **או** סיכום — **מידע אבוד** — **שקוף** למשתמש?`),
    seriesPost(4, SERIES, 'Attention cost', `ארוך יותר — **יקר** — **O(n²)** קלאסי — **אופטימיזציות**.`),
    seriesPost(5, SERIES, 'שיחה ארוכה', `היסטוריה **גדלה** — **מתקרב** לגבול — **צריך** לקצר או RAG.`),
    seriesPost(6, SERIES, 'מול זיכרון אנושי', `אדם **לא** זוכר מילה במילה — מודל **כן** בתוך החלון — **שונה**.`),
    seriesPost(7, SERIES, 'Long context tricks', `RoPE scaling, YaRN — **מאריך** — **לא** תמיד איכות זהה.`),
    seriesPost(8, SERIES, 'מסמך שלם', `“תקרא ספר” — **לא** אם > חלון — **chunking** — **חלקים**.`),
    seriesPost(9, SERIES, 'מחיר API', `יותר טוקנים קלט — **שולמים יותר** — **תכנון** פרומפט.`),
    seriesPost(10, SERIES, 'סיכום', `**Context window = כמה טקסט המודל רואה בפעם אחת — גבול קשיח.**

ארוך ≠ **זוכר הכל לנצח** — **רק** בגבול.`),
  ],
}
