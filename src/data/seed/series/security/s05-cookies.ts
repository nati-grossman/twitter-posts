import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה Cookies?'

export const secCookies: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'פתקית מהשרת', `Cookie הוא מידע קטן שהשרת "שולח" לדפדפן,
והדפדפן שומר ושולח בחזרה בכל בקשה.

אפשר לחשוב על זה כמו פתק:

"זכור אותי בפעם הבאה שאתה מגיע"

זה מה שמאפשר לאתרים לזכור אותך בין ביקורים.`),
    seriesPost(2, SERIES, 'למה לא localStorage לכל דבר', `גם Cookies וגם localStorage שומרים מידע בדפדפן,
אבל יש הבדל חשוב:

Cookies נשלחים אוטומטית לשרת בכל בקשה.

localStorage לא נשלח בכלל.

לכן Cookies משמשים לדברים שהשרת צריך לראות כל הזמן,
כמו התחברות.`),
    seriesPost(3, SERIES, 'HttpOnly', `HttpOnly הוא דגל אבטחה חשוב.

כש-cookie מוגדר כ־HttpOnly:

• JavaScript לא יכול לקרוא אותו
• רק השרת יכול לקבל אותו

זה מגן מפני מתקפות כמו XSS,
שבהן תוקף מנסה לגנוב מידע דרך קוד בדפדפן.`),
    seriesPost(4, SERIES, 'Secure ו-SameSite', `עוד שני דגלים חשובים:

**Secure**

• ה-cookie נשלח רק ב־HTTPS

**SameSite**

• קובע מתי cookie נשלח בין אתרים שונים

זה עוזר למנוע מתקפות כמו CSRF,
שבהן אתר אחר מנסה "להשתמש" בזהות שלך.`),
    seriesPost(5, SERIES, 'תוקף expiration', `Cookies לא חייבים להיות קבועים.

אפשר להגדיר להם:

• זמן תפוגה (expires)
• או זמן חיים (max-age)

כשפג התוקף:
הדפדפן מפסיק לשלוח אותם לשרת.`),
    seriesPost(6, SERIES, 'דומיין ו-Path', `Cookie לא תקף לכל האינטרנט.

אפשר להגביל אותו לפי:

• דומיין (example.com)
• נתיב ( /dashboard )

זה אומר ש-cookie של אתר אחד לא בהכרח יישלח לאתר אחר,
וגם לא לכל חלקי אותו אתר.`),
    seriesPost(7, SERIES, 'Third-party cookies', `אלו cookies שלא מגיעים מהאתר שאתה באמת נמצא בו.

למשל:
אתה גולש באתר חדשות,
אבל יש בו פרסומת מגוגל ששמה cookie.

זה משמש למעקב בין אתרים,
ולכן הוא שנוי במחלוקת.`),
    seriesPost(8, SERIES, 'GDPR ובאנר', `בגלל פרטיות,
חוקים כמו GDPR באירופה מחייבים:

• ליידע משתמשים על cookies
• לקבל הסכמה לשימוש מסוים

לכן אתה רואה כמעט בכל אתר:
"Accept cookies"

זה לא טכני בלבד — זה גם משפטי.`),
    seriesPost(9, SERIES, 'מחיקה', `אפשר למחוק cookies:

• דרך הדפדפן
• דרך קוד JavaScript (אם לא HttpOnly)
• או כשהם פגי תוקף

מחיקה של cookies לרוב אומרת:
אתה "מתנתק" מאתרים.`),
    seriesPost(10, SERIES, 'סיכום', `Cookies הם מנגנון שמאפשר לדפדפן לזכור מידע קטן עליך בין בקשות.

הם משמשים ל:

• התחברות (sessions)
• הגדרות משתמש
• מעקב וניתוח

אבל גם כוללים שכבות אבטחה ופרטיות כמו:

• HttpOnly
• Secure
• SameSite

בפועל, Cookies הם אחד היסודות שמאפשרים לאינטרנט "לזכור אותך" למרות ש־HTTP עצמו לא זוכר כלום.`),
  ],
}
