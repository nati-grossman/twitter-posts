import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה fine-tuning?'

export const trainRealFineTuning: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'אחרי pretrain', `**Fine-tuning** — המשך אימון על **דאטה ממוקד** — **התאמה** למשימה.`),
    seriesPost(2, SERIES, 'SFT', `Supervised Fine-Tuning — **שאלות ותשובות** — **צ'אט** — **הוראות** — **ChatGPT**.`),
    seriesPost(3, SERIES, 'פחות נתונים', `אלפים–מיליונים דוגמאות — **לא** טריליון — **זול** יחסית — **ימים**.`),
    seriesPost(4, SERIES, 'LoRA', `מעדכנים **מטריצות קטנות** — **לא** כל המודל — **זול** — **מקומי**.`),
    seriesPost(5, SERIES, 'Domain', `רפואה, משפט — **מומחה** — **סיכון** hallucination אם דל — **בדיקה**.`),
    seriesPost(6, SERIES, 'Instruction', `“ענה בקצרה”, “בעברית” — **לימוד** לעקוב — **לא** ידע חדש תמיד.`),
    seriesPost(7, SERIES, 'Overfitting', `קטן מדי — **שינון** דוגמאות — **גדול** מדי — **שוכח** — **איזון**.`),
    seriesPost(8, SERIES, 'API fine-tune', `OpenAI — **מעלים** JSONL — **לא** pretrain — **רק** התאמה.`),
    seriesPost(9, SERIES, 'לא תחליף RLHF', `SFT **לא** מספיק לבטיחות — **צריך** יישור — **שלבים**.`),
    seriesPost(10, SERIES, 'סיכום', `**Fine-tuning = לכוון מודל מוכן למשימה/סגנון עם דאטה מסומן — SFT הוא הלב של צאט.**

Pretrain **יודע שפה** — fine-tune **יודע לענות**.`),
  ],
}
