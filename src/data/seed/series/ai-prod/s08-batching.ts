import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה batching בבקשות AI?'

export const aiProdBatching: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'רעיון', `**Batch** — כמה **בקשות** יחד על **GPU** — **ניצול** — **יעילות**.`),
    seriesPost(2, SERIES, 'Continuous batching', `vLLM — **מצטרפות** באמצע — **לא** מחכים לכולם — **דינמי**.`),
    seriesPost(3, SERIES, 'מול בודד', `בקשה אחת — **GPU** ריק חלקית — **יקר** — **batch** ממלא.`),
    seriesPost(4, SERIES, 'Padding', `אורכים שונים — **ריפוד** — **בזבוז** — **טכניקות** להפחית.`),
    seriesPost(5, SERIES, 'API Batch', `OpenAI **batch API** — **לא** real-time — **הנחה** — **24h** — **עיבוד** המוני.`),
    seriesPost(6, SERIES, 'Latency tradeoff', `batch גדול — **תור** — **איטי** ליחיד — **מהיר** לסהכ — **איזון**.`),
    seriesPost(7, SERIES, 'Embedding batch', `1000 טקסטים — **מטריצה** — **זול** — **RAG** indexing.`),
    seriesPost(8, SERIES, 'Inference server', `מנוע **מנהל** batch — **תור** — **priority** — **SLA**.`),
    seriesPost(9, SERIES, 'Training batch', `לא אותו דבר — **gradients** — **אימון** — **שם** דומה.`),
    seriesPost(10, SERIES, 'סיכום', `**Batching = לרוץ כמה בקשות על GPU במקביל — קריטי לעלות ולקנה מידה.**

בלי זה — **אין** מיליון משתמשים.`),
  ],
}
