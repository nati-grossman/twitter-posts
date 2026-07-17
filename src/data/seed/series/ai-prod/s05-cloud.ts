import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל רץ בענן?'

export const aiProdCloud: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'קלאסטר', `**אלפי** GPU — **דאטה-סנטר** — **חשמל** — **קירור** — **לא** לפטופ.`),
    seriesPost(2, SERIES, 'Kubernetes', `Pods — **תורים** — **scale** — **SRE** — **כמו** כל ענן.`),
    seriesPost(3, SERIES, 'מודל בזיכרון', `weights על **GPU** — **טעינה** דקות — **נשאר** — **warm**.`),
    seriesPost(4, SERIES, 'Load balancer', `בקשות → **שרת** פנוי — **גיאוגרפיה** — **קרוב** למשתמש.`),
    seriesPost(5, SERIES, 'Multi-tenant', `אלפי לקוחות — **אותו** מודל — **בידוד** — **מגבלות** — **fairness**.`),
    seriesPost(6, SERIES, 'אזורים', `US, EU — **רגולציה** — **נתונים** — **latency**.`),
    seriesPost(7, SERIES, 'כשל', `GPU מת — **failover** — **replica** — **זמינות** 99.9%.`),
    seriesPost(8, SERIES, 'עלות ענן', `שעת GPU — **דולרים** — **utilization** — **ריק** = **בזבוז**.`),
    seriesPost(9, SERIES, 'Private cloud', `בנקים — **on-prem** — **שליטה** — **יקר** — **אותו** stack.`),
    seriesPost(10, SERIES, 'סיכום', `**מודל בענן = GPU clusters + orchestration + balancing + תחזוקה 24/7.**

ChatGPT **רץ** שם — **לא** במכשיר שלך.`),
  ],
}
