import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה caching מתקדם?'

export const perfAdvancedCache: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מעבר לדפדפן', `Cache **בשכבות** — browser, CDN, reverse proxy, Redis, **CPU** — **היררכיה**.`),
    seriesPost(2, SERIES, 'Redis', `בזיכרון — **מילי-שניות** — session, תוצאת שאילתה — **TTL**.`),
    seriesPost(3, SERIES, 'Cache-aside', `אפליקציה בודקת cache — **miss** → DB — **שומר** — **נפוץ**.`),
    seriesPost(4, SERIES, 'Write-through', `כותבים cache + DB **יחד** — **עקבי** — **איטי** יותר בכתיבה.`),
    seriesPost(5, SERIES, 'Invalidation', `עדכון מוצר — **מוחקים** מפתח — **stale** מסוכן — **הארד**.`),
    seriesPost(6, SERIES, 'CDN edge', `תוכן סטטי — **Edge** — **purge** אחרי deploy — **גרסאות**.`),
    seriesPost(7, SERIES, 'HTTP cache headers', `Cache-Control, ETag — **דפדפן** — **304** לא שונה — **חינם**.`),
    seriesPost(8, SERIES, 'Memoization', `פונקציה — **תוצאה** זהה — **זוכרים** — **קוד** — **זהיר** memory.`),
    seriesPost(9, SERIES, 'Cache stampede', `פג תוקף — **אלף** בקשות ל-DB — **lock** — **single flight**.`),
    seriesPost(10, SERIES, 'סיכום', `**Caching מתקדם = שכבות, TTL, invalidation, Redis — לא “שמור בדפדפן” בלבד.**

Hit rate גבוה = **שרת** נושם.`),
  ],
}
