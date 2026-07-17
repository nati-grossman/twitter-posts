import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך תעבורה עולמית מתנהלת בשעות עומס?'

export const globalPeakTraffic: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'גלים לפי אזור זמן', `בוקר באסיה — ערב בארה״ב — **שיאים מתוזמנים** — **לא** כולם דוחפים ביחד — **גל** מסביב לכדור.`),
    seriesPost(2, SERIES, 'Congestion', `קישורים מלאים — **תור** — **packet loss** — **איטיות** — **לא** “נגמר אינטרנט”.`),
    seriesPost(3, SERIES, 'QoS ותעדוף', `VoIP, רפואה — **עדיפות** (לפעמים) — סטרימינג — **שאר** — **פוליטיקה** ספק.`),
    seriesPost(4, SERIES, 'CDN מפזר עומס', `שיא סטרימינג — **Edge** סופג — **פחות** על כבל בינלאומי — **הנדסה**.`),
    seriesPost(5, SERIES, 'אירועים חריגים', `משחק עולמי, בחירות — **spike** דקות — **מוכנים** מראש — **capacity** זמני.`),
    seriesPost(6, SERIES, 'Backbone upgrade', `ספקים **מרחיבים** לינקים — **השקעה** — לפני שבור — **תכנון**.`),
    seriesPost(7, SERIES, 'Anycast', `אותו IP — **הקרוב** עונה — **מפזר** DNS — **עומס** מתחלק.`),
    seriesPost(8, SERIES, 'לילה “שקט”', `חלונות תחזוקה — **routing changes** — BGP updates — **פחות משתמשים** — **סיכון מבוקר**.`),
    seriesPost(9, SERIES, 'מדידה', `NetFlow, telemetry — **רואים** לפני קריסה — **אוטומציה** scale.`),
    seriesPost(10, SERIES, 'סיכום', `**עומס עולמי = גלי אזורי זמן + תורים + CDN + הרחבת קיבולת.**

האינטרנט **מתכווץ ומתרחב** — לא קו קבוע.`),
  ],
}
