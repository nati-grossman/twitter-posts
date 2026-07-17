import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה latency ב-AI?'

export const aiProdLatency: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**Latency** — **זמן** עד תשובה — **שניות** — **לא** מילישניות כמו DB פשוט.`),
    seriesPost(2, SERIES, 'TTFT', `Time To First Token — **עד** מילה ראשונה — **הכי** מורגש — **סטרימינג**.`),
    seriesPost(3, SERIES, 'TPOT', `זמן **לטוקן** — **שאר** המשפט — **אורך** תשובה — **גדל**.`),
    seriesPost(4, SERIES, 'רשת', `ישראל → US — **RTT** — **CDN** — **אזור** קרוב — **חוסך**.`),
    seriesPost(5, SERIES, 'תור', `עומס — **מחכים** — **429** — **לא** רק GPU — **capacity**.`),
    seriesPost(6, SERIES, 'אורך', `פרומפט **ענק** — **איטי** — **Attention** — **חיתוך**.`),
    seriesPost(7, SERIES, 'מודל', `GPT-4 **איטי** — **mini** מהיר — **tradeoff** — **מוצר**.`),
    seriesPost(8, SERIES, 'Cold', `שרת **קר** — **+שניות** — **warm pool** — **SLA**.`),
    seriesPost(9, SERIES, 'UX', `סטרימינג — **מרגיש** מהיר — **ספינר** — **ציפייה** — **תכנון**.`),
    seriesPost(10, SERIES, 'סיכום', `**Latency ב-AI = TTFT + טוקנים × זמן + רשת + תור — לא “כמו חיפוש גוגל”.**

מוצר **חייב** לתכנן **סבלנות** או **סטרימינג**.`),
  ],
}
