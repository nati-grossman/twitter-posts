import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך אפליקציה שומרת נתונים מקומית?'

export const appsLocalStorage: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'למה מקומי', `מהיר — **עובד offline** — **פחות** בקשות — **לא** מקור אמת סופי.`),
    seriesPost(2, SERIES, 'SQLite', `DB בטלפון — **הודעות**, היסטוריה — **שאילתות** — **נפוץ**.`),
    seriesPost(3, SERIES, 'Key-Value', `SharedPreferences, UserDefaults — **הגדרות**, token — **פשוט**.`),
    seriesPost(4, SERIES, 'קבצים', `תמונות cache — **דיסק** — **ניקוי** — **מלא**?`),
    seriesPost(5, SERIES, 'Encrypted', `סיסמאות — **Keychain** iOS — **Keystore** Android — **לא** טקסט גלוי.`),
    seriesPost(6, SERIES, 'Sync', `כתב מקומי — **מסנכרן** לשרת — **קונפליקט** — **timestamp**.`),
    seriesPost(7, SERIES, 'Cache policy', `TTL — **שעה** — **מחדש** מהרשת — **stale** מוצג?`),
    seriesPost(8, SERIES, 'מחיקה', `logout — **מוחק** token + cache — **פרטיות**.`),
    seriesPost(9, SERIES, 'Web', `localStorage, IndexedDB — **דפדפן** — **מגבלות** — **לא** בטוח לסודות.`),
    seriesPost(10, SERIES, 'סיכום', `**מקומי = SQLite/KV/קבצים — מהיר, offline, משני לשרת.**

רגיש = **הצפנה** + לא APK readable.`),
  ],
}
