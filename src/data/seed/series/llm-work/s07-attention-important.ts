import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה attention כל כך חשוב?'

export const llmWorkAttentionImportant: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'בלי זה אין LLM', `GPT, Claude, Llama — **כולם** Transformer — **Attention** = **מנוע** הקשר.`),
    seriesPost(2, SERIES, 'מרחק ארוך', `RNN **שוכח** — Attention **קופץ** 10,000 טוקנים — **זה** vs **זה**.`),
    seriesPost(3, SERIES, 'מקביל', `כל הטוקנים **יחד** — **GPU** — **אימון** מהיר — **סקייל**.`),
    seriesPost(4, SERIES, 'תרגום', `מקור — **Attention** — יעד — **יישור** — **התחלה** של המודרני.`),
    seriesPost(5, SERIES, 'In-context learning', `דוגמאות בפרומפט — **Attention** **מקשר** — **few-shot** — **בלי** fine-tune.`),
    seriesPost(6, SERIES, 'Interpretability', `מפת heat — **איזה** מילה **הסתכלה** — **לא** מושלם — **רמז**.`),
    seriesPost(7, SERIES, 'Scaling laws', `יותר שכבות + Attention — **יכולות** — **Chinchilla** — **נתונים**.`),
    seriesPost(8, SERIES, 'חלופות', `Mamba, linear — **מנסים** — **עדיין** Attention **דומיננטי**.`),
    seriesPost(9, SERIES, 'עלות אמיתית', `n² — **בעיה** — **סיבה** לחלונות — **חדשנות** חיסכון.`),
    seriesPost(10, SERIES, 'סיכום', `**Attention חשוב כי הוא מאפשר קשר גלובלי, מקבילות וסקייל — בלעדיו אין מודלי שפה כמו היום.**

זה **לא** תוספת — **זה** הארכיטקטורה.`),
  ],
}
