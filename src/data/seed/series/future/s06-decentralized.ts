import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה אינטרנט מבוזר באמת?'

export const futureDecentralized: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא שרת אחד', `**מבוזר** — אין **נקודת כשל** יחידה — **רבים** מחזיקים — **IPFS**, blockchain.`),
    seriesPost(2, SERIES, 'מול מרוכז', `AWS, גוגל — **נוח** — **שליטה** — **censorship** אפשרי — **trade-off**.`),
    seriesPost(3, SERIES, 'IPFS', `תוכן לפי **hash** — **מי שמחזיק** מגיש — **לא** URL אחד — **איטי** לפעמים.`),
    seriesPost(4, SERIES, 'Mesh', `מכשירים **מחוברים** ביניהם — **בלי** ספק — **אסון** — **ניסויים**.`),
    seriesPost(5, SERIES, 'ActivityPub', `Mastodon — **פדרציה** — **לא** מרכז אחד — **פיד**.`),
    seriesPost(6, SERIES, 'מיתוס מוחלט', `תמיד **כניסה** — DNS, RPC — **שכבות** מרוכזות — **מבוזר חלקי**.`),
    seriesPost(7, SERIES, 'יתרונות', `עמידות — **גישה** בלי אישור — **פרטיות** לפעמים.`),
    seriesPost(8, SERIES, 'חסרונות', `איטי — **אחריות** על משתמש — **סקאם** — **UX**.`),
    seriesPost(9, SERIES, 'עתיד היברידי', `Web2 + רכיבים מבוזרים — **זהות**, תשלום — **לא** הכל או כלום.`),
    seriesPost(10, SERIES, 'סיכום', `**מבוזר אמיתי = אין בעלים יחיד — קשה, איטי יותר, עמיד יותר.**

האינטרנט **כבר** מבוזר ב-BGP — **שכבות** חדשות מוסיפות.`),
  ],
}
