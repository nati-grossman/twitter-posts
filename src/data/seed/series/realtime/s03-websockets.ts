import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה WebSockets?'

export const realtimeWebsockets: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'בעיה עם HTTP רגיל', `בקשה-תשובה — **סוגר** — “יש הודעה חדשה?” כל שנייה — **בזבוז** — **איטי**.`),
    seriesPost(2, SERIES, 'מנהרה פתוחה', `**WebSocket** — handshake HTTP → **upgrade** — **ערוץ דו-כיווני** — פתוח **דקות/שעות**.`),
    seriesPost(3, SERIES, 'דחיפה מהשרת', `שרת **שולח** כשיש אירוע — לקוח **לא שואל** — צ’אט, מחיר מניה, משחק.`),
    seriesPost(4, SERIES, 'מול polling', `**Long polling** — שואל ומחכה — **פשרה** — WebSocket **יעיל יותר** לרוב.`),
    seriesPost(5, SERIES, 'wss', `WebSocket מאובטח — **TLS** — כמו HTTPS — **חובה** production.`),
    seriesPost(6, SERIES, 'scale', `מיליון חיבורים — **שרתים** עם event loop — Redis pub/sub **מפיץ** בין שרתים.`),
    seriesPost(7, SERIES, 'Socket.io', `ספרייה — **fallback** polling — **rooms** — נוח — **לא** חובה.`),
    seriesPost(8, SERIES, 'SSE', `Server-Sent Events — **רק שרת→לקוח** — HTTP — **פשוט יותר** — חדשות חיות.`),
    seriesPost(9, SERIES, 'סגירה ו-heartbeat', `ping/pong — **לזהות** חיבור מת — **reconnect** אוטומטי בלקוח.`),
    seriesPost(10, SERIES, 'סיכום', `**WebSocket = ערוץ HTTP משודרג לדו-כיווני בזמן אמת.**

בסיס ל**צ’אט, לוח מחוונים, משחקים** בדפדפן.`),
  ],
}
