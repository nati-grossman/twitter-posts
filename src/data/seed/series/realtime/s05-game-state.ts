import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך משחקים אונליין מעבירים מצב משחק?'

export const realtimeGameState: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מצב משחק', `מיקום, HP, כדור — **מספרים** — **עשרות פעמים בשנייה** — **UDP** לעיתים — **לא** TCP כבד.`),
    seriesPost(2, SERIES, 'Client prediction', `הזזת — **מציגים מיד** — שרת **מתקן** — **לא מרגישים lag**.`),
    seriesPost(3, SERIES, 'Server authoritative', `השרת **מחליט** פגיעה — לקוח **לא** — **anti-cheat** — “לא הרגתי” = **שרת צודק**.`),
    seriesPost(4, SERIES, 'Snapshot', `כל 50ms — **תמונת מצב** — שולחים **דלתא** — לא הכל מחדש.`),
    seriesPost(5, SERIES, 'Interpolation', `מקבלים 10 ו-12 — **מחליקים** ביניהם — **חלק** על המסך.`),
    seriesPost(6, SERIES, 'Lag compensation', `“איפה היית כשירית” — **rewind** — **הוגן** למי עם ping גבוה.`),
    seriesPost(7, SERIES, 'Interest management', `שולחים רק מה **קרוב** — **לא** כל המפה — **חוסך bandwidth**.`),
    seriesPost(8, SERIES, 'Dedicated server', `לא P2P — **שרת** במרכז — FPS תחרותי — **פחות רמאות**.`),
    seriesPost(9, SERIES, 'MMO', `אלפי שחקנים — **sharding** — אזורים — **לא** כולם באותו process.`),
    seriesPost(10, SERIES, 'סיכום', `**מצב משחק = עדכונים תכופים + שרת סמכותי + חיזוי + תיקון lag.**

משחק = **הנדסת latency** — לא רק גרפיקה.`),
  ],
}
