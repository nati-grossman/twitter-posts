import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה Session?'

export const secSession: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מושג שרת', `Session הוא דרך של השרת "לזכור" משתמש מסוים בין בקשות.

כי HTTP עצמו לא זוכר כלום,
צריך שכבה נוספת שתיצור המשכיות.

Session הוא בדיוק השכבה הזאת.`),
    seriesPost(2, SERIES, 'נוצר ב-login', `בדרך כלל Session נוצר אחרי התחברות מוצלחת.

התהליך:

• אתה מתחבר
• השרת מאמת אותך
• נוצר Session חדש עבורך
• ואתה מקבל מזהה (Session ID)

מאותו רגע אתה "מוכר" למערכת.`),
    seriesPost(3, SERIES, 'אחסון', `ה־Session עצמו נשמר בצד השרת.

למשל:

• בזיכרון (RAM)
• בדאטהבייס
• או ב־Redis

ובדפדפן נשמר רק מזהה קטן (cookie).

כל בקשה שולחת את ה־ID,
והשרת שולף את המידע המתאים.`),
    seriesPost(4, SERIES, 'Timeout', `Sessions לא נשארים לנצח.

יש להם זמן תפוגה:

• אחרי זמן ללא פעילות
• או אחרי פרק זמן קבוע

זה חשוב לאבטחה,
כדי שמישהו לא ישתמש בחשבון ישן פתוח.`),
    seriesPost(5, SERIES, 'Session מול JWT', `יש שתי גישות:

**Session:**

• השרת שומר מידע
• הדפדפן מחזיק ID בלבד

**JWT:**

• המידע נמצא בתוך הטוקן עצמו
• השרת לא חייב לשמור מצב

Session = stateful
JWT = stateless`),
    seriesPost(6, SERIES, 'Session fixation', `זו מתקפת אבטחה.

הרעיון:

תוקף מנסה לגרום לך להשתמש ב־Session ID שהוא כבר מכיר.

אם המערכת לא מגנה על זה —
הוא יכול "להשתלט" על התחברות שלך.

לכן מערכות מחליפות Session אחרי login.`),
    seriesPost(7, SERIES, 'עגלת קניות', `Session משמש להרבה דברים מעבר ל-login.

למשל:

• עגלת קניות
• התקדמות בטופס
• מצב זמני של משתמש

כלומר:
כל מידע זמני שצריך לזכור בזמן ביקור.`),
    seriesPost(8, SERIES, 'הרבה sessions', `משתמש אחד יכול להחזיק כמה sessions:

• מחשב
• טלפון
• טאבלט

כל מכשיר יוצר session נפרד.

כך ניתן גם לנהל:
"התנתק מכל המכשירים".`),
    seriesPost(9, SERIES, 'סיום session', `Session יכול להסתיים בכמה דרכים:

• logout
• timeout
• מחיקה ידנית מהשרת

ברגע שזה קורה:
ה־Session ID כבר לא תקף.`),
    seriesPost(10, SERIES, 'סיכום', `Session הוא מנגנון שמאפשר לשרת לזכור משתמש בין בקשות.

הוא כולל:

• יצירה אחרי login
• שמירה בצד שרת
• זיהוי דרך cookie
• זמן תפוגה
• וניהול מצבים זמניים

בפועל:
Session הוא אחת הדרכים המרכזיות להפוך אינטרנט "שכחן" למערכת שמסוגלת לנהל משתמשים אמיתיים לאורך זמן.`),
  ],
}
