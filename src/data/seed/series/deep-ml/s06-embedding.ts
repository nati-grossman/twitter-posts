import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה embedding?'

export const deepMlEmbedding: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'וקטור במקום מילה', `**Embedding** — רשימת מספרים (256, 768…) — **מייצג** מילה/משפט — **קלט** לשכבות הבאות.`),
    seriesPost(2, SERIES, 'למה לא one-hot', `מילה = [0,0,1,0…] — **ענק** — **לא** קרבה בין מילים — embedding **דחוס**.`),
    seriesPost(3, SERIES, 'נלמד', `לא מילון ידני — **לומד** ממשימה — “bank” קרוב ל“money” **בהקשר פיננסי**.`),
    seriesPost(4, SERIES, 'מרחב', `מילים דומות — **מרחק קטן** — word2vec — **king - man + woman ≈ queen** — **קלאסי**.`),
    seriesPost(5, SERIES, 'sentence embedding', `משפט שלם — **וקטור אחד** — חיפוש סמנטי — **RAG**.`),
    seriesPost(6, SERIES, 'תמונה גם', `CLIP — תמונה + טקסט — **אותו מרחב** — **חיפוש** בתמונות.`),
    seriesPost(7, SERIES, 'לא משמעות אנושית', `קרבה = **שימוש סטטיסטי** — **לא** פילוסופיה — **bias** בדאטה.`),
    seriesPost(8, SERIES, 'שכבת embedding', `שכבה ראשונה ב-Transformer — **טבלה** — token id → וקטור — **מיליוני** שורות.`),
    seriesPost(9, SERIES, 'שמירה', `Vector DB — **מאחסן** embeddings — **חיפוש** מהיר — Pinecone, pgvector.`),
    seriesPost(10, SERIES, 'סיכום', `**Embedding = ייצוג מספרי דחוס של מילה/יחידה — קרבה = דמיון בשימוש.**

לב **חיפוש, RAG, המלצות**.`),
  ],
}
