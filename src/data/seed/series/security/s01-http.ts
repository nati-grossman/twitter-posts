import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה HTTP?'

export const secHttp: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שפת דפדפנים', `HTTP הוא הפרוטוקול שמאפשר לדפדפן ולשרת "לדבר".

זה לא שפת תכנות,
אלא שפה מוסכמת להעברת בקשות ותשובות.

כל פעם שאתה נכנס לאתר —
HTTP הוא מה שמזיז את המידע בין הצדדים.`),
    seriesPost(2, SERIES, 'שורת בקשה', `כל תקשורת מתחילה ב־Request.

למשל:

• GET /home
• POST /login

זו שורה שמגדירה:
מה רוצים מהשרת.

היא הבסיס לכל פעולה באינטרנט.`),
    seriesPost(3, SERIES, 'Methods', `HTTP מגדיר סוגי פעולות:

• GET → קבלת מידע
• POST → שליחה
• PUT → עדכון
• DELETE → מחיקה

כל method אומר לשרת:
"איזה סוג פעולה אתה מבקש לבצע".`),
    seriesPost(4, SERIES, 'Status codes', `השרת עונה עם קוד סטטוס:

• 200 → הצלחה
• 404 → לא נמצא
• 500 → שגיאת שרת
• 401 → לא מורשה

זה כמו "תשובת מצב" לבקשה שלך.`),
    seriesPost(5, SERIES, 'Headers', `Headers הם מידע נוסף על הבקשה או התשובה.

למשל:

• סוג תוכן (JSON, HTML)
• שפה
• cookies
• אבטחה

זה "מטא-מידע" שעוזר להבין איך לטפל בתוכן.`),
    seriesPost(6, SERIES, 'Body', `Body הוא התוכן עצמו של הבקשה או התשובה.

למשל:

• נתוני טופס
• JSON מאפליקציה
• HTML של דף

אם headers הם מעטפת —
body הוא המידע האמיתי.`),
    seriesPost(7, SERIES, 'Stateless', `HTTP הוא Stateless.

כל בקשה עומדת בפני עצמה.

השרת לא "זוכר" בקשות קודמות,
אלא אם מוסיפים שכבות כמו:

• cookies
• sessions
• tokens

זו אחת הסיבות שמערכות אינטרנט בנויות בשכבות.`),
    seriesPost(8, SERIES, 'HTTP/2 ו-HTTP/3', `גרסאות חדשות של HTTP שיפרו ביצועים:

HTTP/2:

• כמה בקשות במקביל
• חיבור אחד

HTTP/3:

• מבוסס QUIC
• מהיר יותר ועמיד יותר לבעיות רשת

המטרה:
להפוך את האינטרנט למהיר ויציב יותר.`),
    seriesPost(9, SERIES, 'API', `HTTP לא משמש רק לאתרים,
אלא גם ל־APIים.

כל אפליקציה כמעט היום משתמשת ב־HTTP כדי:

• לקבל נתונים
• לשלוח מידע
• לתקשר בין מערכות

לדוגמה:
אפליקציה בטלפון מדברת עם שרת דרך HTTP.`),
    seriesPost(10, SERIES, 'סיכום', `HTTP הוא הפרוטוקול שמאפשר תקשורת בין דפדפן לשרת.

הוא מבוסס על:

• בקשות ותשובות
• methods
• status codes
• headers ו־body
• מודל stateless

ובפועל הוא הבסיס של כמעט כל דבר שאתה עושה באינטרנט.`),
  ],
}
