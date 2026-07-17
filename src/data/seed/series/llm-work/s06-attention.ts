import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה attention?'

export const llmWorkAttention: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שאלה פשוטה', `לכל מילה — **מי חשוב?** — **Attention** = **משקלים** על טוקנים אחרים — **מערבב**.`),
    seriesPost(2, SERIES, 'Query Key Value', `Q, K, V — **שלושה** וקטורים — **התאמה** Q·K — **שוקלל** V.`),
    seriesPost(3, SERIES, 'Self-attention', `משפט **מסתכל** על עצמו — **לא** רק encoder-decoder — **Transformer**.`),
    seriesPost(4, SERIES, 'מטריצה', `N×N — **כל** זוג טוקנים — **קשר** — **N** = אורך.`),
    seriesPost(5, SERIES, 'Multi-head', `8–96 **ראשים** — **זוויות** — דקדוק, עובדה, רגש — **מקביל**.`),
    seriesPost(6, SERIES, 'Masked', `בגנרציה — **לא** רואים **עתיד** — **רק** עבר — **causal**.`),
    seriesPost(7, SERIES, 'Softmax', `משקלים **סכום 1** — **התפלגות** — **לא** בחירה אחת.`),
    seriesPost(8, SERIES, 'לפני RNN', `RNN — **איטי** — Attention — **מקביל** — **2017** — **מהפכה**.`),
    seriesPost(9, SERIES, 'עלות', `O(n²) — **ארוך** = **יקר** — **FlashAttention** — **אופטימיזציה**.`),
    seriesPost(10, SERIES, 'סיכום', `**Attention = כמה כל מילה “מקשיבה” לכל מילה אחרת — ליבת Transformer.**

בלי זה — **אין** LLM מודרני.`),
  ],
}
