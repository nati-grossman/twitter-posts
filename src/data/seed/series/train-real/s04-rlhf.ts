import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה RLHF (למידה עם משוב אנושי)?'

export const trainRealRlhf: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הבעיה', `SFT **לא** אומר מה **טוב** — רק **מה** כתוב — **איכות** סובייקטיבית.`),
    seriesPost(2, SERIES, 'RLHF', `**Reinforcement Learning from Human Feedback** — אנשים **מדרגים** תשובות — **מכוון** מודל.`),
    seriesPost(3, SERIES, 'Reward model', `מודל **נפרד** — נותן **ציון** לטקסט — **מחליף** אדם בלולאה.`),
    seriesPost(4, SERIES, 'PPO', `אלגוריתם RL — **מגדיל** פרס — **לא** להרוס שפה — **KL penalty**.`),
    seriesPost(5, SERIES, 'מדרגים', `עובדים — **הנחיות** — **עקביות** — **יקר** — **צוואר** בקבוק.`),
    seriesPost(6, SERIES, 'DPO', `חלופה — **בלי** PPO מלא — **מועדף** vs **נדחה** — **פשוט** יותר.`),
    seriesPost(7, SERIES, 'בטיחות', `פחות **גס** — **יותר** עזרה — **לא** מושלם — **jailbreak** עדיין.`),
    seriesPost(8, SERIES, 'מחלוקת', `**סנסורה**? — **יישור**? — **מי** קובע “טוב”? — **פוליטי**.`),
    seriesPost(9, SERIES, 'לא חובה', `מודלים קטנים — **SFT** בלבד — **RLHF** בדגמים **גדולים** מוצר.`),
    seriesPost(10, SERIES, 'סיכום', `**RLHF = אנשים מדרגים → reward model → RL מכוון התנהגות — “להרגיש” מועיל.**

ChatGPT **הרגשה** — חלק מזה.`),
  ],
}
