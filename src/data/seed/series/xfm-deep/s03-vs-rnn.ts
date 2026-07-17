import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה transformers החליפו RNNs?'

export const xfmDeepVsRnn: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'RNN בסיס', `טוקן אחר טוקן — **זיכרון** נסתר — **רצף** — **לא** מקביל באימון.`),
    seriesPost(2, SERIES, 'Vanishing gradient', `משפט ארוך — **גרדיאנט** נעלם — **שוכח** התחלה — **בעיה** קלאסית.`),
    seriesPost(3, SERIES, 'מקבילות', `Transformer — **כל** הטוקנים **יחד** — **GPU** מנוצל — **אימון** מהיר.`),
    seriesPost(4, SERIES, 'מרחק', `Attention — **קפיצה** — RNN — **צעדים** רבים — **דילול** מידע.`),
    seriesPost(5, SERIES, '2017–2020', `תרגום → BERT → GPT-2 → GPT-3 — **מעבר** מהיר — **תוצאות**.`),
    seriesPost(6, SERIES, 'אורך', `RNN — **מוגבל** — Transformer — **חלון** גדול — **128k** — **עדיין** גבול.`),
    seriesPost(7, SERIES, 'LSTM GRU', `שיפור על RNN — **עדיין** רצף — **לא** מספיק לסקייל — **הוחלף**.`),
    seriesPost(8, SERIES, 'עלות Attention', `O(n²) — **בעיה** — **אבל** GPU + Flash — **ניצח** בכל זאת.`),
    seriesPost(9, SERIES, 'לא אפס RNN', `זמן אמת קטן — **לפעמים** RNN — **שפה גדולה** — **Transformer**.`),
    seriesPost(10, SERIES, 'סיכום', `**RNN = רצף איטי ושוכח. Transformer = קשר ישיר ומקביל — לכן LLM.**

החלפה — **לא** אופנה — **הנדסה**.`),
  ],
}
