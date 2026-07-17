import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך בונים אתר ראשון מאפס?'

export const buildingFirstSite: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מה באמת בונים', `כשאומרים "לבנות אתר", בדרך כלל מתחילים ממשהו פשוט:

• דף בית
• טקסט
• תמונות
• כפתורים וקישורים

בהתחלה אין צורך במסד נתונים, משתמשים או שרתים מורכבים.

המטרה היא להבין את הבסיס.`),
    seriesPost(2, SERIES, 'HTML — שלד', `HTML הוא המבנה של האתר.

הוא מגדיר:

• כותרות
• פסקאות
• תמונות
• טפסים
• קישורים

אפשר לחשוב עליו כעל השלד של הבית.

בלי HTML אין אתר.`),
    seriesPost(3, SERIES, 'CSS — מראה', `CSS אחראי על העיצוב:

• צבעים
• ריווחים
• גדלים
• מיקום אלמנטים
• התאמה למובייל

אם HTML הוא השלד,
CSS הוא הצבע, הריצוף והריהוט.`),
    seriesPost(4, SERIES, 'JavaScript — התנהגות', `JavaScript מוסיף חיים לדף:

• לחיצות על כפתורים
• פתיחת תפריטים
• שליחת טפסים
• טעינת מידע

בלי JavaScript האתר יכול להיות סטטי לחלוטין.`),
    seriesPost(5, SERIES, 'מקומי לפני פרסום', `לפני שמעלים אתר לאינטרנט עובדים מקומית:

\`\`\`text
index.html
style.css
script.js
\`\`\`

פותחים בדפדפן ורואים את התוצאה מיד.

כל הפיתוח מתחיל על המחשב שלך.`),
    seriesPost(6, SERIES, 'Hosting', `כדי שאנשים אחרים יראו את האתר צריך Hosting.

כלומר:

• מחשב שמחובר לאינטרנט
• שיכול להגיש את הקבצים 24/7

אפשר להשתמש בשירותים כמו:

• GitHub Pages
• Netlify
• Vercel

לאתר ראשון זה בדרך כלל מספיק.`),
    seriesPost(7, SERIES, 'דומיין', `במקום כתובת טכנית ארוכה אפשר לקנות דומיין:

\`\`\`text
mywebsite.com
\`\`\`

הדומיין מחובר לשרת דרך DNS.

כך אנשים יכולים להגיע לאתר דרך שם קל לזכירה.`),
    seriesPost(8, SERIES, 'מתי צריך Backend', `אתר סטטי לא צריך Backend.

Backend נדרש כשיש:

• התחברות משתמשים
• מסד נתונים
• שמירת מידע
• תשלומים
• API

בשלב הזה נכנסים לעולם של שרתים.`),
    seriesPost(9, SERIES, 'כלים מודרניים', `אחרי שמבינים HTML, CSS ו-JS רגיל, אפשר לעבור לכלים מודרניים:

• React
• Next.js
• TypeScript
• Tailwind

אבל חשוב:
ללמוד קודם את היסודות.

מי שמדלג ישר לפריימוורק בדרך כלל מתקשה להבין מה באמת קורה.`),
    seriesPost(10, SERIES, 'סיכום — מסלול ראשון', `המסלול הכי נכון:

\`\`\`text
HTML
↓
CSS
↓
JavaScript
↓
Git
↓
Hosting
↓
Domain
↓
Backend
↓
React / Next.js
\`\`\`

בשורה התחתונה:

אתר ראשון הוא בסך הכול שלושה קבצים פשוטים:

\`\`\`text
index.html
style.css
script.js
\`\`\`

אבל מתוך שלושת הקבצים האלה אפשר לצמוח עד לבניית מערכות ענק כמו Gmail, Netflix או Facebook.`),
  ],
}
