import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה נתוני אימון (Training data)?'

export const aiBasicsTrainingData: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'דלק', `בלי דאטה — **אין** למידה — **דוגמאות** (קלט, תשובה נכונה) — **או** טקסט עצום ל-LLM.`),
    seriesPost(2, SERIES, 'תוויות', `תמונה + “חתול” — **supervised** — **תיוג** יקר — **איכות** > כמות לפעמים.`),
    seriesPost(3, SERIES, 'Dataset', `ImageNet, Common Crawl — **אוספים** — **מגוון** — **bias** אם חסר קבוצות.`),
    seriesPost(4, SERIES, 'ניקוי', `כפילויות, רעש, טעויות תיוג — **80%** עבודה — **לא** רק אימון.`),
    seriesPost(5, SERIES, 'Train / Val / Test', `**פיצול** — לא לבדוק על מה שלמד — **test** פעם אחת — **בלי** לרמות.`),
    seriesPost(6, SERIES, 'Data leakage', `מידע מעתיד **בטעות** באימון — **מדדים מזויפים** — **זהירות** בזמן.`),
    seriesPost(7, SERIES, 'סינתטי', `דאטה **מיוצר** — תרגום אוטומטי — **מגדיל** — **סיכון** ארטיפקטים.`),
    seriesPost(8, SERIES, 'פרטיות', `PII בדאטה — **מחיקה**, **הסכמה** — **בעיה** משפטית — לא רק טכנית.`),
    seriesPost(9, SERIES, 'רענון', `עולם משתנה — דאטה 2020 — **לא** יודע 2025 — **retrain** — **עלות**.`),
    seriesPost(10, SERIES, 'סיכום', `**Training data = החומר שהמודל מסיק ממנו — איכותו = תקרת הביצועים.**

Garbage in → garbage out — **עדיין נכון**.`),
  ],
}
