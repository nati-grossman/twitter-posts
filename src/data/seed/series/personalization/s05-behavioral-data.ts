import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה behavioral data?'

export const persBehavioralData: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'התנהגות כדאטה', `**Behavioral data** — **מה עשית** — לא שם — **אירועים** — click, scroll, pause.`),
    seriesPost(2, SERIES, 'Event stream', `session_start — video_play — **timestamp** — **רצף** — **לוג**.`),
    seriesPost(3, SERIES, 'מול declarative', `אמרת “אוהב ספורט” — **הצהרה**. צפית במשחק — **התנהגות** — **חזק** יותר לרוב.`),
    seriesPost(4, SERIES, 'Features', `ממוצע זמן — **תדירות** — **מאפיינים** למודל — **מספרים**.`),
    seriesPost(5, SERIES, 'Session', `נכנסת 20:00 — יצאת 21:30 — **אורך** — **עומק** ביקור.`),
    seriesPost(6, SERIES, 'Funnel', `עגלה — **נטש** — **איפה** נפל — **שיפור** מוצר.`),
    seriesPost(7, SERIES, 'אנונימי?', `לעיתים **ללא** שם — **cookie id** — **עדיין** פרופיל — **לא** אנונימי אמיתי.`),
    seriesPost(8, SERIES, 'רגישות', `בריאות, מין מוסק — **קטגוריות** מיוחדות — **הגבלות** חוק.`),
    seriesPost(9, SERIES, 'Retention', `חברות **שומרות** שנים — **פרופיל** מתבגר — **שינוי**?`),
    seriesPost(10, SERIES, 'סיכום', `**Behavioral data = לוג אירועים של פעולותיך — דלק למלצות ומוצר.**

אתה **מייצר** בכל שימוש.`),
  ],
}
