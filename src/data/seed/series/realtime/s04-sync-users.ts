import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך נוצרת סינכרוניזציה בין משתמשים?'

export const realtimeSyncUsers: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מקור אמת אחד', `מסמך Google — **שרת** מחזיק גרסה — כולם **רואים** עדכון — **לא** שני “אמת”.`),
    seriesPost(2, SERIES, 'Operational Transform', `OT — כל עריכה = **פעולה** — merge **מתמטי** — Figma, Google Docs — **CRDT** משפחה.`),
    seriesPost(3, SERIES, 'Timestamps', `מי שינה **מתי** — **שעון** — **בעיה**: שעונים לא מסונכרנים — **logical clock**.`),
    seriesPost(4, SERIES, 'Conflict', `שניים ערכו — **מיזוג** או “של יוסי מנצח” — **מדיניות** מוגדרת.`),
    seriesPost(5, SERIES, 'Presence', `“דני מקליד…” — **heartbeat** — **מי בחדר** — Redis / WebSocket.`),
    seriesPost(6, SERIES, 'Optimistic UI', `מציגים **מיד** — שולחים לשרת — **אם נכשל** — חוזרים — **מרגיש** מיידי.`),
    seriesPost(7, SERIES, 'Event ordering', `הודעות **בסדר** — מספר סידורי — **לא** 3 לפני 2 — **queue** per channel.`),
    seriesPost(8, SERIES, 'Offline', `עריכה בלי רשת — **תור מקומי** — חוזר — **sync** — **מתמרץ**.`),
    seriesPost(9, SERIES, 'שעון שרת', `זמן אחיד — **NTP** — אירועים **מסודרים** — בורסה, לוגים.`),
    seriesPost(10, SERIES, 'סיכום', `**סינכרון = מקור אמת + פעולות/שעונים + מיזוג קונפליקטים + סדר אירועים.**

זמן אמת **לא** = כולם באותה מילי-שנייה — **עקביות מורגשת**.`),
  ],
}
