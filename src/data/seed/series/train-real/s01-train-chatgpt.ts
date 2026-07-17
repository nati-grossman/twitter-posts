import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מאמנים מודל כמו ChatGPT בפועל?'

export const trainRealTrainChatgpt: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא קסם', `**חודשים** — **מיליוני** GPU — **טריליוני** טוקנים — **צוותים** — **לא** מחשב בית.`),
    seriesPost(2, SERIES, 'שלבים', `**Pretrain** גדול → **SFT** הוראות → **RLHF** (לעיתים) → **בטיחות** — **שרשרת**.`),
    seriesPost(3, SERIES, 'נתונים', `אינטרנט, ספרים, קוד — **רישוי** — **סינון** — **הרבה** עבודה אנושית.`),
    seriesPost(4, SERIES, 'חישוב', `קלאסטרים — **NVIDIA** — **עלות** מיליוני דולר — **אנרגיה** — **תשתית**.`),
    seriesPost(5, SERIES, 'היפר-פרמטרים', `גודל, שכבות, lr, batch — **ניסויים** — **אבלים** — **Chinchilla**.`),
    seriesPost(6, SERIES, 'צקפוינטים', `שמירה כל X צעדים — **המשך** אחרי קריסה — **גרסאות** פנימיות.`),
    seriesPost(7, SERIES, 'הערכה', `בנצמרקים + **אנשים** מדרגים — **לא** loss בלבד — **איכות**.`),
    seriesPost(8, SERIES, 'אחרי שחרור', `משוב משתמשים — **תיקונים** — **גרסה** 4o, 5 — **מחזור**.`),
    seriesPost(9, SERIES, 'סוד מסחרי', `פרטים **לא** פומביים — **מאמרים** חלקיים — **הנדסה** כללית ידועה.`),
    seriesPost(10, SERIES, 'סיכום', `**ChatGPT = pretrain ענק + fine-tune + יישור אנושי + תשתית ונתונים — לא “למד בעצמו בלילה”.**

אימון **תעשייה**.`),
  ],
}
