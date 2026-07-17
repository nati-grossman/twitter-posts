import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה אתר אחד מהיר ואחר איטי?'

export const perfFastVsSlow: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא רוחב פס בלבד', `שניהם על Wi-Fi — **אחד** מרגיש מיידי — **הבדל** בשרשרת — **לא** רק Mbps.`),
    seriesPost(2, SERIES, 'שרת רחוק', `ללא CDN — **latency** — **TTFB** ארוך — **מחכים** לפני בייט ראשון.`),
    seriesPost(3, SERIES, 'קבצים כבדים', `תמונות לא דחוסות — **JS ענק** — **MB** — **שניות** טעינה.`),
    seriesPost(4, SERIES, 'בקשות רבות', `40 קבצים — **HTTP** ישן — **מקביל** מוגבל — **איחוד** חשוב.`),
    seriesPost(5, SERIES, 'שרת חלש', `CPU 100% — **תור** — **איטי** — **לא** scale.`),
    seriesPost(6, SERIES, 'DB איטי', `שאילתה בלי אינדקס — **שנייה** — **הדף** מחכה — **בוטלנק**.`),
    seriesPost(7, SERIES, 'ללא cache', `כל פעם מהתחלה — **Redis** חסר — **עומס** מיותר.`),
    seriesPost(8, SERIES, 'Frontend', `רינדור כבד — **React** ענק — **main thread** תקוע — **איטי** אחרי טעינה.`),
    seriesPost(9, SERIES, 'מדידה', `Lighthouse — **Core Web Vitals** — **LCP, FID** — **לא** “נראה”.`),
    seriesPost(10, SERIES, 'סיכום', `**מהיר = מרחק קצר + קבצים קטנים + שרת/DB מהיר + cache + קוד יעיל.**

איטי = **שרשרת חלשה** — לא מקום אחד.`),
  ],
}
