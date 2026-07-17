import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה קריפטוגרפיה באינטרנט?'

export const futureCryptoInternet: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא מטבעות בלבד', `**Cryptography** — מתמטיקה ל**סוד** ו**שלמות** — **בסיס** HTTPS, ביטקוין, חתימה.`),
    seriesPost(2, SERIES, 'Symmetric', `אותו מפתח — **מהיר** — AES — **חילוק מפתח** קשה — **TLS session**.`),
    seriesPost(3, SERIES, 'Asymmetric', `ציבורי + פרטי — **RSA, ECC** — **שולחים** סוד עם ציבורי — **חתימה** עם פרטי.`),
    seriesPost(4, SERIES, 'Hash', `SHA-256 — **חד-כיווני** — **בלוקצ׳יין**, סיסמאות — **לא** הצפנה.`),
    seriesPost(5, SERIES, 'TLS', `דפדפן ↔ שרת — **מניעת** האזנה — **תעודה** — **רגיל** היום.`),
    seriesPost(6, SERIES, 'End-to-end', `WhatsApp — **רק** צדדים — **לא** שרת קורא — **Signal protocol**.`),
    seriesPost(7, SERIES, 'Zero-knowledge', `מוכיחים **שאני יודע** בלי לחשוף — **ZK proofs** — **פרטיות** Web3.`),
    seriesPost(8, SERIES, 'Post-quantum', `מחשב קוונטי עתידי — **איום** — **אלגוריתמים** חדשים — **מחקר**.`),
    seriesPost(9, SERIES, 'מפתחות', `אבוד private key — **אין** “שכחתי סיסמה” — **אחריות** משתמש.`),
    seriesPost(10, SERIES, 'סיכום', `**קריפטו באינטרנט = הצפנה, חתימה, hash — מאבטח תעבורה ועסקאות.**

בלי זה — **אין** אמון דיגיטלי מודרני.`),
  ],
}
