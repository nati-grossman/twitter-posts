import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה הגבול בין התאמה לפגיעה בפרטיות?'

export const persPrivacyLine: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'התאמה טובה', `מוזיקה שאהבת — **חוסך זמן** — **ערך** — **רוצים** personalization.`),
    seriesPost(2, SERIES, 'פגיעה', `מכירת דאטה — **דליפה** — **מעקב** מיותר — **מניפולציה** — **פחד**.`),
    seriesPost(3, SERIES, 'הסכמה', `באנר cookies — **בחרת**? — **ברירת מחדל** — **כהה** — **חוק**.`),
    seriesPost(4, SERIES, 'מינימום', `רק מה **צריך** — **לא** 200 שדות — **GDPR** — **עקרון**.`),
    seriesPost(5, SERIES, 'שקיפות', `“למה ראיתי?” — **הסבר** — **מחיקה** — **ייצוא** — **זכויות**.`),
    seriesPost(6, SERIES, 'Profiling', `“סיכון אשראי” — **רגיש** — **לא** כמו **מודעות** — **רמות**.`),
    seriesPost(7, SERIES, 'ילדים', `הגנה **חזקה** — **גיל** — **לא** פרופיל מלאי — **חוק**.`),
    seriesPost(8, SERIES, 'כלי משתמש', `VPN, חסימת מעקב — **הגנה** — **לא** 100% — **מודעות**.`),
    seriesPost(9, SERIES, 'אחריות חברה', `DPO — **אבטחה** — **קנס** — **אמון** מותג — **עסק**.`),
    seriesPost(10, SERIES, 'סיכום', `**הגבול = ערך למשתמש מול איסוף מינימלי, הסכמה אמיתית, ושקיפות.**

אפשר **שניהם** — **לא** בהכרח **זה או זה**.`),
  ],
}
