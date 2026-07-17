import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה push notification?'

export const appsPush: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'דחיפה מבחוץ', `**Push** — שרת → **Apple/Google** → **מכשיר** — **מופיע** גם כשהאפליקציה **סגורה**.`),
    seriesPost(2, SERIES, 'מול local', `**Local** — האפליקציה **מתזמנת** — תזכורת — **לא** עובר דרך FCM/APNs.`),
    seriesPost(3, SERIES, 'FCM / APNs', `Firebase Cloud Messaging — אנדרואיד. **APNs** — iOS — **token** לכל מכשיר.`),
    seriesPost(4, SERIES, 'רישום', `אפליקציה מקבלת **device token** — **שולחת** לשרת שלך — **מקשר** משתמש.`),
    seriesPost(5, SERIES, 'Payload', `כותרת, גוף, **data** — לחיצה — **ניווט** למסך — **deep link**.`),
    seriesPost(6, SERIES, 'הרשאה', `“לאפשר התראות?” — **רבים** אומרים לא — **onboarding** חשוב.`),
    seriesPost(7, SERIES, 'Silent push', `רק data — **מעיר** רקע — **sync** — **בלי** באנר.`),
    seriesPost(8, SERIES, 'לא SMS', `**אינטרנט** — **לא** עולה כמו SMS — **תלוי** שירות גוגל/אפל.`),
    seriesPost(9, SERIES, 'שיווק מול transactional', `“מבצע!” — **מציק**. “החבילה הגיעה” — **שימושי** — **unsubscribe**.`),
    seriesPost(10, SERIES, 'סיכום', `**Push = שרת → שער OS → מכשיר → התראה/קוד ברקע.**

בונה **engagement** — **זהירות** מ-spam.`),
  ],
}
