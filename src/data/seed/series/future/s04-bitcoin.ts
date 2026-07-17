import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך עובד ביטקוין (ברעיון)?'

export const futureBitcoin: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מטרה', `**כסף דיגיטלי** — **ללא** בנק מרכזי — **peer-to-peer** — **מוגבל** 21M.`),
    seriesPost(2, SERIES, 'UTXO', `לא “יתרה בחשבון” — **פלטים** שלא הוצאו — **מטבעות** כמו שטרות.`),
    seriesPost(3, SERIES, 'Transaction', `שולח → חתימה digital → **מפרסמים** לרשת — **ממתינים** בלוק.`),
    seriesPost(4, SERIES, 'Mining', `**Proof of Work** — מנחשים hash — **מתגמלים** BTC + עמלות — **אבטחה**.`),
    seriesPost(5, SERIES, 'Blocks', `כל ~10 דקות — **אישור** — **יותר** אישורים — **יותר** ביטחון.`),
    seriesPost(6, SERIES, 'Wallet address', `מפתח ציבורי → כתובת — **לא** שם — **פסאודונימי**.`),
    seriesPost(7, SERIES, 'מגבלות', `איטי — **7 TPS** — **עמלות** בתנועה — **לא** לקפה יומי לכולם.`),
    seriesPost(8, SERIES, 'Lightning', `שכבה שנייה — **מיקרו** — **ערוצים** — **מורכב** — **פתרון** scale.`),
    seriesPost(9, SERIES, 'Store of value', `דיבור — **זהב דיגיטלי** — **תנודתיות** — **לא** consensus אחיד.`),
    seriesPost(10, SERIES, 'סיכום', `**ביטקוין = ledger מבוזר + mining + חתימות — כסף בלי בנק.**

**רעיון** חזק — **UX** עדיין מתפתח.`),
  ],
}
