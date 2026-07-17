import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה אינטרנט מבוזר באמת?'

export const globalDecentralized: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מיתוס מול מציאות', `**מבוזר** לא = **אנרכיה** — BGP, DNS, ספקים — **מרכזים כוח** — **מבוזר חלקית**.`),
    seriesPost(2, SERIES, 'מה כן מבוזר', `אין שרת אחד — **מיליוני** רשתות — **נתיבים חלופיים** — נפילת צומת **לא** הורגת הכל.`),
    seriesPost(3, SERIES, 'מה מרוכז', `Cloudflare, AWS, גוגל — **נקודות** שאם נופלות — **הרבה** נפגע — **מרכזיות חדשה**.`),
    seriesPost(4, SERIES, 'DNS', `ICANN, registrars — **נקודת שליטה** — **אלטרנטיבות** (Handshake) — **נישה**.`),
    seriesPost(5, SERIES, 'Blockchain / Web3', `**מבוזר** ledger — **לא** מחליף TCP/IP — **שכבה** נוספת — **מחלוקת** על ערך.`),
    seriesPost(6, SERIES, 'Mesh, Tor', `רשתות עמיתים, אנונימיות — **מבוזר** — **איטי** — **שימוש** נישתי.`),
    seriesPost(7, SERIES, 'ActivityPub', `Mastodon — **פדרציה** — שרתים **נפרדים** — **לא** מרכז אחד — **מודל** חלופי.`),
    seriesPost(8, SERIES, 'IPFS', `תוכן לפי hash — **P2P** — **לא** URL קלאסי — **ניסוי** — לא mainstream.`),
    seriesPost(9, SERIES, 'סיכון מרוכזות', `3 ספקי ענן — **אם כולם נפלו** — **חלק גדול** מהאינטרנט **עצור** — **דיון** 2020s.`),
    seriesPost(10, SERIES, 'סיכום', `**מבוזר באמת = אין נקודת כשל יחידה — היום: מבוזר בנתיבים, מרוכז בשירותים.**

המגמה — **לשאול מי מחזיק** את השכבה שאתה משתמש בה.`),
  ],
}
