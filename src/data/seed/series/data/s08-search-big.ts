import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך עושים חיפוש בתוך דאטה ענק?'

export const dataSearchBig: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא SELECT על הכל', `טבלה ביליון שורות — **full scan** — **שעות** — **לא** production.`),
    seriesPost(2, SERIES, 'Index', `B-tree — **O(log n)** — **WHERE** מהיר — **תחזוקה**.`),
    seriesPost(3, SERIES, 'Elasticsearch', `מנוע חיפוש — **inverted index** — טקסט מלא — **לוגים**, מוצרים.`),
    seriesPost(4, SERIES, 'Inverted index', `מילה → רשימת מסמכים — **כמו** מפתח בספר — **גוגל**.`),
    seriesPost(5, SERIES, 'Vector search', `embedding — **דמיון** סמנטי — **RAG** — **לא** מילה מדויקת.`),
    seriesPost(6, SERIES, 'Bloom filter', `“אולי קיים” — **מהיר** — **לא** false negative — **cache** שכבות.`),
    seriesPost(7, SERIES, 'MapReduce / Spark', `סורקים **מפוזרים** — aggregate — **לא** real-time לפעמים.`),
    seriesPost(8, SERIES, 'Caching', `תוצאה חמה — Redis — **לא** לשאול DB שוב — **TTL**.`),
    seriesPost(9, SERIES, 'Query plan', `DB **מסביר** — אינדקס או scan — **אופטימיזציה** — EXPLAIN.`),
    seriesPost(10, SERIES, 'סיכום', `**חיפוש בדאטה ענק = אינדקס + מנועי חיפוש + פיזור + cache — לא כוח גס.**

שאלה **שונה** — כלי **שונה**.`),
  ],
}
