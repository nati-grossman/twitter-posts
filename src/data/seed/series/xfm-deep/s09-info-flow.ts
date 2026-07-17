import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מידע זורם בתוך מודל?'

export const xfmDeepInfoFlow: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'כניסה', `טקסט → tokens → **embedding** + **position** — **טנסור** [batch, seq, dim].`),
    seriesPost(2, SERIES, 'למעלה', `שכבה 1 → 2 → … → L — **כל** טוקן **מתעדכן** — **זרימה** אנכית.`),
    seriesPost(3, SERIES, 'רוחב', `בכל שכבה — Attention **מעביר** מידע **בין** טוקנים — **רוחב**.`),
    seriesPost(4, SERIES, 'Residual highway', `מידע ישן **נשמר** ב-skip — **לא** נמחק — **שילוב**.`),
    seriesPost(5, SERIES, 'פלט', `שכבה אחרונה → **logits** — **טוקן הבא** — **לולאה** חיצונית.`),
    seriesPost(6, SERIES, 'KV cache', `ב-inference — **לא** מחשבים שכבות קודמות מחדש — **זרימה** מהירה.`),
    seriesPost(7, SERIES, 'Gradient באימון', `אחורה — **כל** שכבה — **מעדכן** weights — **זרימה** הפוכה.`),
    seriesPost(8, SERIES, 'Bottleneck', `dim קבוע — **דחיסה** — **FFN** מרחיב זמנית — **מסחר**.`),
    seriesPost(9, SERIES, 'Information mixing', `שכבה אחרונה — **כל** טוקן **“יודע”** הרבה — **לא** מבודד.`),
    seriesPost(10, SERIES, 'סיכום', `**זרימה = למטה למעלה בשכבות + לרוחב ב-Attention + skip connections.**

מילה אחת — **עוברת** דרך **מאות** פעולות.`),
  ],
}
