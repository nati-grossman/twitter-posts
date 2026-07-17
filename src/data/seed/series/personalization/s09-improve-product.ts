import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך חברות משפרות מוצרים לפי משתמשים?'

export const persImproveProduct: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לולאת משוב', `משתמשים → **דאטה** → **תובנות** → **שינוי** → **משתמשים** — **חוזר**.`),
    seriesPost(2, SERIES, 'Analytics', `Mixpanel, Amplitude — **משפכים** — **איפה** נושרים — **תיקון**.`),
    seriesPost(3, SERIES, 'סקרים + דאטה', `“למה עזבת?” — **איכותי** + **כמותי** — **יחד**.`),
    seriesPost(4, SERIES, 'Cohort', `משתמשים מינואר — **השוואה** לפברואר — **גרסה** — **שיפור**?`),
    seriesPost(5, SERIES, 'NPS', `המלצה — **מספר** — **לא** הכל — **מגמה**.`),
    seriesPost(6, SERIES, 'Personalization rollout', `המלצה חדשה — **5%** — **מדדים** — **100%** — **זהיר**.`),
    seriesPost(7, SERIES, 'Dark patterns', `שיפור **מטריקה** — **פגיעה** ב-user — **אתיקה** — **רגולציה**.`),
    seriesPost(8, SERIES, 'Support tickets', `באגים חוזרים — **סיגנל** — **עדיפות** — **roadmap**.`),
    seriesPost(9, SERIES, 'Competitors', `טיקטוק למד — **יוטיוב** — **חיקוי** — **למידה** שוק.`),
    seriesPost(10, SERIES, 'סיכום', `**שיפור מוצר = דאטה התנהגות + ניסויים + משוב — לא אינטואיציה בלבד.**

**אתה** משתתף — **בלי** לדעת לעיתים.`),
  ],
}
