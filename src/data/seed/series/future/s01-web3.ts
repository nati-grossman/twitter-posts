import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה Web3?'

export const futureWeb3: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הבטחה בקצרה', `**Web3** — אינטרנט שבו **משתמשים** מחזיקים נכסים וזהות — **לא** רק פלטפורמות — **בלוקצ׳יין** מאחורי.`),
    seriesPost(2, SERIES, 'Web1 Web2', `Web1 — קריאה. Web2 — יצירה + **פלטפורמות** (פייסבוק). Web3 — **בעלות** — **טוקן**, NFT — **מחלוקת** אם מומש.`),
    seriesPost(3, SERIES, 'Wallet', `ארנק קריפטו — **מפתח** — **לא** סיסמה לשרת — **אתה** שומר — **אבוד = אבוד**.`),
    seriesPost(4, SERIES, 'dApp', `אפליקציה מבוזרת — **חוזה** על chain — **UI** בדפדפן — **לא** DB מרכזי.`),
    seriesPost(5, SERIES, 'מגבלות', `איטי, יקר, UX גרוע — **סקאמים** — **רגולציה** — **לא** החליף Web2.`),
    seriesPost(6, SERIES, 'Token', `מטבע או utility — **כלכלה** — **ספקולציה** — **לא** תמיד utility אמיתי.`),
    seriesPost(7, SERIES, 'DAO', `ארגון ללא מנכ״ל — **הצבעה** on-chain — **ניסוי** — **משפטי** מעורפל.`),
    seriesPost(8, SERIES, 'מיתוס', `“לא יהיו חברות” — **עדיין** infra מרוכז — **RPC** — **חנויות**.`),
    seriesPost(9, SERIES, 'שימושים אמיתיים', `העברות, נדירות דיגיטלית, **שקיפות** supply chain — **לא** רק JPEG.`),
    seriesPost(10, SERIES, 'סיכום', `**Web3 = רעיון לאינטרנט עם בעלות on-chain — טכנולוגיה קיימת, אימוץ חלקי.**

לא **קסם** — **trade-offs** ברורים.`),
  ],
}
