import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה unsupervised learning?'

export const aiBasicsUnsupervised: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'בלי תשובות', `**Unsupervised** — דאטה **בלי** תווית — המודל **מוצא מבנה** — קבוצות, דחיסה.`),
    seriesPost(2, SERIES, 'Clustering', `K-means — **מקבצים** דומים — לקוחות, מסמכים — **לא** יודעים שמות מראש.`),
    seriesPost(3, SERIES, 'Dimensionality reduction', `PCA, t-SNE — **פחות** ממדים — **ויזואליזציה** — **רעש** יורד.`),
    seriesPost(4, SERIES, 'Anomaly detection', `חריג מדפוס — **הונאה**, תקלה — **בלי** דוגמאות הונאה — **שימושי**.`),
    seriesPost(5, SERIES, 'Pretraining', `LLM — **רוב** הטקסט **בלי** תשובות — **לומד שפה** — אחר כך supervised קטן.`),
    seriesPost(6, SERIES, 'Autoencoder', `דחוס → שחזר — **למידה** ייצוג — **זיהוי** אנומליה.`),
    seriesPost(7, SERIES, 'קשה להעריך', `אין “accuracy” פשוט — **בדיקה** אנושית — **משמעות** קבוצות.`),
    seriesPost(8, SERIES, 'Recommendation', `דמיון משתמשים — **לא** תמיד supervised — **collaborative** filtering.`),
    seriesPost(9, SERIES, 'Self-supervised', `מסתירים מילה — **מנחשים** — **בין** supervised ל-unsupervised — **BERT, GPT**.`),
    seriesPost(10, SERIES, 'סיכום', `**Unsupervised = גילוי מבנה בלי תוויות — clustering, ייצוג, pretrain.**

הרבה **כוח** ב-LLM מתחיל **כאן**.`),
  ],
}
