import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה inference (הרצת מודל)?'

export const aiProdInference: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**Inference** — **הרצה** של מודל **מאומן** — **forward** — **לא** עדכון weights.`),
    seriesPost(2, SERIES, 'מול אימון', `Training — **שבועות** — Inference — **מילישניות**–שניות — **שימוש**.`),
    seriesPost(3, SERIES, 'Forward pass', `טוקנים → שכבות → **logits** — **טוקן הבא** — **חוזר**.`),
    seriesPost(4, SERIES, 'GPU', `מטריצות — **CUDA** — **VRAM** — **בקבוק** לפעמים זיכרון.`),
    seriesPost(5, SERIES, 'KV cache', `שומרים **מפתחות/ערכים** — **לא** מחשבים הכל מחדש — **מהיר**.`),
    seriesPost(6, SERIES, 'Quantization', `INT8, FP8 — **קטן** — **מהיר** — **דיוק** כמעט — **production**.`),
    seriesPost(7, SERIES, 'Cold start', `מודל **לא** בזיכרון — **טעינה** — **איטי** ראשון — **warm pool**.`),
    seriesPost(8, SERIES, 'שרת', `vLLM, TGI — **מנוע** inference — **תור** — **batching**.`),
    seriesPost(9, SERIES, 'Edge', `טלפון — **מודל קטן** — **on-device** — **פרטיות** — **מוגבל**.`),
    seriesPost(10, SERIES, 'סיכום', `**Inference = הרצת המודל לייצר טוקנים — forward + GPU + אופטימיזציה — זה מה שמשלם API.**

אימון **פעם** — inference **כל** בקשה.`),
  ],
}
