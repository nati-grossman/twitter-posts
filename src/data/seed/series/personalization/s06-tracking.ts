import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה tracking?'

export const persTracking: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מעקב', `**Tracking** — **זיהוי** אותו משתמש **בין** אתרים/אפליקציות — **לא** בהכרח שם.`),
    seriesPost(2, SERIES, 'Cookies', `קובץ בדפדפן — **session** — **third-party** — **מודעות**.`),
    seriesPost(3, SERIES, 'Pixel', `תמונה 1×1 — **טוען** — **מדווח** לפייסבוק — **“ראית”** דף.`),
    seriesPost(4, SERIES, 'Device ID', `מובייל — **IDFA** — **opt-out** — **ATT** באייפון.`),
    seriesPost(5, SERIES, 'Fingerprint', `גודל מסך, פונטים — **מזהים** בלי cookie — **עקיף**.`),
    seriesPost(6, SERIES, 'Cross-site', `חיפשת נעליים — **מודעה** באתר אחר — **רשת** פרסום.`),
    seriesPost(7, SERIES, 'GDPR', `אירופה — **הסכמה** — **באנר** — **קנסות**.`),
    seriesPost(8, SERIES, 'חסימה', `uBlock — **פחות** tracking — **אתרים** מגיבים — **paywall**.`),
    seriesPost(9, SERIES, 'First-party', `רק האתר שלך — **פחות** ביזאר — **אנליטיקה** — GA4.`),
    seriesPost(10, SERIES, 'סיכום', `**Tracking = זיהוי וקישור התנהגות בין הקשרים — cookies, pixels, IDs.**

לא **רע** בהכרח — **שקיפות** קובעת.`),
  ],
}
