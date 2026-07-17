import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודלים עובדים בקנה מידה של מיליונים?'

export const aiProdScaleMillions: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'בעיה', `מיליון **בקשות/דקה** — **לא** שרת אחד — **הפצה**.`),
    seriesPost(2, SERIES, 'אופקי', `יותר **GPU** — **replicas** — **stateless** API — **scale out**.`),
    seriesPost(3, SERIES, 'תורים', `Message queue — **Kafka** — **workers** — **לא** להציף GPU.`),
    seriesPost(4, SERIES, 'Rate limit', `לפי **משתמש** — **tier** — **מניעת** DDoS — **הוגן**.`),
    seriesPost(5, SERIES, 'Caching', `תשובות, embeddings — **CDN** — **פחות** GPU — **חכם**.`),
    seriesPost(6, SERIES, 'Routing', `קל → **mini** — כבד → **4** — **חיסכון** — **אוטומטי**.`),
    seriesPost(7, SERIES, 'Multi-region', `EU, US — **קרוב** — **רגולציה** — **failover**.`),
    seriesPost(8, SERIES, 'Cost', `דולר לטוקן × **מיליארד** — **אופטימיזציה** — **עסק** — **לא** רק ML.`),
    seriesPost(9, SERIES, 'תחזוקה', `deploy ללא **הפסקה** — **canary** — **rollback** — **SRE**.`),
    seriesPost(10, SERIES, 'סיכום', `**קנה מידה = replicas + תורים + rate limits + routing + cache — מערכת, לא מודל גדול יותר.**

ChatGPT **הנדסת** תשתית — **לא** קסם.`),
  ],
}
