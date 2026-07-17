import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מערכת מטפלת במיליון משתמשים?'

export const perfMillionUsers: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא במכונה אחת', `מיליון **בו-זמנית**? — **אלפי** שרתים — **מפוזר** — **לא** vertical לנצח.`),
    seriesPost(2, SERIES, 'Stateless', `כל בקשה **עצמאית** — **scale** אופקי — **לא** session בזיכרון מקומי.`),
    seriesPost(3, SERIES, 'Load balancer', `מפזר — **health check** — **מוציא** מת — **שקוף**.`),
    seriesPost(4, SERIES, 'DB scale', `sharding, replicas — **לא** טבלה אחת ענקית — **בottleneck** נפרד.`),
    seriesPost(5, SERIES, 'Cache שכבה', `רוב קריאות — **Redis cluster** — **DB** רק **miss**.`),
    seriesPost(6, SERIES, 'CDN', `סטטי — **לא** נוגעים בשרת — **90%** תעבורה?`),
    seriesPost(7, SERIES, 'Async + queue', `כתיבה כבדה — **תור** — **לא** מחכים בתשובה — **202**.`),
    seriesPost(8, SERIES, 'Chaos', `בודקים **נפילת** AZ — **לא** בהפתעה — **resilience**.`),
    seriesPost(9, SERIES, 'לא כולם יחד', `מיליון **רשומים** ≠ מיליון **online** — **peak** — **תכנון**.`),
    seriesPost(10, SERIES, 'סיכום', `**מיליון = scale אופקי + LB + cache + DB מפוצל + async — ארכיטקטורה.**

לא **שרת חזק יותר** — **הרבה** בינוניים.`),
  ],
}
