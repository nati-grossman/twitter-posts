import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה API?'

export const buildingApi: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `API (Application Programming Interface) הוא פשוט:

> דרך סטנדרטית שבה מערכות מדברות אחת עם השנייה.

במקום לגשת ישירות לקוד או למסד נתונים — משתמשים ב"דלת" מוגדרת מראש.

\`\`\`text
Client → API → Server → Response
\`\`\``),
    seriesPost(2, SERIES, 'מסעדה', `האנלוגיה הכי טובה:

\`\`\`text
אתה = לקוח
מלצר = API
מטבח = מערכת פנימית
\`\`\`

אתה לא נכנס למטבח. אתה מבקש מהמלצר.

המלצר מחזיר תוצאה.`),
    seriesPost(3, SERIES, 'REST נפוץ', `REST הוא סגנון API מאוד נפוץ באינטרנט.

לדוגמה:

\`\`\`text
GET /users/123
POST /login
DELETE /post/5
\`\`\`

כל פעולה היא HTTP request פשוט.`),
    seriesPost(4, SERIES, 'Request ו-Response', `כל API עובד כך:

\`\`\`text
Request → Server → Response
\`\`\`

דוגמה:

Request:

\`\`\`json
{ "userId": 123 }
\`\`\`

Response:

\`\`\`json
{ "name": "Avi", "age": 30 }
\`\`\``),
    seriesPost(5, SERIES, 'Public vs Private', `יש סוגים שונים של APIs:

### Public API

כל אחד יכול להשתמש בו:

• OpenWeather
• Google Maps (חלקית)

### Private API

פנימי לחברה:

• מערכת תשלומים פנימית
• שירותי backend פנימיים`),
    seriesPost(6, SERIES, 'GraphQL', `בניגוד ל-REST, ב-GraphQL אתה מבקש בדיוק מה שאתה צריך:

\`\`\`text
{
  user {
    name
    posts {
      title
    }
  }
}
\`\`\`

יתרון:

• פחות over-fetching
• יותר גמישות`),
    seriesPost(7, SERIES, 'Webhooks', `במקום לשאול כל הזמן:

\`\`\`text
"קרה משהו?"
"קרה משהו?"
\`\`\`

המערכת שולחת לך הודעה:

\`\`\`text
Event → Your API endpoint
\`\`\`

לדוגמה:

• תשלום הצליח
• משתמש נרשם`),
    seriesPost(8, SERIES, 'תיעוד (Documentation)', `API טוב תמיד מגיע עם מסמך:

• מה ה-endpoints
• מה לשלוח
• מה חוזר
• דוגמאות

בלי תיעוד — API כמעט לא שמיש.`),
    seriesPost(9, SERIES, 'גרסאות', `APIs משתנים עם הזמן.

לדוגמה:

\`\`\`text
/v1/users
/v2/users
\`\`\`

כדי לא לשבור מערכות קיימות.`),
    seriesPost(10, SERIES, 'סיכום', `API הוא בעצם:

\`\`\`text
App ↔ API ↔ System
\`\`\`

הוא מאפשר:

• הפרדה בין מערכות
• שימוש חוזר
• אבטחה
• סקיילינג

במילים פשוטות:

> API הוא הדרך הסטנדרטית שבה תוכנות מדברות אחת עם השנייה באינטרנט, בלי לדעת איך הצד השני באמת בנוי מבפנים.`),
  ],
}
