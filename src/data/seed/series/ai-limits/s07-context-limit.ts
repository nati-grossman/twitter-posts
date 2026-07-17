import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה מגבלות הקשר (context limit)?'

export const aiLimitsContextLimit: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**Context limit** — מקסימום **טוקנים** בבת אחת — **קלט + פלט** — **חלון**.`),
    seriesPost(2, SERIES, 'מספרים', `4k, 32k, 128k — **תלוי** מודל — **לא** אינסופי — **עלות** גדלה.`),
    seriesPost(3, SERIES, 'Attention', `O(n²) — **ארוך** = **יקר** — **סיבה** למגבלה — **טכני**.`),
    seriesPost(4, SERIES, 'מה נכנס', `פרומפט + היסטוריה + מסמכים — **הכל** נספר — **טוקנים**.`),
    seriesPost(5, SERIES, 'חיתוך', `מעבר — **נחתך** תחילה/אמצע — **אובדן** — **בלתי** נראה לפעמים.`),
    seriesPost(6, SERIES, 'סיכום ארוך', `להדביק ספר — **לא** — **צריך** chunking — **RAG** — **חלקים**.`),
    seriesPost(7, SERIES, 'KV cache', `ב-inference — **זיכרון** GPU — **מגביל** גם — **לא** רק טוקנים תאורטיים.`),
    seriesPost(8, SERIES, 'הארכה', `RoPE scaling — **128k** — **עדיין** גבול — **לא** כל הפרויקט.`),
    seriesPost(9, SERIES, 'תכנון', `פרומפט קצר — **יקר** פחות — **איכות** לפעמים **עולה** — **ממוקד**.`),
    seriesPost(10, SERIES, 'סיכום', `**מגבלת הקשר = תקרת טוקנים שהמודל רואה בבת אחת — לא זיכרון ארוך טווח.**

מעבר — **נעלם** או **נחתך**.`),
  ],
}
