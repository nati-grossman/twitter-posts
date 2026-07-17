import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך AI מתוחזק בזמן אמת?'

export const aiProdRealtimeOps: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, '24/7', `מוצר **לא** נרדם — **on-call** — **incident** — **כמו** בנק.`),
    seriesPost(2, SERIES, 'מוניטור', `latency, error rate, GPU util — **Grafana** — **התראות** — **PagerDuty**.`),
    seriesPost(3, SERIES, 'לוגים', `בקשות — **לא** תוכן רגיש בלוג — **מטא** — **דיבוג**.`),
    seriesPost(4, SERIES, 'גרסאות', `מודל חדש — **canary** 1% — **מדידה** — **הרחבה** — **rollback**.`),
    seriesPost(5, SERIES, 'Abuse', `ספאם, jailbreak — **זיהוי** — **חסימה** — **עדכון** מסננים — **יומי**.`),
    seriesPost(6, SERIES, 'עומס', `Black Friday — **auto-scale** — **תורים** — **הודעה** למשתמש.`),
    seriesPost(7, SERIES, 'בטיחות', `תוכן פוגעני — **מדיניות** — **עדכון** RLHF — **לא** static.`),
    seriesPost(8, SERIES, 'עלות live', `dashboard **$/שעה** — **כיבוי** replicas — **FinOps**.`),
    seriesPost(9, SERIES, 'תאימות', `GDPR, מחיקה — **תהליכים** — **לא** רק קוד — **משפט**.`),
    seriesPost(10, SERIES, 'סיכום', `**תחזוקה בזמן אמת = ניטור + deploy הדרגתי + נגד שימוש לרעה + scale — מוצר חי.**

מאחורי הקלעים — **צוותים** — **לא** רק מודל.`),
  ],
}
