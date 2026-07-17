import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה BGP (ניתוב בין רשתות עולמיות)?'

export const globalBgp: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'GPS של האינטרנט', `**BGP** — Border Gateway Protocol — **איך רשתות גדולות (AS) מסכימות** איך להגיע לכתובת IP.

לא GPS — **מפת דרכים דינמית**.`),
    seriesPost(2, SERIES, 'Autonomous System', `כל ספק/חברה גדולה — **מספר AS** — “אני רשת X” — **מפרסם** prefixes — כתובות שאני **מגיע אליהן**.`),
    seriesPost(3, SERIES, 'Path vector', `לא shortest hop — **נתיב מדיניות** — “עבור דרך AS123” — **גמישות** — **מורכב**.`),
    seriesPost(4, SERIES, 'Peering ו-Transit', `שכנים **חינם** (peering) — קטן **קונה** מעבר (transit) לגדול — **כלכלה + טכנולוגיה**.`),
    seriesPost(5, SERIES, 'Route leak', `טעות — מפרסמים נתיבים **שלא שלהם** — **הפניה שגויה** — איטיות עולמית — **incident** ידועים.`),
    seriesPost(6, SERIES, 'Hijacking', `זיוף prefix — תעבורה ל**תוקף** — נדיר, **מסוכן** — RPKI **מאמת** בעלות.`),
    seriesPost(7, SERIES, 'RPKI', `תעודות ל-AS — **האם מותר** לפרסם prefix — **מגן** — אימוץ הדרגתי.`),
    seriesPost(8, SERIES, 'מול OSPF פנימי', `בתוך רשת אחת — OSPF/IS-IS — **מהיר**. בין רשתות — **BGP** — **אינטרנט = BGP**.`),
    seriesPost(9, SERIES, 'ניטור', `BGPmon — רואים **שינויי נתיב** — “למה איטי לברזיל?” — **תשובה ברשת**.`),
    seriesPost(10, SERIES, 'סיכום', `**BGP = שפה שבה רשתות עולמיות מחליפות “איך להגיע אלי”.**

ללא BGP — **אין** אינטרנט גלובלי מחובר.`),
  ],
}
