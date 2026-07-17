import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה Frontend מול Backend?'

export const buildingFrontendBackend: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'חלוקה פשוטה', `מערכת אינטרנטית מחולקת לשני חלקים:

\`\`\`text
Frontend = מה שאתה רואה
Backend = מה שקורה מאחורי הקלעים
\`\`\``),
    seriesPost(2, SERIES, 'איפה רץ', `\`\`\`text
Frontend → בדפדפן / אפליקציה
Backend → שרתים (Cloud / Data centers)
\`\`\`

לדוגמה:

• Frontend: Chrome, Mobile app
• Backend: AWS, Google Cloud`),
    seriesPost(3, SERIES, 'טכנולוגיות נפוצות', `### Frontend:

• HTML
• CSS
• JavaScript
• React / Vue / Angular

### Backend:

• Python (FastAPI, Django)
• Node.js
• Java
• Go`),
    seriesPost(4, SERIES, 'מי עושה מה', `\`\`\`text
Frontend:
- UI
- כפתורים
- דפים
- אנימציות

Backend:
- לוגיקה
- Database
- Authentication
- APIs
\`\`\``),
    seriesPost(5, SERIES, 'תקשורת ביניהם', `הם מדברים דרך API:

\`\`\`text
Frontend → HTTP Request → Backend
Backend → JSON Response → Frontend
\`\`\`

דוגמה:

\`\`\`json
{ "username": "Avi", "score": 120 }
\`\`\``),
    seriesPost(6, SERIES, 'סודות', `ה-Frontend לא אמור:

• לדעת סיסמאות
• לגשת ישירות ל-DB
• להכיל לוגיקה רגישה

כל זה קורה ב-Backend.`),
    seriesPost(7, SERIES, 'SSR ו-Hybrid', `לפעמים הגבולות מטשטשים:

### SSR (Server Side Rendering)

\`\`\`text
Backend → HTML מוכן → Frontend
\`\`\`

### SPA

\`\`\`text
Frontend רץ לבד + API calls
\`\`\`

הרבה מערכות משתמשות בשילוב.`),
    seriesPost(8, SERIES, 'Mobile', `במובייל:

\`\`\`text
Frontend = iOS / Android App
Backend = אותו שרת כמו האתר
\`\`\`

כלומר אותו Backend משרת כמה Frontends.`),
    seriesPost(9, SERIES, 'BFF (Backend For Frontend)', `לפעמים יש שכבה ביניים:

\`\`\`text
Mobile → BFF → Core Backend
Web → BFF → Core Backend
\`\`\`

לכל Frontend יש התאמות שונות.`),
    seriesPost(10, SERIES, 'סיכום', `\`\`\`text
Frontend = מציג ומתקשר עם המשתמש
Backend = מעבד, שומר ומנהל מידע
\`\`\`

זרימה טיפוסית:

\`\`\`text
User
↓
Frontend (UI)
↓
API
↓
Backend
↓
Database
↓
Response back to UI
\`\`\`

במילים פשוטות:

> Frontend הוא מה שאתה רואה ולוחץ עליו — Backend הוא כל מה שמאפשר לזה לעבוד מאחורי הקלעים.`),
  ],
}
