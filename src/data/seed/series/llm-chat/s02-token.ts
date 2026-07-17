import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה token?'

export const llmChatToken: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'יחידת חיוב', `**Token** — לא בהכרח מילה — **חתיכה** — API **גובה** לפי טוקנים.`),
    seriesPost(2, SERIES, 'BPE', `Byte Pair Encoding — **נפוץ** — “un” + “believable” — **מילון** 50K–200K.`),
    seriesPost(3, SERIES, 'עברית', `יותר טוקנים **למילה** לעיתים — **יקר** יחסית — **אותיות** נפרדות.`),
    seriesPost(4, SERIES, 'מספרים', `ID — 45231 → embedding — **פנימי** — לא רואים ב-UI.`),
    seriesPost(5, SERIES, 'קלט ופלט', `פרומפט + תשובה — **שניהם** נספרים — **מגבלת** חלון.`),
    seriesPost(6, SERIES, 'Special tokens', `טוקן סיום, תחילת הודעה — **מבנה** שיחה — **תבניות** כמו ChatML.`),
    seriesPost(7, SERIES, 'אורך משוער', `1 token ≈ 4 תווים אנגלית — **הערכה** — לא חוק ברזל.`),
    seriesPost(8, SERIES, 'Tokenizer mismatch', `מודל אחר — **tokenizer** אחר — **שובר** — לא להחליף בלי בדיקה.`),
    seriesPost(9, SERIES, 'אבטחה', `Injection בטוקנים — **הפרדה** system/user — **תבניות**.`),
    seriesPost(10, SERIES, 'סיכום', `**Token = יחידת טקסט שהמודל רואה — קובע עלות, אורך, גבולות.**

לפני “מילה” — **תמיד** tokenize.`),
  ],
}
