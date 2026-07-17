import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל רואה דוגמאות?'

export const modelLearnSeeExamples: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא עיניים', `**רואה** = מספרים — תמונה → **מטריצה** — טקסט → **טוקנים** — **embedding**.`),
    seriesPost(2, SERIES, 'Normalization', `0–255 → **0–1** — **יציב** — **ממוצע 0** לפעמים — **preprocess**.`),
    seriesPost(3, SERIES, 'Token IDs', `מילה → מספר — **שורה** בטבלת embedding — **וקטור** 768 — **שכבה 1**.`),
    seriesPost(4, SERIES, 'Batch', `32 תמונות **יחד** — **מטריצה** — **GPU** — **מקביל**.`),
    seriesPost(5, SERIES, 'Augmentation', `היפוך, crop — **דוגמה חדשה** — **רובוסטיות** — **train only**.`),
    seriesPost(6, SERIES, 'Label', `one-hot — [0,1,0] חתול — **loss** משווה ל**פלט**.`),
    seriesPost(7, SERIES, 'Attention', `טוקנים **מסתכלים** — **הקשר** — **לא** מילה בודדת — **Transformer**.`),
    seriesPost(8, SERIES, 'רעש', `פיקסל מלוכלך — **לומד** להתעלם? — **לא** — **מסנן** בדאטה.`),
    seriesPost(9, SERIES, 'Multimodal', `תמונה + טקסט — **שני** encoders — **ממזגים** — **CLIP**.`),
    seriesPost(10, SERIES, 'סיכום', `**רואה = המרה לטנסורים + embeddings + שכבות — לא תצוגה אנושית.**

דוגמה = **מערך מספרים + תווית**.`),
  ],
}
