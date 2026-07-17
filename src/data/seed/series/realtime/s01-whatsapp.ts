import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך WhatsApp עובד בזמן אמת?'

export const realtimeWhatsapp: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא SMS', `הודעה **לא** עוברת כ-SMS — **אינטרנט** — שרתי Meta — **חשבון** מקושר לטלפון.`),
    seriesPost(2, SERIES, 'חיבור מתמיד', `אפליקציה **פתוחה** — חיבור **ארוך טווח** לשרת — **דחיפה** — לא “אתה שואל כל שנייה”.`),
    seriesPost(3, SERIES, 'E2E encryption', `Signal protocol — **רק** אתה והצד השני קוראים — שרת **מעביר** — **לא רואה** תוכן (בתיאוריה).`),
    seriesPost(4, SERIES, 'נמען לא מחובר', `הודעה **נשמרת** בשרת — **ממתינה** — נכנס לאינטרנט — **מגיעה** — ✓✓ כחול.`),
    seriesPost(5, SERIES, 'קבוצות', `מפתחות **לכל קבוצה** — שליחה אחת — **פיזור** לחברים — **scale** עצום.`),
    seriesPost(6, SERIES, 'סטטוס ומדיה', `תמונות — **CDN** — הודעה קטנה “יש קישור” — **לא** 5MB בכל push.`),
    seriesPost(7, SERIES, 'שיחות קול', `WebRTC — **P2P** כשאפשר — **שרת** רק **מחבר** — לא כל האודיו דרך מרכז.`),
    seriesPost(8, SERIES, 'מיליוני משתמשים', `sharding לפי מספר — **אזורים** — **לא** שרת אחד — **הנדסת scale**.`),
    seriesPost(9, SERIES, 'מהירות מורגשת', `push **מיידי** — תלוי **רשת** — Wi-Fi vs 3G — **לא** “מהיר יותר מ-light”.`),
    seriesPost(10, SERIES, 'סיכום', `**WhatsApp = חיבור מתמיד + הצפנה + שרתי relay + WebRTC לשיחות.**

זמן אמת = **דחיפה**, לא רענון דף.`),
  ],
}
