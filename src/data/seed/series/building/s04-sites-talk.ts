import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך שני אתרים מדברים אחד עם השני?'

export const buildingSitesTalk: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא כבל ישיר', `שני אתרים לא "מחוברים" ישירות כמו שני מחשבים עם כבל.

במקום זה, הם מתקשרים דרך:

\`\`\`text
HTTP / HTTPS Requests
↑
Internet
↑
Servers
\`\`\`

כל אתר הוא פשוט שרת שמקבל ומחזיר בקשות.`),
    seriesPost(2, SERIES, 'דוגמה: תשלום', `נניח אתר קניות רוצה לחייב כרטיס אשראי:

\`\`\`text
Shop → Payment Provider (Stripe / PayPal)
\`\`\`

התהליך:

1. האתר שולח בקשה
2. ספק התשלום מחזיר תשובה
3. האתר מעדכן "שולם"

האתר לא מטפל בכסף ישירות — רק מבקש שירות.`),
    seriesPost(3, SERIES, 'CORS', `כשדפדפן מנסה לדבר עם אתר אחר:

\`\`\`text
Frontend (site A)
→ API (site B)
\`\`\`

הדפדפן בודק:

> האם מותר לאתר הזה לדבר איתי?

זה נקרא CORS.

אם אין אישור:

\`\`\`text
Blocked by browser
\`\`\``),
    seriesPost(4, SERIES, 'Server-to-server', `בניגוד לדפדפן, שרתים יכולים לדבר חופשי יותר:

\`\`\`text
Backend A → Backend B
\`\`\`

למשל:

• אתר מזמין שירות של מיילים
• אתר מושך נתונים ממערכת אחרת

אין דפדפן באמצע → פחות מגבלות.`),
    seriesPost(5, SERIES, 'OAuth', `כשאתה לוחץ:

\`\`\`text
Login with Google
\`\`\`

האתר שלך לא מקבל סיסמה.

במקום זה:

\`\`\`text
App → Google → Token → App
\`\`\`

Google אומר:

> "כן, זה המשתמש הזה"

בלי לחשוף סיסמה.`),
    seriesPost(6, SERIES, 'Embed', `לפעמים אתר אחד "מוטמע" בתוך אחר:

\`\`\`text
YouTube video inside website
\`\`\`

או:

• Google Maps embed
• Chat widgets
• Payment forms

זה עדיין תקשורת, אבל בתוך iframe או script.`),
    seriesPost(7, SERIES, 'Webhooks', `זה מצב הפוך:

במקום שהאתר שלך ישאל כל הזמן:

\`\`\`text
"יש עדכון?"
"יש עדכון?"
\`\`\`

השרת השני שולח הודעה כשמשהו קורה:

\`\`\`text
Stripe → Your server (payment succeeded)
\`\`\`

זה הרבה יותר יעיל.`),
    seriesPost(8, SERIES, 'SDK', `לפעמים נותנים לך "ערכת כלים":

\`\`\`text
import stripe from 'stripe'
\`\`\`

SDK מסתיר HTTP מאחורי פונקציות:

\`\`\`text
stripe.pay()
\`\`\`

אבל בפועל זה עדיין בקשות רשת.`),
    seriesPost(9, SERIES, 'שגיאות וריטרי', `תקשורת בין אתרים לא תמיד מצליחה:

\`\`\`text
Timeout
500 error
Network failure
\`\`\`

לכן מערכות משתמשות ב:

• retry
• backoff
• fallback

כדי להיות עמידות.`),
    seriesPost(10, SERIES, 'סיכום', `שני אתרים "מדברים" דרך שכבות של HTTP מעל האינטרנט:

\`\`\`text
Browser/Server
↓
HTTP Requests
↓
APIs
↓
Auth (OAuth/API keys)
↓
CORS (browser only)
↓
Webhooks / SDKs / Embeds
\`\`\`

הרעיון המרכזי:

> אין חיבור ישיר בין אתרים — יש פרוטוקולים, הרשאות ו-APIs שמאפשרים להם לשתף מידע בצורה מבוקרת ובטוחה.

זה הבסיס לכל האינטרנט המודרני: תשלומים, התחברות, מפות, וידאו, ואפילו מערכות ענק כמו Netflix או Stripe — כולן פשוט מערכות שמדברות אחת עם השנייה דרך HTTP.`),
  ],
}
