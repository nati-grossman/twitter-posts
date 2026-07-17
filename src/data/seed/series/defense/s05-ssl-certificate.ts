import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה SSL certificate?'

export const defenseSslCertificate: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'SSL, TLS, HTTPS', `מה שנקרא "SSL certificate" היום הוא בפועל תעודת **TLS**.

והקשר הוא:

• HTTP = תקשורת רגילה
• HTTPS = HTTP בתוך TLS
• TLS משתמש בתעודה כדי לזהות את האתר`),
    seriesPost(2, SERIES, 'מה התעודה עושה', `התעודה עושה שני דברים עיקריים:

• מוכיחה מי האתר (זהות)
• מאפשרת הצפנה של התקשורת

כלומר:
גם אימות וגם הצפנה.`),
    seriesPost(3, SERIES, 'Certificate Authority', `התעודה לא "נוצרת סתם".

היא נחתמת על ידי גוף אמין שנקרא:

**CA — Certificate Authority**

דוגמאות:

• Let's Encrypt
• DigiCert
• GlobalSign

הדפדפן סומך עליהם מראש.`),
    seriesPost(4, SERIES, 'Handshake', `כשנכנסים לאתר HTTPS קורה "Handshake":

• הדפדפן מבקש תעודה
• השרת שולח אותה
• הדפדפן בודק שהיא תקפה
• נקבע מפתח הצפנה משותף

רק אחרי זה מתחילה תקשורת אמיתית.`),
    seriesPost(5, SERIES, 'מה מוגן', `ההצפנה מגנה על:

• סיסמאות
• טפסים
• מידע אישי
• כל התקשורת בין דפדפן לשרת

אבל:
היא לא מגנה על האתר עצמו מפני באגים או פריצה לשרת.`),
    seriesPost(6, SERIES, 'תפוגה וחידוש', `לתעודות יש תוקף קצר יחסית:

• בדרך כלל 3 חודשים עד שנה
• צריך לחדש אותן כל הזמן

זה מונע שימוש ארוך טווח בתעודות שנגנבו.`),
    seriesPost(7, SERIES, 'סוגי אימות', `יש רמות שונות של תעודות:

• **DV (Domain Validation)** — רק בדיקת בעלות על דומיין
• **OV (Organization Validation)** — בדיקת ארגון
• **EV (Extended Validation)** — בדיקות עמוקות יותר (פחות נפוץ היום)`),
    seriesPost(8, SERIES, 'Mixed content', `בעיה נפוצה:

אתר HTTPS שמטען תוכן HTTP.

זה נקרא:

• Mixed content

וזה יכול להחליש את האבטחה או לגרום לדפדפן לחסום חלקים מהדף.`),
    seriesPost(9, SERIES, 'לא שווה "אמיתי"', `חשוב להבין:

• תעודה לא אומרת שהאתר "טוב"
• רק אומרת שהוא מאומת ומוצפן

גם אתר פישינג יכול להיות עם HTTPS.`),
    seriesPost(10, SERIES, 'סיכום', `SSL/TLS certificate הוא מנגנון שמאפשר:

• אימות זהות של אתר
• יצירת חיבור מוצפן בין דפדפן לשרת

הוא מבוסס על:

• Certificate Authorities
• תהליך Handshake
• הצפנה סימטרית ואסימטרית

בשורה התחתונה:
התעודה לא "מגינה על האתר", אלא על **התקשורת בינך לבין האתר** ומוודאת שאתה מדבר עם השרת הנכון בצורה מוצפנת.`),
  ],
}
