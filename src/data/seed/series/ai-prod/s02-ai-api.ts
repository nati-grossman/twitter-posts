import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה API של AI?'

export const aiProdAiApi: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**API** — ממשק HTTP — **שולח** פרומפט — **מקבל** טקסט — **בלי** להריץ מודל אצלך.`),
    seriesPost(2, SERIES, 'מפתח', `API key — **זהות** — **חיוב** — **מגבלות** — **סוד** — **לא** בקוד ציבורי.`),
    seriesPost(3, SERIES, 'JSON', `messages, model, temperature — **בקשה** — **תשובה** JSON — **סטנדרט**.`),
    seriesPost(4, SERIES, 'Streaming', `SSE — **טוקן** טוקן — **לא** מחכים לסוף — **UX** — **events**.`),
    seriesPost(5, SERIES, 'מחיר', `לפי **טוקן** — **קלט** + **פלט** — **שונה** — **תקציב**.`),
    seriesPost(6, SERIES, 'ספקים', `OpenAI, Anthropic, Google — **אותו** רעיון — **פרמטרים** שונים.`),
    seriesPost(7, SERIES, 'שגיאות', `429, 500 — **retry** — **backoff** — **idempotency** — **production**.`),
    seriesPost(8, SERIES, 'Embeddings API', `טקסט → **וקטור** — **לא** צאט — **חיפוש** — **RAG**.`),
    seriesPost(9, SERIES, 'Self-host', `vLLM, Ollama — **API** מקומי — **שליטה** — **עלות** חומרה.`),
    seriesPost(10, SERIES, 'סיכום', `**API של AI = גשר בין האפליקציה שלך למודל בענן — HTTP, מפתח, טוקנים, סטרימינג.**

בונה מוצר **מעל** — **לא** בתוך GPU.`),
  ],
}
