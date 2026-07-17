import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך שומרים מידע בצורה חכמה?'

export const buildingSmartData: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'נורמליזציה', `אחד העקרונות הראשונים במסדי נתונים הוא:

> לא לשמור את אותו מידע שוב ושוב.

במקום:

\`\`\`text
Orders
---------
order_id
customer_name
customer_email
customer_address
\`\`\`

בכל הזמנה,

מפרידים:

\`\`\`text
Customers
Orders
\`\`\`

כך יש מקור אמת אחד (Single Source of Truth).`),
    seriesPost(2, SERIES, 'סכמה', `Schema היא התוכנית של מסד הנתונים.

היא מגדירה:

• טבלאות
• עמודות
• סוגי נתונים
• קשרים

לדוגמה:

\`\`\`text
Users
--------
id
email
created_at
\`\`\`

סכמה טובה מונעת בלגן עוד לפני שהמידע נשמר.`),
    seriesPost(3, SERIES, 'מפתחות', `מסד נתונים צריך דרך לזהות כל רשומה.

### Primary Key

\`\`\`text
user_id = 123
\`\`\`

מזהה ייחודי.

### Foreign Key

\`\`\`text
order.user_id -> users.id
\`\`\`

מחבר בין טבלאות.

המפתחות הם הדבק שמחזיק את המידע יחד.`),
    seriesPost(4, SERIES, 'אינדקסים חכמים', `בלי אינדקס:

\`\`\`text
Search User
↓
Scan 10M Rows
\`\`\`

עם אינדקס:

\`\`\`text
Search User
↓
Jump Directly
\`\`\`

בדומה לאינדקס בסוף ספר.

האינדקסים הם אחד השיפורים הגדולים ביותר לביצועי קריאה.`),
    seriesPost(5, SERIES, 'Partitioning', `כשהטבלה ענקית:

\`\`\`text
1 Billion Rows
\`\`\`

לא תמיד כדאי לשמור הכול יחד.

מחלקים לחלקים:

\`\`\`text
Events_2024
Events_2025
Events_2026
\`\`\`

או לפי משתמשים.

זה נקרא Partitioning.

המטרה: חיפוש מהיר יותר וניהול קל יותר.`),
    seriesPost(6, SERIES, 'Cache כשכבה', `לא כל מידע צריך להגיע מה-DB.

מבנה נפוץ:

\`\`\`text
App
 ↓
Cache
 ↓
Database
\`\`\`

אם הנתון כבר ב-Cache:

\`\`\`text
1 ms
\`\`\`

במקום:

\`\`\`text
50 ms
\`\`\`

מערכות גדולות קוראות ל-Cache הרבה יותר מאשר ל-DB.`),
    seriesPost(7, SERIES, 'ארכיון', `לא כל מידע צריך להישאר "חם".

לדוגמה:

• הזמנות מלפני 10 שנים
• לוגים ישנים
• אירועים היסטוריים

אפשר להעביר לארכיון:

\`\`\`text
Hot Data
↓
Warm Data
↓
Archive
\`\`\`

כך המערכת נשארת מהירה.`),
    seriesPost(8, SERIES, 'הצפנה ו-PII', `מידע רגיש דורש הגנה מיוחדת.

PII = Personally Identifiable Information

למשל:

• אימייל
• טלפון
• כתובת
• תעודת זהות

לרוב:

• מצפינים מידע רגיש
• מגבילים גישה
• שומרים Audit Logs

לא כל מפתח בחברה צריך לראות הכול.`),
    seriesPost(9, SERIES, 'Migrations', `המערכת חיה ומתפתחת.

לפעמים צריך:

\`\`\`text
ALTER TABLE users
ADD COLUMN phone
\`\`\`

במערכות גדולות לא משנים DB ידנית.

משתמשים ב-Migrations:

• גרסאות
• היסטוריה
• rollback

בדומה ל-Git עבור הסכמה.`),
    seriesPost(10, SERIES, 'סיכום', `שמירת מידע בצורה חכמה היא שילוב של:

\`\`\`text
Schema
↓
Normalization
↓
Keys
↓
Indexes
↓
Partitioning
↓
Cache
↓
Archive
↓
Encryption
↓
Migrations
\`\`\`

המטרה היא לא רק "לשמור מידע".

המטרה היא שהמידע יהיה:

• נכון
• עקבי
• מאובטח
• מהיר לחיפוש
• וניתן להרחבה גם כשהמערכת גדלה ממאות משתמשים למאות מיליונים.

זו בדיוק הסיבה שבמערכות גדולות, תכנון מסד הנתונים הוא לא פרט טכני קטן — אלא אחד הגורמים המרכזיים שקובעים אם המערכת תצליח לגדול לאורך שנים.`),
  ],
}
