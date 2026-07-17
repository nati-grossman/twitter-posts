import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה transformers שינו את עולם ה-AI?'

export const deepMlWhyTransformers: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'Scale', `מאפשר **אימון ענק** על GPU — **טריליון** טוקנים — **foundation models**.`),
    seriesPost(2, SERIES, 'הכל במשפחה אחת', `טקסט, קוד, תמונה (ViT), אודיו — **תבנית** — **השקעה** מרוכזת.`),
    seriesPost(3, SERIES, 'Transfer', `pretrain אחד — **fine-tune** קטן — **מוצר** מהיר — **לא** מאפס.`),
    seriesPost(4, SERIES, 'ביצועים', `SOTA על **רוב** benchmarks 2018+ — **החליף** RNN/CNN ב-NLP.`),
    seriesPost(5, SERIES, 'אקוסיסטם', `Hugging Face, PyTorch — **מודלים מוכנים** — **דמוקרטיזציה** (יחסית).`),
    seriesPost(6, SERIES, 'ChatGPT רגע', `ממשק + RLHF + GPT — **ציבור** הבין — **לא** המצאת Transformer אתמול.`),
    seriesPost(7, SERIES, 'מחיר כוח', `חישוב — **מיליונים** — **ריכוז** אצל מעט חברות — **לא** הכל פתוח.`),
    seriesPost(8, SERIES, 'מגבלות נשארו', `hallucination, עלות, אנרגיה — **לא** פתר הכל — **שינה** **סוג** הפתרונות.`),
    seriesPost(9, SERIES, 'לפני ואחרי', `לפני: מודל לכל משימה. אחרי: **בסיס אחד** + prompt — **פרדיגמה**.`),
    seriesPost(10, SERIES, 'סיכום', `**Transformers = scale + מקביליות + משפחה אחת → LLM ועידן GenAI.**

שינוי **תשתית** — לא רק **אפליקציה**.`),
  ],
}
