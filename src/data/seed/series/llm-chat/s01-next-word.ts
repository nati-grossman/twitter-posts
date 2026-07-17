import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל שפה מנבא את המילה הבאה?'

export const llmChatNextWord: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הליבה', `**Language Model** — נותן **הסתברות** לכל טוקן הבא — בוחר אחד — **חוזר** — משפט שלם.`),
    seriesPost(2, SERIES, 'Autoregressive', `מייצר **משמאל לימין** (בערך) — כל טוקן **תלוי** בקודמים — **שרשרת**.`),
    seriesPost(3, SERIES, 'Logits', `שכבה אחרונה — **ציונים** לכל מילה במילון — **softmax** → הסתברויות.`),
    seriesPost(4, SERIES, 'Sampling', `לא תמיד הכי גבוה — **temperature** — **יצירתיות** מול **דטרמיניזם**.`),
    seriesPost(5, SERIES, 'Top-p / top-k', `רק מבין **הסבירים** — **חותך** זנב — **פחות** מילים מוזרות.`),
    seriesPost(6, SERIES, 'הקשר', `כל הטוקנים עד כה — **Attention** — “הבא” **מותנה** על הכל בחלון.`),
    seriesPost(7, SERIES, 'לא תכנון', `לא “חושב” משפט — **מחזיק** trajectory סטטיסטית — **צעד מקומי**.`),
    seriesPost(8, SERIES, 'Stop token', `סיום — **EOS** — או **מקסימום** אורך — **עוצר**.`),
    seriesPost(9, SERIES, 'Beam search (ישן יותר)', `כמה **מסלולים** במקביל — **תרגום** — פחות ב-ChatGPT חופשי.`),
    seriesPost(10, SERIES, 'סיכום', `**מנבא מילה הבאה = הסתברויות על טוקן → דגימה → חזרה.**

כל התשובה = **מאות/אלפי** חיזויים כאלה.`),
  ],
}
