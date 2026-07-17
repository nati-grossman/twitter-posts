import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך אפליקציה נסגרת ונפתחת מהר?'

export const appsFastReopen: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא סגירה אמיתית', `יוצאים — **ברקע** — process **עדיין** — **חם** — **מהיר** לחזור.`),
    seriesPost(2, SERIES, 'Warm start', `זיכרון **קיים** — **רק** מציירים UI — **שניות** → **מילי**.`),
    seriesPost(3, SERIES, 'Snapshot', `iOS שומר **תמונה** של מסך — **מציג** מיד — **טוען** אחר כך — **אשליה**.`),
    seriesPost(4, SERIES, 'State restore', `שמרו navigation stack — **חוזרים** לאותו מקום — **לא** home.`),
    seriesPost(5, SERIES, 'Kill בזיכרון', `RAM מלא — OS **הורג** — **cold** — **איטי** — **לא בשליטתך**.`),
    seriesPost(6, SERIES, 'Lazy load', `טאבים **לא** נטענו — **רק** כשנכנסים — **פתיחה** מהירה.`),
    seriesPost(7, SERIES, 'Prefetch', `מנחשים **מה** תפתח — **טוען** מראש — **רשת** — **trade-off** סוללה.`),
    seriesPost(8, SERIES, 'קטן APK', `פחות **לטעון** — **ProGuard** — **תמונות** דחוסות — **startup**.`),
    seriesPost(9, SERIES, 'משתמש סוגר', `“סגור הכל” — **swipe** — **cold** בפעם הבאה — **נורמלי**.`),
    seriesPost(10, SERIES, 'סיכום', `**מהיר = warm process + cache + snapshot + state — OS קובע מתי להרוג.**

אופטימיזציה = **פתיחה קרה** + **חוויית חזרה**.`),
  ],
}
