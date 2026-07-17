import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה permissions באתרים?'

export const defensePermissions: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מי רשאי לעשות מה', `Permissions (הרשאות) קובעות:

• מה משתמש יכול לראות
• מה הוא יכול לשנות
• לאיזה פעולות יש לו גישה

זה אחד הבסיסים הכי חשובים באבטחת מערכות.`),
    seriesPost(2, SERIES, 'RBAC', `RBAC = Role Based Access Control

במקום לתת הרשאות לכל משתמש בנפרד,
נותנים תפקידים:

• Admin
• User
• Editor

וכל תפקיד מקבל הרשאות מוגדרות מראש.

זה הרבה יותר קל לניהול.`),
    seriesPost(3, SERIES, 'ACL', `ACL = Access Control List

כאן מסתכלים על "אובייקט":

• קובץ
• פוסט
• API endpoint

וכל אובייקט מגדיר מי יכול לגשת אליו.

לדוגמה:
"רק משתמשים X ו-Y יכולים לערוך את הפוסט הזה".`),
    seriesPost(4, SERIES, 'OAuth scopes', `כשאתה מתחבר עם "Login with Google":

לא נותנים גישה מלאה לחשבון.

במקום זה יש scopes:

• לקרוא אימיילים
• לראות פרופיל
• לא לשלוח הודעות

כל scope הוא הרשאה מוגבלת.`),
    seriesPost(5, SERIES, 'API keys', `API key מזהה אפליקציה או משתמש.

אבל חשוב:

• הוא לא תמיד "זהות מלאה"
• הוא לא תמיד מספיק להרשאות עדינות

לכן משלבים אותו עם tokens והרשאות נוספות.`),
    seriesPost(6, SERIES, 'IDOR', `IDOR = Insecure Direct Object Reference

זה באג הרשאות נפוץ:

משתמש משנה ID בבקשה:

\`\`\`
/user/123
→ /user/124
\`\`\`

אם אין בדיקת הרשאה — הוא רואה מידע של אחרים.`),
    seriesPost(7, SERIES, 'Frontend ≠ אבטחה', `טעות נפוצה:

לחשוב שאם כפתור לא מוצג — אין גישה.

אבל:

• כל בדיקת הרשאה חייבת להיות בשרת
• Frontend רק UI

האקר יכול לעקוף את ה-UI בקלות.`),
    seriesPost(8, SERIES, 'מובייל', `באפליקציות מובייל זה דומה:

• גם שם יש tokens
• גם שם חייבים בדיקות שרת
• גם שם אפשר לנתח תעבורה

האפליקציה לא "מאובטחת יותר" רק כי היא native.`),
    seriesPost(9, SERIES, 'Zero Trust', `גישה מודרנית:

Zero Trust = לא סומכים על אף חלק במערכת אוטומטית.

כל בקשה נבדקת מחדש:

• מי המשתמש?
• מה מותר לו?
• מאיפה הבקשה הגיעה?

גם בתוך המערכת עצמה — לא סומכים "כי זה פנימי".`),
    seriesPost(10, SERIES, 'סיכום', `Permissions הם מערכת הכללים שקובעת מה מותר לכל משתמש או מערכת לעשות.

הם מבוססים על:

• תפקידים (RBAC)
• אובייקטים (ACL)
• scopes ב-OAuth
• tokens ו-API keys
• בדיקות שרת (לא רק UI)
• גישה של Zero Trust

בשורה התחתונה:
בלי permissions נכונים — כל מערכת אינטרנט הופכת להיות "פתוחה לכולם", וזה מתכון ישיר לפריצות ודליפות מידע.`),
  ],
}
