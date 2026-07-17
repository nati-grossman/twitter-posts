import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מידע מיוצג במחשב (0 ו-1)?'

export const dataBits: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'ביט', `**Bit** — 0 או 1 — **היחידה** — מתח חשמלי — **on/off**.`),
    seriesPost(2, SERIES, 'בייט', `8 ביטים = **byte** — אות ASCII — **256** אפשרויות — **בסיס**.`),
    seriesPost(3, SERIES, 'בינארי', `בסיס 2 — 1010 — **מספרים** — **לא** אנושי — **מחשב** כן.`),
    seriesPost(4, SERIES, 'Unicode', `עברית, אמוג’י — **UTF-8** — **משתנה** אורך — **יותר** מבייט אחד.`),
    seriesPost(5, SERIES, 'מספרים', `Integer, float — **IEEE 754** — **0.1+0.2** לא בדיוק 0.3 — **מלכוד**.`),
    seriesPost(6, SERIES, 'תמונה', `פיקסל = RGB מספרים — **מיליונים** — **דחיסה** JPEG — **פחות** ביטים.`),
    seriesPost(7, SERIES, 'שמע', `דגימות — **waveform** — MP3 — **אובד** מידע — **lossy**.`),
    seriesPost(8, SERIES, 'Hex', `0xFF — **קריא** לבני אדם — **דיבוג** — **לא** שונה מהבסיס.`),
    seriesPost(9, SERIES, 'Big Endian', `סדר ביטים — **רשת** — **סטנדרט** — **נדיר** לדאגה יומיומית.`),
    seriesPost(10, SERIES, 'סיכום', `**הכל 0 ו-1 → בייטים → מספרים/טקסט/מדיה לפי פורמט.**

פורמט = **איך** מפרשים את הביטים.`),
  ],
}
