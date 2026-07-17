import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מאזנים עומסים בזמן אמת?'

export const perfLoadBalanceRealtime: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'Load Balancer', `**LB** — מפזר בקשות — **round robin**, **least connections** — **שקוף**.`),
    seriesPost(2, SERIES, 'Auto scaling', `CPU גבוה — **מוסיף** VM — **יורד** — **אוטומטי** — **Kubernetes HPA**.`),
    seriesPost(3, SERIES, 'Health', `שרת מת — **מוציא** — **לא** שולח אליו — **שניות**.`),
    seriesPost(4, SERIES, 'Sticky session', `אותו משתמש לאותו שרת — **websocket** — **פחות** stateless.`),
    seriesPost(5, SERIES, 'Global', `משתמש בברזיל — **region** קרוב — **latency** — **Geo DNS**.`),
    seriesPost(6, SERIES, 'Rate limit', `מגן **מפני** spike — **חלק** מאיזון — **429**.`),
    seriesPost(7, SERIES, 'Circuit breaker', `שירות B נפל — **מפסיקים** קריאה — **fallback** — **לא** קריסה שרשרת.`),
    seriesPost(8, SERIES, 'Real-time', `גיימינג, בורסה — **מילי-שניות** — **edge** — **לא** רק LB מרכזי.`),
    seriesPost(9, SERIES, 'Metrics', `Prometheus — **גרפים** — **לפני** שהמשתמשים צועקים.`),
    seriesPost(10, SERIES, 'סיכום', `**איזון בזמן אמת = LB + auto-scale + health + הגבלות + ניטור.**

**דינמי** — לא טבלה **קבועה**.`),
  ],
}
