import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה reinforcement learning?'

export const aiBasicsReinforcement: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'למידה מניסיון', `**RL** — **סוכן** ב**סביבה** — פעולה → **פרס** או **עונש** — **מנסה** לצבור reward.`),
    seriesPost(2, SERIES, 'לא תשובה מיידית', `שחמט — מהלך טוב **מתגלה** רק בסוף — **דחוי** — **קשה** יותר מ-supervised.`),
    seriesPost(3, SERIES, 'Policy', `אסטרטגיה — **מה לעשות** במצב — **לומדים** policy — לא רק חיזוי.`),
    seriesPost(4, SERIES, 'Exploration vs exploitation', `לנסות חדש — **או** לנצל מה שעובד — **איזון** — **bandit** בפרסומות.`),
    seriesPost(5, SERIES, 'דוגמאות', `AlphaGo, רובוטיקה, **משחקים** — **RLHF** ב-ChatGPT — **פרס** מבני אנוש.`),
    seriesPost(6, SERIES, 'Reward shaping', `פרס **מעוות** — הסוכן **מרמה** — **לא** מה שרצית — **עיצוב** זהיר.`),
    seriesPost(7, SERIES, 'Simulation', `מיליוני משחקים **מדומים** — **בטוח** — **אז** real world — **פער**.`),
    seriesPost(8, SERIES, 'RLHF בקצרה', `מודל מייצר — אנשים **מדרגים** — **reward model** — **מכוון** התנהגות — **לא** רק טקסט.`),
    seriesPost(9, SERIES, 'קשה לייצב', `אימון **לא יציב** — **hyperparams** — **פחות** בשימוש יומיומי מ-supervised.`),
    seriesPost(10, SERIES, 'סיכום', `**RL = פעולות, פרסים, למידה מניסוי — Go, רובוטים, RLHF.**

שכבה **חזקה** — **מורכבת** — לא תמיד צריך להתחיל ממנה.`),
  ],
}
