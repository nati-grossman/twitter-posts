import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה NoSQL?'

export const dataNosql: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא SQL אחד', `**NoSQL** — Not Only SQL — **משפחה** — document, key-value, graph, column.`),
    seriesPost(2, SERIES, 'Document', `MongoDB — JSON-like — **גמיש** — **סכמה** משתנה — **סטארטאפים**.`),
    seriesPost(3, SERIES, 'Key-Value', `Redis — **מהיר** — cache, session — **לא** שאילתות מורכבות.`),
    seriesPost(4, SERIES, 'Column', `Cassandra — **scale** כתיבה — **לוגים**, IoT — **wide**.`),
    seriesPost(5, SERIES, 'Graph', `Neo4j — **קשרים** — חברים, הונאה — **לא** JOIN כבד.`),
    seriesPost(6, SERIES, 'מתי', `גמישות, scale אופקי, **לא** כל משימה transaction — **בוחרים** לפי שאלה.`),
    seriesPost(7, SERIES, 'CAP', `Consistency, Availability, Partition — **trade-off** — **לא** שלושתם תמיד.`),
    seriesPost(8, SERIES, 'Eventual consistency', `מאוחר יותר **מתאים** — **לא** מיידי — **סוציאל** לפעמים OK.`),
    seriesPost(9, SERIES, 'Polyglot persistence', `SQL + Redis + Elasticsearch — **כל אחד** למה שטוב — **ארכיטקטורה**.`),
    seriesPost(10, SERIES, 'סיכום', `**NoSQL = מגוון מנועים לדאטה שלא מתאים לטבלה אחת קשיחה.**

לא **מודרני יותר** — **שונה**.`),
  ],
}
