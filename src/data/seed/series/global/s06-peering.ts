import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה peering בין רשתות?'

export const globalPeering: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**Peering** — שתי רשתות **מחליפות** תעבורה **ישירות** — **בלי** לשלם transit לצד שלישי — **שכנים שווים** (לרוב).`),
    seriesPost(2, SERIES, 'מול Transit', `**Transit** — **קונה** מעבר — **משלם** — **כל** יעד. **Peering** — רק **מה שמחובר** ישירות.`),
    seriesPost(3, SERIES, 'Settlement-free', `**חינם הדדית** — אם **מאוזן** — תעבורה דומה — **win-win** — חוסך כסף לשניהם.`),
    seriesPost(4, SERIES, 'Paid peering', `אחד **גדול** — השני **משלם** — עדיין **ישיר** — לא דרך Tier1.`),
    seriesPost(5, SERIES, 'Public peering', `ב-IXP — **switch משותף** — עשרות רשתות — **כבל אחד** לחדר.`),
    seriesPost(6, SERIES, 'Private peering', `שני ענקים — **כבל ישיר** בין דאטה סנטרים — **קיבולת ענק** — Netflix-Google.`),
    seriesPost(7, SERIES, 'Peering policy', `“אנחנו עושים peering רק אם…” — **גודל, מיקום** — **מסמך** — לא כולם שווים.`),
    seriesPost(8, SERIES, 'למה לא תמיד', `קטן מדי — **לא מעניין** — **קונה** transit — **פשוט**.`),
    seriesPost(9, SERIES, 'השפעה על משתמש', `תעבורה מקומית ב-IXP — **מהיר וזול** — סטרימינג, גיימינג — **פחות יוצא לים**.`),
    seriesPost(10, SERIES, 'סיכום', `**Peering = חילוף ישיר בין רשתות — חיסכון, שליטה, מהירות מקומית.**

חלק מ**כלכלה** של אינטרנט — לא רק פרוטוקול.`),
  ],
}
