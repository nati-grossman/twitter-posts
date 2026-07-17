import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה database?'

export const buildingDatabase: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מחסן מסודר', `Database הוא פשוט:

> מערכת ששומרת מידע בצורה מסודרת, ניתנת לחיפוש ולעדכון.

\`\`\`text
Users, Orders, Products, Logs
\`\`\`

לא קובץ אקראי — אלא מערכת שמיועדת לניהול מידע בקנה מידה גדול.`),
    seriesPost(2, SERIES, 'SQL relational', `המודל הכי קלאסי:

\`\`\`text
Tables (טבלאות)
Rows (שורות)
Columns (עמודות)
\`\`\`

לדוגמה:

\`\`\`text
Users table
id | name | email
\`\`\`

שפות כמו SQL מאפשרות שאילתות:

\`\`\`sql
SELECT * FROM users WHERE id = 1;
\`\`\``),
    seriesPost(3, SERIES, 'NoSQL', `לא כל מידע מתאים לטבלאות.

NoSQL כולל מבנים שונים:

\`\`\`text
Document (JSON)
Key-Value
Graph
Columnar
\`\`\`

לדוגמה document:

\`\`\`json
{
  "id": 1,
  "name": "Avi",
  "posts": [...]
}
\`\`\``),
    seriesPost(4, SERIES, 'ORM', `ORM = Object Relational Mapping

זה גשר בין קוד למסד נתונים:

\`\`\`text
Python/JS Object ↔ Database Table
\`\`\`

במקום SQL:

\`\`\`python
user.name
\`\`\`

ה-ORM מתרגם לשאילתות SQL.`),
    seriesPost(5, SERIES, 'ACID', `כדי שמידע יהיה אמין:

\`\`\`text
A - Atomicity
C - Consistency
I - Isolation
D - Durability
\`\`\`

דוגמה:

> העברה בנקאית חייבת להצליח במלואה או להיכשל לגמרי.`),
    seriesPost(6, SERIES, 'אינדקס', `אינדקס = האצת חיפוש

\`\`\`text
בלי אינדקס → סריקה של כל הטבלה
עם אינדקס → קפיצה ישירה
\`\`\`

כמו תוכן עניינים בספר.`),
    seriesPost(7, SERIES, 'גיבוי', `מסדי נתונים חייבים להיות מוגנים:

• backup יומי
• replication
• point-in-time recovery

כי איבוד DB = איבוד מערכת שלמה.`),
    seriesPost(8, SERIES, 'לא בקובץ JSON אחד', `טעות נפוצה:

> "למה לא לשמור הכל בקובץ JSON אחד?"

בעיות:

• איטי מאוד
• אין concurrency
• אין indexing
• אין consistency

\`\`\`text
File ❌
Database system ✔
\`\`\``),
    seriesPost(9, SERIES, 'Data warehouse', `זה סוג מיוחד של DB:

\`\`\`text
Analytics / BI / Reports
\`\`\`

לא לעדכונים מהירים — אלא לשאלות גדולות כמו:

• כמה משתמשים פעילים?
• מגמות לאורך זמן`),
    seriesPost(10, SERIES, 'סיכום', `Database הוא לא רק "איפה ששומרים מידע", אלא מערכת מורכבת:

\`\`\`text
Schema
↓
Storage Engine
↓
Indexing
↓
Transactions (ACID)
↓
Query Engine
↓
Replication / Backup
\`\`\`

המטרה:

> לאפשר שמירה, שליפה ועדכון של מידע בצורה מהירה, אמינה וסקיילבילית — גם כשמדובר במיליוני או מיליארדי רשומות.`),
  ],
}
