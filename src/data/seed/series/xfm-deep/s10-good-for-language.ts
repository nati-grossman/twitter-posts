import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה transformers טובים לשפה?'

export const xfmDeepGoodForLanguage: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'תלות ארוכה', `מילה רחוקה **משפיעה** — **Attention** ישיר — **לא** דרך 100 צעדי RNN.`),
    seriesPost(2, SERIES, 'דו-כיוון הקשר', `BERT — **הקשר** מלא — GPT — **היסטוריה** — **גמיש**.`),
    seriesPost(3, SERIES, 'מקבילות אימון', `כל המשפט **יחד** — **טריליוני** טוקנים — **סקייל** נתונים.`),
    seriesPost(4, SERIES, 'משימה אחת', `חיזוי הבא — **הכל** נגזר — **תרגום**, סיכום — **fine-tune** או **הוראה**.`),
    seriesPost(5, SERIES, 'דפוסים רב-קנים', `דקדוק, סגנון, עובדה — **ראשים** — **שכבות** — **הפרדה** חלקית.`),
    seriesPost(6, SERIES, 'Few-shot', `דוגמאות בפרומפט — **Attention** מקשר — **בלי** אימון חדש.`),
    seriesPost(7, SERIES, 'רב-לשוני', `אותו ארכיטקטורה — **עברית**, אנגלית — **tokenizer** משותף.`),
    seriesPost(8, SERIES, 'לא מושלם', `מתמטיקה, לוגיקה — **טועה** — **כלי** — **לא** סוף הדרך.`),
    seriesPost(9, SERIES, 'דומיננטיות', `99% LLM — **Transformer** — **מחליפים** רק **חלקים** — **עדיין**.`),
    seriesPost(10, SERIES, 'סיכום', `**טובים לשפה כי שפה = קשרים ארוכים + הרבה דפוסים + סקייל — Transformer נבנה בדיוק לזה.**

ChatGPT — **לא** מקרה.`),
  ],
}
