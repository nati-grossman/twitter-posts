import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה recommendation system?'

export const persRecommendation: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**Recommendation system** — מנוע ש**מדרג** פריטים — סרטון, מוצר, שיר — **למי** ראוי להציג.`),
    seriesPost(2, SERIES, 'Content-based', `פריט דומה למה **צפית** — תגיות, embedding — **“עוד כזה”**.`),
    seriesPost(3, SERIES, 'Collaborative', `משתמשים **דומים** לך — **אהבו** X — **אולי** גם אתה.`),
    seriesPost(4, SERIES, 'Hybrid', `נטפליקס, אמזון — **שילוב** — **מיליוני** אותות.`),
    seriesPost(5, SERIES, 'Ranking', `לא רק “רלוונטי” — **סדר** — **מה ראשון** — **אלגוריתם** + מודל.`),
    seriesPost(6, SERIES, 'Cold start', `משתמש חדש — **אין** היסטוריה — **פופולרי** או שאלון — **בעיה**.`),
    seriesPost(7, SERIES, 'Exploration', `לפעמים **משהו חדש** — **לא** רק exploitation — **גילוי** — **filter bubble** מול.`),
    seriesPost(8, SERIES, 'מטריקות', `CTR, watch time — **מה** ממטפים — **לא** “אהבת” — **מטרה עסקית**.`),
    seriesPost(9, SERIES, 'RL', `reward = צפית עד הסוף — **למידה** — **טיקטוק** — **מורכב**.`),
    seriesPost(10, SERIES, 'סיכום', `**מערכת המלצות = דירוג פריטים לפי דמיון, קהל דומה, ומטרות עסקיות.**

בכל פיד — **מנוע** כזה מאחורי.`),
  ],
}
