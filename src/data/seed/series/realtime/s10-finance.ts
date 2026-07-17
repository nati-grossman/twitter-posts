import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מערכות פיננסיות עובדות בזמן אמת?'

export const realtimeFinance: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מילי-שניות שוות כסף', `בורסה — **latency** — מיקום שרת **ליד** הבורסה — **HFT** — **פיזיקה + כסף**.`),
    seriesPost(2, SERIES, 'Matching engine', `קונה 100 — מוכר 100 — **התאמה** — **מיליונים** בשנייה — **בזיכרון** — לא Excel.`),
    seriesPost(3, SERIES, 'ACID קריטי', `יתרה **לא** שלילית — **transaction** — **לא** race — **נעילה** או **סידור**.`),
    seriesPost(4, SERIES, 'Double-entry', `כל שקל **שני צדדים** — **עקביות** — **ביקורת** — בנקים.`),
    seriesPost(5, SERIES, 'Real-time fraud', `כל עסקה — **מודל** — חוסם — **milliseconds** — **false positive** מטופל.`),
    seriesPost(6, SERIES, 'תשלומי כרטיס', `אישור **סינכרוני** ללקוח — clearing **אחר כך** — **שכבות** זמן.`),
    seriesPost(7, SERIES, 'Blockchain', `בלוק כל X שניות — **“זמן אמת”** איטי יותר — **סופיות** אחרי confirmations.`),
    seriesPost(8, SERIES, 'Streaming מחירים', `WebSocket בורסה — **tick** מניה — **גרפים** — **לא** רענון דף.`),
    seriesPost(9, SERIES, 'רגולציה', `לוג **בלתי ניתן לשינוי** — **דיווח** — **זמן** משפטי — לא רק טכני.`),
    seriesPost(10, SERIES, 'סיכום', `**פיננסים בזמן אמת = matching מהיר + עקביות מוחלטת + הונאה + רגולציה.**

**נכון** חשוב מ**מהיר** — אבל **שניהם**.`),
  ],
}
