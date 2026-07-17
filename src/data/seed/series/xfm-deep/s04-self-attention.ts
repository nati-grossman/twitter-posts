import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך self-attention עובד רעיונית?'

export const xfmDeepSelfAttention: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שאלה', `לכל מילה: **מי רלוונטי** במשפט? — **Self** = **באותו** משפט — **לא** חיצוני.`),
    seriesPost(2, SERIES, 'שלושה וקטורים', `מכל embedding — **Q** שאילתה, **K** מפתח, **V** ערך — **ליניארי** — **למידה**.`),
    seriesPost(3, SERIES, 'ציון', `Q של מילה i · K של מילה j — **דמיון** — **גבוה** = **קשור**.`),
    seriesPost(4, SERIES, 'Softmax', `ציונים → **משקלים** 0–1 — **סכום 1** — **התפלגות** הקשב.`),
    seriesPost(5, SERIES, 'שילוב', `סכום משוקלל של **כל** ה-V — **פלט** חדש למילה — **מערבב** הקשר.`),
    seriesPost(6, SERIES, 'אנלוגיה', `כמו **חיפוש** בטבלה — **שאלה** — **מפתחות** — **ערכים** — **לא** מושלמת.`),
    seriesPost(7, SERIES, 'ללא מיקום עדיין', `Attention **לא** יודע סדר — **צריך** positional — **ביחד**.`),
    seriesPost(8, SERIES, 'Scaled', `חלוקה ב-√d — **מניעת** softmax קיצוני — **יציבות**.`),
    seriesPost(9, SERIES, 'חזרה', `אותו מנגנון **בכל** שכבה — **מושגים** **עמוקים** יותר.`),
    seriesPost(10, SERIES, 'סיכום', `**Self-attention = לכל מילה: מי דומה לי (Q·K), ואז מערבבים V לפי משקלים.**

רעיון **פשוט** — **עוצמה** ענקית.`),
  ],
}
