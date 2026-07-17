import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה event-driven architecture?'

export const realtimeEventDriven: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'אירוע במקום פקודה', `לא “עדכן DB” ישיר — **מפרסמים** OrderCreated — **מאזינים** מגיבים — **רופף**.`),
    seriesPost(2, SERIES, 'Producer Consumer', `שירות A **שולח** ל-Kafka — B, C **קוראים** — **מקביל** — **scale**.`),
    seriesPost(3, SERIES, 'מול request-response', `HTTP סינכרוני — **מחכה** — אירוע — **ממשיך** — **לא חוסם** — **resilience**.`),
    seriesPost(4, SERIES, 'Topics ו-partitions', `order-events — **מחולק** — סדר **בתוך** מפתח — **סדר גלובלי** לא תמיד.`),
    seriesPost(5, SERIES, 'At-least-once', `אולי **כפול** — **idempotent** consumer — **עיצוב** קריטי.`),
    seriesPost(6, SERIES, 'CQRS', `כתיבה **נפרדת** מקריאה — אירועים **בונים** view — **read model** מהיר.`),
    seriesPost(7, SERIES, 'Saga', `הזמנה — תשלום — משלוח — **צעדים** — כשל — **פיצוי** אירוע — **לא** transaction אחד.`),
    seriesPost(8, SERIES, 'Serverless events', `S3 upload → Lambda — **טריגר** — **אין** שרת תמיד דולק.`),
    seriesPost(9, SERIES, 'מורכבות', `debug קשה — **tracing** — **correlation id** — **חובה**.`),
    seriesPost(10, SERIES, 'סיכום', `**Event-driven = מפרסמים אירועים, שירותים מגיבים, תורים ביניהם.**

מתאים ל**scale, זמן אמת רך, מיקרו-שירותים**.`),
  ],
}
