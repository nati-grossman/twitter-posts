import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה authentication vs authorization?'

export const buildingAuthnAuthz: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שתי מילים, שני תפקידים', `יש שני מושגים שקל לבלבל:

\`\`\`text
Authentication = מי אתה?
Authorization = מה מותר לך לעשות?
\`\`\``),
    seriesPost(2, SERIES, 'דוגמת מועדון', `דמיין מועדון:

\`\`\`text
כניסה לדלת → בדיקת זהות (Authentication)
כניסה לאזורים פנימיים → הרשאות (Authorization)
\`\`\`

השומר קודם בודק מי אתה, ואז מחליט מה מותר לך.`),
    seriesPost(3, SERIES, 'Login', `Login הוא Authentication.

\`\`\`text
Email + Password → האם זה באמת אתה?
\`\`\`

אם הצליח:

> המערכת יודעת מי המשתמש`),
    seriesPost(4, SERIES, 'Roles', `Authorization מתחיל כאן:

\`\`\`text
User
Admin
Moderator
\`\`\`

לדוגמה:

• משתמש רגיל: יכול לקרוא פוסטים
• אדמין: יכול למחוק משתמשים`),
    seriesPost(5, SERIES, 'Token מכיל מה', `אחרי Login, הטוקן יכול להכיל מידע:

\`\`\`json
{
  "userId": 123,
  "role": "admin"
}
\`\`\`

זה עוזר למערכת להבין מה מותר.`),
    seriesPost(6, SERIES, '401 vs 403', `שני קודי שגיאה חשובים:

\`\`\`text
401 Unauthorized → לא התחברת בכלל
403 Forbidden → אתה מחובר, אבל אסור לך
\`\`\`

זה ההבדל הקלאסי.`),
    seriesPost(7, SERIES, 'Scope ב-OAuth', `ב-OAuth יש "Scopes":

\`\`\`text
read_email
write_posts
access_calendar
\`\`\`

המשתמש נותן הרשאות מדויקות לאפליקציה.`),
    seriesPost(8, SERIES, 'שגיאה נפוצה', `טעות נפוצה:

> לחשוב שאם מישהו מחובר = מותר לו הכול

אבל בפועל:

• Authentication ≠ Authorization
• Login ≠ Permissions`),
    seriesPost(9, SERIES, 'Zero Trust', `עקרון מודרני:

> אל תסמוך על שום דבר אוטומטית

גם אם משתמש התחבר:

• עדיין בודקים הרשאות לכל פעולה
• כל בקשה נבדקת מחדש`),
    seriesPost(10, SERIES, 'סיכום', `\`\`\`text
Authentication → מי אתה?
Authorization → מה אתה רשאי לעשות?
\`\`\`

זרימה טיפוסית:

\`\`\`text
Login (AuthN)
↓
Token
↓
Request
↓
Check Permissions (AuthZ)
↓
Allow / Deny
\`\`\`

בפועל:

> Authentication פותח את הדלת — Authorization מחליט לאיזה חדרים מותר לך להיכנס.`),
  ],
}
