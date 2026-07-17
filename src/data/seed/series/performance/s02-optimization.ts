import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה optimization?'

export const perfOptimization: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**Optimization** — שיפור **ביצועים** — פחות זמן, פחות זיכרון, פחות כסף — **מדידה** לפני.`),
    seriesPost(2, SERIES, 'מדוד קודם', `נראה איטי — **profiler** — **איפה** — **לא** לנחש.`),
    seriesPost(3, SERIES, 'Pareto', `20% הקוד — **80%** הזמן — **שם** מתמקדים — **לא** הכל.`),
    seriesPost(4, SERIES, 'Frontend', `minify, tree-shake, lazy load — **פחות** JS — **תמונות** WebP.`),
    seriesPost(5, SERIES, 'Backend', `אינדקס, שאילתה — **N+1** — **batch** — **connection pool**.`),
    seriesPost(6, SERIES, 'Infrastructure', `יותר שרתים — **CDN** — **לא** תמיד קוד — **שכבה**.`),
    seriesPost(7, SERIES, 'premature', `אופטימיזציה **מוקדם** — **בזבוז** — **קודם** עובד, אחר כך מהיר.`),
    seriesPost(8, SERIES, 'trade-off', `מהיר יותר — **מורכב** — **יקר** — **פחות** גמיש — **בוחרים**.`),
    seriesPost(9, SERIES, 'רגרסיה', `שיפור אחד — **שבר** אחר — **בדיקות** — **monitoring**.`),
    seriesPost(10, SERIES, 'סיכום', `**Optimization = מצא בוטלנק במדידה → שפר → מדוד שוב.**

לא **קסם** — **הנדסה**.`),
  ],
}
