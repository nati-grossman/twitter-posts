import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה load balancing?'

export const scaleLoadBalancing: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מפזר עומס', `Load Balancing (איזון עומסים) זה רעיון פשוט:

במקום ששרת אחד יקבל את כל הבקשות —
מפזרים אותן בין כמה שרתים.

כמו קופאי אחד מול כמה קופות בסופר.

המטרה:
לא להעמיס על נקודה אחת.`),
    seriesPost(2, SERIES, 'Round Robin', `שיטה בסיסית לחלוקת עומס:

כל בקשה הולכת לשרת הבא בתור:

• בקשה 1 → שרת A
• בקשה 2 → שרת B
• בקשה 3 → שרת C
• ואז חוזר להתחלה

פשוט, אבל לא תמיד חכם.`),
    seriesPost(3, SERIES, 'Least connections', `שיטה יותר חכמה:

הבקשה נשלחת לשרת עם הכי פחות חיבורים פעילים.

כלומר:
לא מחלקים שווה — מחלקים לפי עומס אמיתי.

זה עובד טוב כשבקשות לא שוות בזמן.`),
    seriesPost(4, SERIES, 'Health checks', `Load balancer לא סומך בעיוורון על שרתים.

הוא בודק כל הזמן:

• האם השרת חי?
• האם הוא מגיב מהר?
• האם יש שגיאות?

אם שרת נופל — הוא מוצא אותו מהסבב אוטומטית.`),
    seriesPost(5, SERIES, 'SSL termination', `במקום שכל שרת יפענח HTTPS בעצמו,
ה-load balancer עושה את זה במרכז.

הוא:

• מפענח את ה-SSL
• שולח הלאה תעבורה רגילה פנימית

זה מוריד עומס מהשרתים עצמם.`),
    seriesPost(6, SERIES, 'DNS level', `לפעמים האיזון קורה עוד לפני ההתחברות:

DNS מחזיר כתובות שונות לשרתים שונים.

לדוגמה:
משתמשים באירופה יקבלו שרת באירופה.

זה Load Balancing פשוט אבל פחות מדויק.`),
    seriesPost(7, SERIES, 'Sticky session', `לפעמים רוצים שמשתמש יחזור לאותו שרת.

למשל:

• עגלת קניות
• session בזיכרון

אז ה-load balancer "מדביק" משתמש לשרת מסוים.

אבל זה יכול ליצור חוסר איזון.`),
    seriesPost(8, SERIES, 'Kubernetes', `בעולם של containers:

Kubernetes עושה load balancing אוטומטי.

• מפזר pods
• מוסיף/מוריד שרתים
• משלב עם service discovery

זה חלק מרכזי במערכות ענן מודרניות.`),
    seriesPost(9, SERIES, 'Bottleneck', `בלי load balancing:

• שרת אחד נהיה צוואר בקבוק
• כל המערכת נופלת כשהוא קורס

עם load balancing:
העומס מתחלק → המערכת יציבה יותר.`),
    seriesPost(10, SERIES, 'סיכום', `Load Balancing הוא מנגנון שמפזר בקשות בין כמה שרתים כדי:

• למנוע עומס על שרת אחד
• לשפר ביצועים
• לשפר זמינות
• להתמודד עם גידול משתמשים

ובפועל:
זה אחד היסודות הכי חשובים בכל מערכת אינטרנט בקנה מידה גדול.`),
  ],
}
