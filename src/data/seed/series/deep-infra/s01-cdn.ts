import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה CDN ולמה זה מזרז אתרים?'

export const deepInfraCdn: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הבעיה: מרחק', `השרת בגרמניה — גולש בתל אביב — **latency** — כל קובץ **מסע ארוך**.

CDN = **להקריב עותקים קרוב אליך**.`),
    seriesPost(2, SERIES, 'מה זה CDN', `**Content Delivery Network** — רשת שרתי **Edge** ברחבי העולם — מחזיקים **עותק** של תמונות, CSS, JS, וידאו.`),
    seriesPost(3, SERIES, 'איך זה מזרז', `בקשה ל-logo.png — **Edge בתל אביב** מחזיר — לא טיסה לאירופה — **מילי-שניות** פחות.`),
    seriesPost(4, SERIES, 'Cache ו-TTL', `Edge שומר עותק — **TTL** — כמה זמן תקף — אחר כך **מתעדכן** מהמקור (Origin).`),
    seriesPost(5, SERIES, 'Origin server', `האתר **האמיתי** — CDN **לא מחליף** — רק **מפזר** — Origin נשאר מקור האמת.`),
    seriesPost(6, SERIES, 'דינמי vs סטטי', `תמונות — מושלם ל-CDN. API אישי — **פחות** — לפעמים רק סטטי + cache rules חכמות.`),
    seriesPost(7, SERIES, 'ספקים', `Cloudflare, Akamai, AWS CloudFront — **שכבה** מעל hosting — לעיתים **חינמי** לבסיס.`),
    seriesPost(8, SERIES, 'DDoS בונוס', `CDN **סופג** נפח — מפזר — **מגן** גם על זמינות — לא רק מהירות.`),
    seriesPost(9, SERIES, 'Cache invalidation', `עדכנת עיצוב — **purge** — “תמחק עותקים” — אחרת משתמשים רואים **ישן**.`),
    seriesPost(10, SERIES, 'סיכום', `**CDN = עותקים קרובים + cache = אתר מהיר יותר לרוב העולם.**

לא קסם — **פיזיקה + הנדסת cache**.`),
  ],
}
