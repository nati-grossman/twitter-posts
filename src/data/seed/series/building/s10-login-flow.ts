import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מערכת התחברות באמת עובדת מקצה לקצה?'

export const buildingLoginFlow: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'המסע המלא', `כשאתה לוחץ "Login", המסלול בדרך כלל נראה כך:

\`\`\`text
Browser/App
     ↓
HTTPS Request
     ↓
Backend
     ↓
Database
     ↓
Session/JWT
     ↓
Cookie/Token
     ↓
Authenticated User
\`\`\`

המטרה היא לענות על שאלה אחת:

> "איך המערכת תדע שזה עדיין אותו משתמש גם בבקשה הבאה?"`),
    seriesPost(2, SERIES, 'הרשמה', `בזמן הרשמה המשתמש שולח:

\`\`\`text
email
password
\`\`\`

השרת:

1. בודק תקינות
2. בודק שהמשתמש לא קיים
3. מבצע Hash לסיסמה
4. שומר במסד

בטבלה נשמר משהו כמו:

\`\`\`text
id
email
password_hash
created_at
\`\`\`

לא שומרים סיסמה רגילה.`),
    seriesPost(3, SERIES, 'בדיקת סיסמה', `בזמן Login:

המשתמש שולח:

\`\`\`text
email
password
\`\`\`

השרת:

\`\`\`text
DB
↓
password_hash
\`\`\`

מחשב Hash לסיסמה שהוזנה ומשווה.

\`\`\`text
Hash(input_password)
==
Stored_Hash
\`\`\`

אם זהה → הצלחה.

אם לא → כישלון.

השרת אף פעם לא צריך לדעת את הסיסמה המקורית.`),
    seriesPost(4, SERIES, 'Session vs JWT', `אחרי שהמשתמש אומת צריך לזכור אותו.

### Session

\`\`\`text
Browser
   ↓
session_id
   ↓
Server Memory/Redis
\`\`\`

השרת מחזיק את המצב.

---

### JWT

\`\`\`text
Browser
   ↓
JWT
   ↓
Server validates signature
\`\`\`

הטוקן עצמו מכיל מידע על המשתמש.

---

הבדל מרכזי:

| Session              | JWT           |
| -------------------- | ------------- |
| State בשרת           | Stateless     |
| קל לבטל              | קשה יותר לבטל |
| נפוץ במערכות קלאסיות | נפוץ ב-APIs   |`),
    seriesPost(5, SERIES, 'Cookie מאובטח', `במערכת Session טיפוסית:

\`\`\`http
Set-Cookie:
session_id=abc123
\`\`\`

הדפדפן שומר אותו.

בכל בקשה עתידית:

\`\`\`http
Cookie:
session_id=abc123
\`\`\`

נשלח אוטומטית.

דגלים חשובים:

\`\`\`text
HttpOnly
Secure
SameSite
\`\`\`

אלו שכבות אבטחה קריטיות.`),
    seriesPost(6, SERIES, '2FA', `סיסמה היא רק גורם אחד.

2FA מוסיף גורם נוסף:

\`\`\`text
Password
+
Authenticator App
\`\`\`

או:

\`\`\`text
Password
+
Security Key
\`\`\`

גם אם הסיסמה דלפה, זה לא מספיק לתוקף.`),
    seriesPost(7, SERIES, 'Refresh Token', `במערכות JWT:

לא רוצים שטוקן יהיה תקף לנצח.

לכן:

\`\`\`text
Access Token
15 min
\`\`\`

ו-

\`\`\`text
Refresh Token
30 days
\`\`\`

כאשר הראשון פג:

\`\`\`text
Refresh
↓
New Access Token
\`\`\`

המשתמש נשאר מחובר בלי להקליד סיסמה שוב.`),
    seriesPost(8, SERIES, 'Logout', `### Session

קל יחסית:

\`\`\`text
Delete Session
\`\`\`

או:

\`\`\`text
Redis.remove(session_id)
\`\`\`

ה-session מפסיק להתקיים.

---

### JWT

יותר מורכב.

אפשר:

• blacklist
• revoke
• expiration קצר

או שילוב ביניהם.`),
    seriesPost(9, SERIES, 'OAuth Flow', `כשאתה לוחץ:

\`\`\`text
Login with Google
\`\`\`

הזרימה היא:

\`\`\`text
Your App
↓
Google
↓
User Login
↓
Consent
↓
Token
↓
Your App
\`\`\`

האפליקציה שלך:

• לא רואה את הסיסמה
• לא שומרת את הסיסמה

Google רק מאשרת:

> "כן, זה המשתמש הזה."`),
    seriesPost(10, SERIES, 'סיכום מקצה לקצה', `התמונה הגדולה:

\`\`\`text
Register
↓
Hash Password
↓
Store User
↓
Login
↓
Verify Hash
↓
Session/JWT
↓
Cookie/Token
↓
Authenticated Requests
↓
Authorization
↓
Logout
\`\`\`

החיבור לנושאים אחרים שלמדת:

\`\`\`text
HTTPS
↓
Login
↓
Cookie
↓
Session/JWT
↓
Permissions
↓
Database
↓
Application
\`\`\`

זאת למעשה אחת הזרימות החשובות ביותר בכל מערכת אינטרנט מודרנית — מ-Gmail ועד Netflix, GitHub, Facebook ו-ChatGPT. היא מחברת יחד Networking, HTTP, Security, Databases ו-Backend לכדי סיפור אחד שלם.`),
  ],
}
