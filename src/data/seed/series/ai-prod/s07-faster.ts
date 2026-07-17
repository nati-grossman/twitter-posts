import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך עושים מודל מהיר יותר?'

export const aiProdFaster: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'KV cache', `לא לחשב **עבר** מחדש — **הכי** משמעותי — **סטנדרט**.`),
    seriesPost(2, SERIES, 'Quantization', `INT8, FP8 — **פחות** זיכרון — **יותר** throughput — **GPTQ**.`),
    seriesPost(3, SERIES, 'מודל קטן', `distillation — **mini** — **90%** איכות — **3×** מהיר — **מוצר**.`),
    seriesPost(4, SERIES, 'FlashAttention', `פחות **זיכרון** Attention — **מהיר** — **ארוך** context.`),
    seriesPost(5, SERIES, 'Speculative', `מודל **קטן** מנחש — **גדול** מאשר — **פחות** צעדים.`),
    seriesPost(6, SERIES, 'Hardware', `H100, B200 — **Tensor cores** — **דור** חדש — **תשתית**.`),
    seriesPost(7, SERIES, 'אורך פלט', `max_tokens — **קצר** — **מהיר** — **משתמש** מגדיר.`),
    seriesPost(8, SERIES, 'Caching תשובות', `שאלה **זהה** — **Redis** — **לא** GPU — **זהירות** PII.`),
    seriesPost(9, SERIES, 'Parallel', `מספר GPU — **tensor parallel** — **מודל** אחד **מפוצל**.`),
    seriesPost(10, SERIES, 'סיכום', `**מהיר יותר = KV cache + quantization + מודל קטן + חומרה + פחות טוקנים.**

אין **כפתור** אחד — **הנדסה**.`),
  ],
}
