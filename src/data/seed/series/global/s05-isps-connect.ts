import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך ספקי אינטרנט מתחברים אחד לשני?'

export const globalIspsConnect: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שכבות', `אתה → **ISP מקומי** (Bezeq, HOT…) → **בינלאומי** → **Tier 1** — **סולם** — כולם **מחוברים**.`),
    seriesPost(2, SERIES, 'Tier 1', `**לא קונים** transit — **רק peering** ביניהם — **עמוד השדרה** — מעט שמות ענקיים.`),
    seriesPost(3, SERIES, 'Tier 2/3', `קונים מעבר **למעלה** — מוכרים **למטה** — **היררכיה כלכלית**.`),
    seriesPost(4, SERIES, 'IXP', `במקום לשלם transit — **נפגשים פיזית** — **מחליפים** תעבורה — **זול יותר** למקומי.`),
    seriesPost(5, SERIES, 'כבל ימי לספק', `ספק מקומי **מחובר** ל-landing — **קיבולת** — **מגביל** מהירות בינלאומית.`),
    seriesPost(6, SERIES, 'מסלול בחירה', `BGP **בוחר** — לפעמים **ארוך** כי **זול** — **latency** לא תמיד מינימלי.`),
    seriesPost(7, SERIES, 'CDN עוקף חלק', `Netflix — **שרת בתוך הארץ** — **פחות** תלות ב-transit לסטרימינג.`),
    seriesPost(8, SERIES, 'חסימות בין ספקים', `מחלוקת peering — **איטיות** בין רשתות — **פוליטיקה עסקית** — לא רק טכני.`),
    seriesPost(9, SERIES, 'מובייל', `סלולר — **רשת נפרדת** — מתחברת ל**אותו** אינטרנט — **IP** — **שער** לאינטרנט.`),
    seriesPost(10, SERIES, 'סיכום', `**ספקים = שרשרת transit + peering + IXP + כבלים.**

אתה **תמיד** עובר דרך **כמה** רשתות עד גוגל.`),
  ],
}
