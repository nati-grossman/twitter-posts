import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך פרסומות מותאמות אישית עובדות?'

export const persAdsPersonal: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מטרה', `להציג **מודעה** שתלחץ **למי** שסביר — **פחות** בזבוז — **יותר** כסף למפרסם.`),
    seriesPost(2, SERIES, 'Auction', `מכירה פומבית — **RTB** — **מיליונית** בשנייה — **הכי גבוה** מנצח.`),
    seriesPost(3, SERIES, 'Audience', `“גברים 25–34 אוהבי גיימינג” — **קהל** מוגדר — **דאטה** מפלטפורמות.`),
    seriesPost(4, SERIES, 'Retargeting', `הסתכלת על נעל — **עוקבת** — **cookie** — **מוכר** יותר.`),
    seriesPost(5, SERIES, 'Lookalike', `לקוחות טובים — **מצא** דומים — **Facebook** — **הרחבה**.`),
    seriesPost(6, SERIES, 'Contextual', `מודעה **בלי** פרופיל — לפי **תוכן** דף — **פרטיות** יותר — **חוזר**.`),
    seriesPost(7, SERIES, 'Creative', `וариאנטים — **A/B** — **תמונה** שמנצחת — **אוטומציה**.`),
    seriesPost(8, SERIES, 'מדידה', `המרה — **pixel** — **ROI** — **שקיפות** למפרסם.`),
    seriesPost(9, SERIES, 'רגולציה', `GDPR — **ללא** מעקב ללא הסכמה — **שינוי** iOS — **פחות** מדויק.`),
    seriesPost(10, SERIES, 'סיכום', `**פרסום מותאם = קהל + מכירה + retargeting + מדידה — דאטה מההתנהגות שלך.**

**אתה** לא הלקוח — **המוצר** לפלטפורמה.`),
  ],
}
