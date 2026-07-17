import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך אפליקציות רצות בענן?'

export const deepInfraAppsInCloud: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מסלול פריסה', `כשמפתח כותב קוד במחשב שלו, הוא לא רץ אצל המשתמשים ישירות.

המסלול בדרך כלל נראה כך:

\`\`\`text
Code
 ↓
Git
 ↓
CI/CD
 ↓
Cloud
 ↓
Users
\`\`\`

כלומר הקוד נארז, נבדק ונפרס לשרתים בענן.`),
    seriesPost(2, SERIES, 'PaaS פשוט', `PaaS = Platform as a Service

הרעיון:

> אתה מביא קוד, הענן מטפל בשאר.

דוגמאות:

• Heroku
• Render
• Railway
• App Engine

\`\`\`text
git push
   ↓
Application Running
\`\`\`

לא צריך לנהל שרתים בעצמך.`),
    seriesPost(3, SERIES, 'Containers בענן', `הגישה הנפוצה כיום:

\`\`\`text
Application
↓
Container
↓
Cloud
\`\`\`

הקונטיינר מכיל:

• קוד
• ספריות
• Runtime
• קבצי הגדרות

כך האפליקציה רצה אותו דבר בכל מקום.

Docker הפך את זה לסטנדרט.`),
    seriesPost(4, SERIES, 'Serverless', `במקום שרת שרץ כל הזמן:

\`\`\`text
Request
↓
Function Starts
↓
Execute
↓
Stops
\`\`\`

דוגמאות:

• AWS Lambda
• Google Cloud Functions
• Azure Functions

משלמים רק על זמן הריצה בפועל.`),
    seriesPost(5, SERIES, 'משאבים', `כל אפליקציה צריכה:

\`\`\`text
CPU
Memory
Disk
Network
\`\`\`

בענן אפשר להגדיר:

\`\`\`text
2 CPUs
4GB RAM
\`\`\`

או להגדיל ולהקטין לפי צורך.`),
    seriesPost(6, SERIES, 'רשת פנימית', `מערכת אמיתית מורכבת מכמה שירותים:

\`\`\`text
Frontend
↓
Backend
↓
Database
↓
Cache
\`\`\`

הם מתקשרים דרך רשת פנימית של הענן.

לא כל שירות חשוף לאינטרנט.`),
    seriesPost(7, SERIES, 'Secrets', `האפליקציה צריכה:

• סיסמאות DB
• API Keys
• Tokens

אסור לשים אותם בקוד:

\`\`\`python
password = "123456"
\`\`\`

במקום:

\`\`\`text
Secret Manager
\`\`\`

או Environment Variables.`),
    seriesPost(8, SERIES, 'Blue-Green', `איך משדרגים בלי להפיל מערכת?

\`\`\`text
Blue  (ישן)
Green (חדש)
\`\`\`

מעלים גרסה חדשה לצד הישנה.

אם הכול עובד:

\`\`\`text
Traffic → Green
\`\`\`

אם יש בעיה:

\`\`\`text
Traffic → Blue
\`\`\`

חזרה מיידית.`),
    seriesPost(9, SERIES, 'Observability', `כשיש אלפי שרתים:

צריך לדעת מה קורה.

שלושת הכלים המרכזיים:

\`\`\`text
Logs
Metrics
Traces
\`\`\`

שאלות נפוצות:

• למה איטי?
• למה נפל?
• איפה השגיאה?

בלי Observability כמעט בלתי אפשרי לתחזק מערכת גדולה.`),
    seriesPost(10, SERIES, 'סיכום', `אפליקציה מודרנית בענן נראית בערך כך:

\`\`\`text
Code
 ↓
Git
 ↓
CI/CD
 ↓
Container / Serverless
 ↓
Cloud Network
 ↓
Load Balancer
 ↓
Application
 ↓
Database / Cache
 ↓
Monitoring
\`\`\`

הרעיון המרכזי:

> הענן הוא לא "שרת אחד באינטרנט". הוא אוסף עצום של מחשבים, רשתות, אחסון ושירותים שמאפשרים לאפליקציה לרוץ, לגדול, להתעדכן ולהישאר זמינה למיליוני משתמשים בלי שהמפתח יצטרך לנהל את כל החומרה בעצמו.`),
  ],
}
