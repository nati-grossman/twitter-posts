import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה async programming?'

export const perfAsync: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא חוסם', `**Async** — מתחיל משימה — **ממשיך** — **מקבל** תוצאה אחר כך — **לא** מחכה.`),
    seriesPost(2, SERIES, 'מול sync', `Sync — קורא DB — **תקוע** — **אף** בקשה אחרת **מחכה** — **בottleneck**.`),
    seriesPost(3, SERIES, 'I/O bound', `רשת, דיסק — **רוב** ההמתנה — **async** מנצח — **CPU** פנוי.`),
    seriesPost(4, SERIES, 'Callbacks ישנים', `callback hell — **קשה** — **נדיר** היום.`),
    seriesPost(5, SERIES, 'Promises', `then/catch — **שרשרת** — **async/await** — **קריא**.`),
    seriesPost(6, SERIES, 'Node.js', `event loop — **אסינכרוני** — **thread אחד** — **I/O** רב — **לא** CPU כבד.`),
    seriesPost(7, SERIES, 'Frontend', `fetch — **לא** קופא UI — **spinner** — **UX**.`),
    seriesPost(8, SERIES, 'טעויות', `שוכחים await — **race** — **באג** — **lint**.`),
    seriesPost(9, SERIES, 'לא קסם', `CPU כבד — **async לא עוזר** — **threads** — **workers**.`),
    seriesPost(10, SERIES, 'סיכום', `**Async = לא לחסום thread בזמן I/O — יותר בקשות במקביל על אותו שרת.**

await = **סוכר** קריא אבל **עדיין** async.`),
  ],
}
