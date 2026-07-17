import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מערכות מגיבות לאירועים במקום בקשות?'

export const realtimeEventsNotRequests: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'דחיפה מול משיכה', `**Push** — שרת אומר “יש חדש”. **Pull** — לקוח שואל — **בזבוז** בזמן אמת.`),
    seriesPost(2, SERIES, 'Message broker', `RabbitMQ, Kafka — **תור** — **מפריד** יוצר מצרכן — **עמידות**.`),
    seriesPost(3, SERIES, 'Pub/Sub', `מפרסם ל-topic — **מנויים** רבים — **התראות** — **analytics** — **אותו אירוע**.`),
    seriesPost(4, SERIES, 'Webhooks', `Stripe שולח POST — **אתה** מגיב — **לא** polling כל 5 שניות.`),
    seriesPost(5, SERIES, 'Change Data Capture', `DB השתנה — **stream** — **Elasticsearch** מתעדכן — **ללא** קוד ב-app.`),
    seriesPost(6, SERIES, 'Reactive streams', `backpressure — **לא מציף** איטי — **זרימה** מבוקרת.`),
    seriesPost(7, SERIES, 'Fan-out', `אירוע אחד — **מיליון** push — **workers** — **Firebase**, **Pusher**.`),
    seriesPost(8, SERIES, 'Ordering', `תשלום לפני משלוח — **סדר** אירועים — **partition key** — user_id.`),
    seriesPost(9, SERIES, 'Dead letter queue', `נכשל 5 פעמים — **תור מתים** — **בדיקה ידנית** — **לא אבוד**.`),
    seriesPost(10, SERIES, 'סיכום', `**מגיבים לאירועים = broker + מנויים + דחיפה + סדר ו-idempotency.**

פחות “לולאת while שואלת DB” — **יותר** “משהו קרה → תגובה”.`),
  ],
}
