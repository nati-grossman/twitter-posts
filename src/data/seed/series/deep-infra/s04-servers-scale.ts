import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך שרתים מתרבים לפי עומס?'

export const deepInfraServersScale: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הבעיה', `נניח שיש לך שרת אחד:

\`\`\`text
Users
  ↓
Server
\`\`\`

בהתחלה הכול עובד.

אבל יום אחד מגיעים:

\`\`\`text
1,000 → 10,000 → 100,000 משתמשים
\`\`\`

בשלב מסוים השרת נחנק.

צריך דרך להגדיל קיבולת.`),
    seriesPost(2, SERIES, 'Horizontal Scaling', `הגישה המועדפת ברוב המערכות המודרניות:

במקום שרת אחד גדול:

\`\`\`text
Users
  ↓
Server
\`\`\`

מוסיפים עוד שרתים:

\`\`\`text
Users
  ↓
Load Balancer
  ↓
Server A
Server B
Server C
\`\`\`

זה נקרא:

\`\`\`text
Scale Out
\`\`\`

או Horizontal Scaling.`),
    seriesPost(3, SERIES, 'Vertical Scaling', `דרך אחרת:

במקום להוסיף שרתים:

\`\`\`text
4 CPU
8GB RAM
\`\`\`

משדרגים:

\`\`\`text
32 CPU
128GB RAM
\`\`\`

זה נקרא:

\`\`\`text
Scale Up
\`\`\`

או Vertical Scaling.

היתרון:

• פשוט

החיסרון:

• יש גבול לגודל המכונה.`),
    seriesPost(4, SERIES, 'Auto Scaling', `בענן אפשר להוסיף ולהוריד שרתים אוטומטית.

לדוגמה:

\`\`\`text
CPU > 70%
\`\`\`

המערכת מחליטה:

\`\`\`text
3 Servers
↓
5 Servers
↓
8 Servers
\`\`\`

וכשהעומס יורד:

\`\`\`text
8 Servers
↓
5 Servers
↓
3 Servers
\`\`\`

כך משלמים רק על מה שצריך.`),
    seriesPost(5, SERIES, 'Stateless', `כדי להוסיף שרתים בקלות, כל שרת צריך להיות דומה לכל האחרים.

כלומר:

\`\`\`text
Request → Any Server
\`\`\`

אם שרת מסוים מחזיק מידע בזיכרון שלו בלבד:

\`\`\`text
User Session
\`\`\`

קשה להחליף אותו.

לכן מערכות גדולות שואפות להיות:

\`\`\`text
Stateless
\`\`\`

והמידע נשמר ב-DB או Redis.`),
    seriesPost(6, SERIES, 'Bottleneck', `לפעמים מוסיפים עוד שרתים וזה לא עוזר.

למה?

כי הבעיה בכלל במקום אחר:

\`\`\`text
Servers → Database
\`\`\`

אם ה-DB הוא צוואר הבקבוק:

\`\`\`text
10 Servers
20 Servers
50 Servers
\`\`\`

לא ישפרו כלום.

חייבים לזהות את הרכיב שמגביל.`),
    seriesPost(7, SERIES, 'Queue', `לא כל עבודה חייבת לקרות מיד.

אפשר להכניס לתור:

\`\`\`text
Request
 ↓
Queue
 ↓
Workers
\`\`\`

דוגמאות:

• שליחת אימייל
• עיבוד תמונות
• יצירת דוחות

כשהעומס גדל:

\`\`\`text
2 Workers
↓
10 Workers
↓
50 Workers
\`\`\``),
    seriesPost(8, SERIES, 'Cold Start', `שרת חדש לא תמיד מוכן מיד.

צריך:

\`\`\`text
Start VM
Load Container
Connect Services
Warm Cache
\`\`\`

הזמן הזה נקרא:

\`\`\`text
Cold Start
\`\`\`

במיוחד ב-Serverless.`),
    seriesPost(9, SERIES, 'Capacity Planning', `לא מחכים לקריסה.

מנסים לחזות:

\`\`\`text
Black Friday
Marketing Campaign
Product Launch
\`\`\`

ושואלים:

> כמה שרתים נצטרך?

זו עבודת Capacity Planning.`),
    seriesPost(10, SERIES, 'סיכום', `כאשר העומס גדל, מערכת מודרנית עובדת כך:

\`\`\`text
Traffic
 ↓
Load Balancer
 ↓
Auto Scaling
 ↓
More Servers
 ↓
Database / Cache / Queue
\`\`\`

העקרונות החשובים:

\`\`\`text
Horizontal Scaling
Stateless Services
Auto Scaling
Queue-based Processing
\`\`\`

במילים פשוטות:

> שרתים לא "מתחזקים" לבד. מערכת מודרנית מודדת עומס, מוסיפה מופעים חדשים של האפליקציה, מפזרת אליהם תעבורה, ומורידה אותם כשהעומס נעלם. זו אחת הסיבות המרכזיות ששירותי ענן מסוגלים לשרת מיליוני משתמשים בצורה יעילה.`),
  ],
}
