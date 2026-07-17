import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה performance bottleneck?'

export const perfBottleneck: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'צוואר בקבוק', `**Bottleneck** — החלק **הכי איטי** — **מגביל** את כל המערכת — **שאר** מחכים.`),
    seriesPost(2, SERIES, 'אנלוגיה', `כביש 4 נתיבים → **נתיב 1** — **פקק** — **לא** משנה כמה מהר לפני.`),
    seriesPost(3, SERIES, 'DB', `הכי נפוץ — **שאילתה** — **lock** — **דיסק** — **אינדקס** חסר.`),
    seriesPost(4, SERIES, 'רשת', `latency — **חבל** — **CDN** — **לא** קוד.`),
    seriesPost(5, SERIES, 'CPU', `לולאה כבדה — **פרופיל** — **אלגוריתם** — **O(n²)**.`),
    seriesPost(6, SERIES, 'זיכרון', `OOM — **swap** — **איטי** — **דליפה** — **GC**.`),
    seriesPost(7, SERIES, 'מציאות', `מוסיפים 10 שרתים — **DB** עדיין אחד — **לא** עזר — **מצא** צוואר.`),
    seriesPost(8, SERIES, 'Amdahl', `חלק **סדרתי** — **לא** מקביל לנצח — **גבול**.`),
    seriesPost(9, SERIES, 'פתרון', `מדידה → **תיקון** נקודה → **מדידה** — **חוזר** — **לא** ניחוש.`),
    seriesPost(10, SERIES, 'סיכום', `**Bottleneck = המגבלה האמיתית — שם משקיעים אופטימיזציה.**

שיפור **במקום הלא נכון** = **בזבוז**.`),
  ],
}
