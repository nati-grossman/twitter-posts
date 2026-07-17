import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה bias במודלים?'

export const aiLimitsBias: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**Bias** במודל — **הטיה** בפלט — **לא** אקראי — **שיקוף** דאטה + **יישור**.`),
    seriesPost(2, SERIES, 'ייצוג', `שפה, תרבות, מגדר — **חסר** — **עודף** — **תשובה** מעוותת.`),
    seriesPost(3, SERIES, 'סטריאוטיפ', `מילים **קשורות** סטטיסטית — **מחזק** — **מסוכן** — **במיוחד** תמונות.`),
    seriesPost(4, SERIES, 'RLHF', `מדרגים **מערביים** — **“בטוח”** = **ערכים** מסוימים — **מחלוקת**.`),
    seriesPost(5, SERIES, 'סירוב לא עקבי', `נושא A **נחסם** — B **לא** — **לא** עקבי — **תחושת** הטיה.`),
    seriesPost(6, SERIES, 'מדידה', `fairness benchmarks — **BBQ** — **לא** מושלם — **שקיפות**.`),
    seriesPost(7, SERIES, 'תיקון', `דאטה **מאוזן** — **הנחיות** — **לא** מבטל — **מפחית**.`),
    seriesPost(8, SERIES, 'משתמש', `פרומפט **מכוון** — **מגביר** הטיה — **אחריות** — **שני** צדדים.`),
    seriesPost(9, SERIES, 'לא רק טכני', `חברה, חוק, תרבות — **מוצר** — **לא** רק ML.`),
    seriesPost(10, SERIES, 'סיכום', `**Bias במודל = פלט שמעדיף דפוסים מהדאטה והיישור — לא ניטרלי אובייקטיבי.**

בדוק **למי** מזיק.`),
  ],
}
