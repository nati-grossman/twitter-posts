import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה queue?'

export const perfQueue: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'תור', `**Queue** — משימה נכנסת — **worker** מוציא — **FIFO** לרוב — **סדר**.`),
    seriesPost(2, SERIES, 'למה', `שולחים מייל — **לא** מחכים 3 שניות — **תשובה מיידית** — worker שולח.`),
    seriesPost(3, SERIES, 'Kafka', `מיליונים הודעות — **persistent** — **consumers** רבים — **log**.`),
    seriesPost(4, SERIES, 'RabbitMQ', `תורים קלאסיים — **routing** — **אמין** — **מורכב**.`),
    seriesPost(5, SERIES, 'Backpressure', `תור מלא — **מאטים** יצרנים — **לא** קריסה — **זרימה**.`),
    seriesPost(6, SERIES, 'Retry', `נכשל — **ניסיון** — **dead letter** — **לא** אבוד.`),
    seriesPost(7, SERIES, 'Priority', `משימה דחופה — **קדימה** — **לא** רק FIFO.`),
    seriesPost(8, SERIES, 'מול sync', `בלי תור — **שרת** תקוע — **timeout** — **כולם** סובלים.`),
    seriesPost(9, SERIES, 'Monitoring', `אורך תור — **alert** — **צוואר בקבוק** — **scale workers**.`),
    seriesPost(10, SERIES, 'סיכום', `**Queue = מפריד בין “קבל בקשה” ל“עבד כבד” — עמידות ו-scale.**

בסיס **מערכות מודרניות**.`),
  ],
}
