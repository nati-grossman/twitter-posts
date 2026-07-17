import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מסננים דאטה לאימון?'

export const trainRealFilterData: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'למה', `אינטרנט = **זבל** + **זהב** — **סינון** לפני **GPU** — **חובה**.`),
    seriesPost(2, SERIES, 'היוריסטיקות', `אורך, שפה, **entropy** — **זול** — **מיליונים** ביום.`),
    seriesPost(3, SERIES, 'מסנני תוכן', `גסות, אלימות, מין — **מודלים** קטנים — **סיווג** — **הסרה**.`),
    seriesPost(4, SERIES, 'dedup', `MinHash, SimHash — **כפילויות** — **Near-dup** — **חיסכון**.`),
    seriesPost(5, SERIES, 'PII', `מייל, ת.ז. — **regex** + **NER** — **מחיקה** — **אנונימיזציה**.`),
    seriesPost(6, SERIES, 'רעילות', `שנאה, הוראות פגיעה — **רשימות** + **מודל** — **אפס** סובלנות לפעמים.`),
    seriesPost(7, SERIES, 'איכות שפה', `גיבריש, spam — **perplexity** גבוה — **זריקה**.`),
    seriesPost(8, SERIES, 'מדגם', `לא הכל — **משקל** לפי מקור — **Wikipedia** יותר — **פורום** פחות.`),
    seriesPost(9, SERIES, 'אנושי', `דגימה **ידנית** — **בדיקה** — **5%** מספיק לתפוס **דפוס**.`),
    seriesPost(10, SERIES, 'סיכום', `**סינון = צינורות אוטומטיים + מודלים קטנים + בדיקה אנושית — לפני אימון.**

Garbage in — **garbage model**.`),
  ],
}
