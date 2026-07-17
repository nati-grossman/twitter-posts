import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה transformer architecture?'

export const xfmDeepArchitecture: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, '2017', `**Attention Is All You Need** — Google — **בלוקים** חוזרים — **בלי** RNN — **מהפכה**.`),
    seriesPost(2, SERIES, 'בלוק', `Embedding → **N שכבות** → כל שכבה: Attention + FFN — **זהה** — **עמוק**.`),
    seriesPost(3, SERIES, 'פרמטרים', `מיליארדים — **weights** — **לא** כללים — **נלמד** מאימון.`),
    seriesPost(4, SERIES, 'Decoder-only', `GPT — **רק** decoder — **מנבא** הבא — **ChatGPT** — **דומיננטי**.`),
    seriesPost(5, SERIES, 'Encoder-only', `BERT — **הבנה** — **לא** גנרציה חופשית — **סיווג**, חיפוש.`),
    seriesPost(6, SERIES, 'Encoder-decoder', `T5, תרגום מקורי — **שני** צדדים — **מקור** → **יעד**.`),
    seriesPost(7, SERIES, 'Residual', `פלט + קלט — **skip** — **גרדיאנט** זורם — **עמוק** אפשרי.`),
    seriesPost(8, SERIES, 'Layer Norm', `ייצוב **לפני** כל תת-שכבה — **Pre-LN** — **סטנדרט** מודרני.`),
    seriesPost(9, SERIES, 'לא מונולית', `**מודולרי** — Attention נפרד מ-FFN — **החלפה** חלקית — **מחקר**.`),
    seriesPost(10, SERIES, 'סיכום', `**Transformer = ערימת בלוקים עם Self-Attention + FFN — ארכיטקטורת ה-LLM המודרני.**

זה **הלב** — לא רק שם.`),
  ],
}
