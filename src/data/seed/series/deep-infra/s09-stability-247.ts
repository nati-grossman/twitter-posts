import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מערכת שומרת על יציבות 24/7?'

export const deepInfraStability247: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, '24/7 לא אומר מושלם', `כשאומרים שמערכת עובדת 24/7, זה לא אומר שהיא אף פעם לא נופלת.

הכוונה היא:

> המערכת מתוכננת כך שגם כשמשהו נשבר, המשתמשים כמעט לא מרגישים.

מטרה אמיתית:

\`\`\`text
Failure is inevitable
Downtime is optional
\`\`\``),
    seriesPost(2, SERIES, 'Redundancy', `הכלל הראשון:

> אין רכיב יחיד שאם הוא נופל הכול נופל.

במקום:

\`\`\`text
App Server
\`\`\`

בונים:

\`\`\`text
Load Balancer
     ↓
Server A
Server B
Server C
\`\`\`

אם שרת אחד נופל, האחרים ממשיכים.`),
    seriesPost(3, SERIES, 'Health Checks', `איך יודעים ששרת מת?

כל כמה שניות המערכת בודקת:

\`\`\`http
GET /health
\`\`\`

אם השרת לא מגיב:

\`\`\`text
Healthy ❌
\`\`\`

מוציאים אותו ממעגל התעבורה.

המשתמשים לא נשלחים אליו יותר.`),
    seriesPost(4, SERIES, 'Rolling Update', `איך מעדכנים גרסה בלי להפיל מערכת?

לא עושים:

\`\`\`text
Stop Everything
Deploy
Start Everything
\`\`\`

אלא:

\`\`\`text
Server A → Update
Server B → Update
Server C → Update
\`\`\`

שרת אחד בכל פעם.

כך תמיד יש שרתים זמינים.`),
    seriesPost(5, SERIES, 'Monitoring', `מערכת שלא מנטרים היא מערכת עיוורת.

עוקבים אחרי:

\`\`\`text
CPU
Memory
Latency
Errors
Traffic
\`\`\`

דשבורדים מראים בזמן אמת אם משהו מתחיל להידרדר.`),
    seriesPost(6, SERIES, 'Incident Response', `גם עם כל ההגנות, תקלות קורות.

לכן יש תהליך מסודר:

\`\`\`text
Alert
↓
Investigation
↓
Mitigation
↓
Root Cause Analysis
\`\`\`

המטרה:

לא רק לתקן,
אלא למנוע את התקלה הבאה.`),
    seriesPost(7, SERIES, 'Rate Limiting', `משתמש או בוט יכולים להציף מערכת.

לכן מגבילים:

\`\`\`text
100 Requests / Minute
\`\`\`

לדוגמה:

\`\`\`text
Too Many Requests
429
\`\`\`

כך משתמש אחד לא מפיל את כולם.`),
    seriesPost(8, SERIES, 'Graceful Degradation', `כשיש עומס גדול:

לא חייבים להפיל הכול.

אפשר לכבות יכולות פחות חשובות:

\`\`\`text
Recommendations OFF
Chat OFF
Search ON
Checkout ON
\`\`\`

המערכת מצטמצמת במקום לקרוס.`),
    seriesPost(9, SERIES, 'Maintenance Window', `לפעמים חייבים לבצע עבודות תחזוקה.

במערכות קריטיות:

\`\`\`text
Sunday 02:00 AM
\`\`\`

או בשעות עם מעט משתמשים.

לפעמים אפילו מודיעים מראש:

> "ייתכנו הפרעות שירות קצרות."`),
    seriesPost(10, SERIES, 'סיכום', `מערכת יציבה 24/7 בנויה משכבות רבות:

\`\`\`text
Redundancy
↓
Health Checks
↓
Load Balancing
↓
Rolling Updates
↓
Monitoring
↓
Incident Response
↓
Rate Limiting
↓
Graceful Degradation
\`\`\`

העיקרון החשוב ביותר:

> יציבות לא מגיעה מזה שאין תקלות. יציבות מגיעה מזה שהמערכת מצפה לתקלות, מזהה אותן מהר, וממשיכה לעבוד גם כשהן קורות.

זו בדיוק החשיבה שמבדילה בין אפליקציה קטנה שרצה על שרת אחד לבין מערכות ענק כמו Google, Netflix, Amazon ו-Facebook שצריכות לשרת מיליוני משתמשים בכל שעה של כל יום.`),
  ],
}
