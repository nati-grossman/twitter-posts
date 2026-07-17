import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך ChatGPT עובד כמערכת שלמה?'

export const aiProdChatgptSystem: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא רק מודל', `**ChatGPT** = מודל + **API** + **מסננים** + **חשבון** + **לוגים** — **מערכת**.`),
    seriesPost(2, SERIES, 'זרימה', `משתמש → **אפליקציה** → **שרת** → **GPU** → **טוקנים** → **סטרימינג** חזרה.`),
    seriesPost(3, SERIES, 'System prompt', `הוראות **פנימיות** — **מסגרת** — **לפני** השיחה — **לא** רואים הכל.`),
    seriesPost(4, SERIES, 'Moderation', `קלט/פלט — **סינון** — **חסימה** — **שכבה** — **לא** weights.`),
    seriesPost(5, SERIES, 'Tools', `חיפוש, קוד, DALL·E — **אורקסטרציה** — **קריאות** חיצוניות — **לולאה**.`),
    seriesPost(6, SERIES, 'זיכרון מוצר', `היסטוריה, **סיכום** — **DB** — **לא** במודל — **שירות**.`),
    seriesPost(7, SERIES, 'גרסאות', `GPT-4o, mini — **routing** — **עלות** vs **איכות** — **אוטומטי** לפעמים.`),
    seriesPost(8, SERIES, 'Rate limit', `מגבלות **דקה** — **מניעת** הצפה — **תורים** — **429**.`),
    seriesPost(9, SERIES, 'תשתית', `Azure, קלאסטרים — **אלפי** GPU — **SRE** — **24/7**.`),
    seriesPost(10, SERIES, 'סיכום', `**ChatGPT = מוצר: מודל + אבטחה + כלים + תשתית + UX — לא “קובץ מודל” בלבד.**

מה שאתה רואה — **שכבות**.`),
  ],
}
