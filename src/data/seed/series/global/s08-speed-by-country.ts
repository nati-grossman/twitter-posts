import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה חלק מהאתרים מהירים יותר במדינות שונות?'

export const globalSpeedByCountry: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מרחק ו-latency', `שרת רק בוירגיניה — גולש בטוקיו — **מילי-שניות** — **TCP איטי** — **לא רק Mbps**.`),
    seriesPost(2, SERIES, 'CDN מקומי', `אתר עם CloudFront ב**כל העולם** — **מהיר** בישראל — **בלי** CDN — **איטי**.`),
    seriesPost(3, SERIES, 'Peering מקומי', `Netflix ב-IXP תל אביב — **לא** דרך לונדון — **הבדל עצום** לסטרימינג.`),
    seriesPost(4, SERIES, 'רגולציה וסינון', `DPI, חסימות — **עקיפה** — **איטיות** — **לא** רוחב פס בלבד.`),
    seriesPost(5, SERIES, 'תשתית סיבים', `סיב עד הבית — **מהיר**. copper ישן — **מוגבל** — **אותה מדינה** — שני עולמות.`),
    seriesPost(6, SERIES, 'DNS', `resolver איטי — **שנייה** לפני בקשה — **מרגיש** — 1.1.1.1 vs ספק.`),
    seriesPost(7, SERIES, 'Blocking third-party', `מודעות, trackers חסומים — **לפעמים מהיר יותר** — **לפעמים** שבור — **תלוי**.`),
    seriesPost(8, SERIES, 'שעות שיא מקומיות', `ערב בישראל — **עומס** — אותו אתר **בצהריים** מהיר יותר.`),
    seriesPost(9, SERIES, 'בדיקה נכונה', `speedtest ≠ אתר אחד — **traceroute** — **איפה** הבottleneck — **מורכב**.`),
    seriesPost(10, SERIES, 'סיכום', `**מהירות לפי מדינה = מרחק + CDN + peering + תשתית מקומית + חוק.**

אתר **גלובלי** = **השקעה** בפיזור — לא אוטומטי.`),
  ],
}
