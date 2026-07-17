import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך ייראו אפליקציות בעוד 10 שנים?'

export const futureApps10Years: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'פחות אייקונים', `**שיחה** עם OS — “פתח X” — **לא** 50 אפליקציות — **סוכן מרכזי**.`),
    seriesPost(2, SERIES, 'היפר-אישי', `ממשק **לפי** הרגע — **לא** אותו home — **AI** מרכיב.`),
    seriesPost(3, SERIES, 'AR משולב', `מידע על **עולם** — משקפיים — **שכבה** — **לא** רק מסך.`),
    seriesPost(4, SERIES, 'פחות התקנה', `PWA + streaming app — **ניסיון** בלי store — **עדכון** שקוף.`),
    seriesPost(5, SERIES, 'קול וטבעי', `דיבור **ראשי** — **מיוחד** — **נגישות** — **רב-לשוני**.`),
    seriesPost(6, SERIES, 'פרטיות מובנית', `on-device AI — **מינימום** ענן — **הגדרות** ברורות.`),
    seriesPost(7, SERIES, 'תשלום רציף', `מיקרו-subscription — **wallet** — **לא** כרטיס בכל אתר.`),
    seriesPost(8, SERIES, 'עדיין אפליקציות', `רפואה, גיימינג — **native** — **לא** הכל chat — **גיוון**.`),
    seriesPost(9, SERIES, 'פלטפורמות', `עדיין **שוק** — **רגולציה** — **לא** utopia.`),
    seriesPost(10, SERIES, 'סיכום', `**עוד 10 שנה = פחות מסכים ידניים, יותר סוכן, AR, קול — אפליקציה כחוויה דינמית.**

לא **היעלמות** — **שינוי צורה**.`),
  ],
}
