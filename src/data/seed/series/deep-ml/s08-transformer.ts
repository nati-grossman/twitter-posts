import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה transformer?'

export const deepMlTransformer: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'המאמר 2017', `Attention Is All You Need — Google — **ביטל** צורך ב-RNN לרוב — **מהפכה**.`),
    seriesPost(2, SERIES, 'Self-Attention', `כל מילה **שואלת** את כל המילים — “כמה אני **קשור**?” — **משקלים** — **מערבב**.`),
    seriesPost(3, SERIES, 'מקבילי', `כל הטוקנים **יחד** — **GPU** מנצל — **אימון מהיר** יותר מ-RNN.`),
    seriesPost(4, SERIES, 'Encoder / Decoder', `BERT — **encoder** — הבנה. GPT — **decoder** — **יצירה** — **ארכיטקטורות**.`),
    seriesPost(5, SERIES, 'Multi-head', `כמה **ראשי** attention — **זוויות** שונות — דקדוק, רגש, עובדה.`),
    seriesPost(6, SERIES, 'Positional encoding', `סדר מילים — **לא** inherent — **מוסיפים** מיקום — **sin/cos** או learned.`),
    seriesPost(7, SERIES, 'שכבות עמוקות', `12, 96 blocks — **פרמטרים** ענק — **scale** — GPT-4.`),
    seriesPost(8, SERIES, 'Vision Transformer', `ViT — **תמונה** כטוקנים — **אותו** רעיון — **לא** רק טקסט.`),
    seriesPost(9, SERIES, 'עלות', `Attention — **O(n²)** באורך — **ארוך** = יקר — **אופטימיזציות** (FlashAttention).`),
    seriesPost(10, SERIES, 'סיכום', `**Transformer = Self-Attention + שכבות + מקביליות — בסיס LLM.**

החלפה **ארכיטקטונית** — לא רק “מודל גדול יותר”.`),
  ],
}
