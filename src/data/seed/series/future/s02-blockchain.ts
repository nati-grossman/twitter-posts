import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה בלוקצ׳יין (ברמה בסיסית)?'

export const futureBlockchain: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'ספר מחשב משותף', `**Blockchain** — רשימת **בלוקים** — כל בלוק **חותמת** על הקודם — **קשה** לשנות היסטוריה.`),
    seriesPost(2, SERIES, 'מבוזר', `אלפי צמתים — **עותק** של ה-ledger — **consensus** — **מי מוסיף** בלוק הבא.`),
    seriesPost(3, SERIES, 'Hash', `חותמת קריפטוגרפית — **שינוי קטן** → hash אחר — **שרשרת**.`),
    seriesPost(4, SERIES, 'Immutable', `לא “מחק” — **רק** הוסף — **שקיפות** — **פרטיות** לפעמים הפוכה.`),
    seriesPost(5, SERIES, 'Public vs Private', `ביטקוין — **ציבורי**. בנקים — **chain פרטי** — **הרשאות**.`),
    seriesPost(6, SERIES, 'Gas', `עמלה לבלוק — **מי משלם** למיינרים/validators — **עלות** פעולה.`),
    seriesPost(7, SERIES, 'לא רק מטבע', `NFT, זהות, לוגים — **state** משותף — **אפליקציה** אחת.`),
    seriesPost(8, SERIES, '51% attack', `רוב כוח — **שינוי** תיאורטי — **יקר** ב-chain גדול.`),
    seriesPost(9, SERIES, 'אנרגיה', `Proof of Work — **צריכה** — Proof of Stake — **פחות** — **מחלוקת**.`),
    seriesPost(10, SERIES, 'סיכום', `**בלוקצ׳יין = ledger משותף, append-only, מאומת ברשת — לא DB רגיל.**

מתאים כש**אמון** יקר בין צדדים.`),
  ],
}
