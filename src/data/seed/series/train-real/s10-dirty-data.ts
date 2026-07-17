import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'למה דאטה לא נקי הורס מודלים?'

export const trainRealDirtyData: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לומד הכל', `**כל** דפוס — גם **רעיל** — **אין** “התעלם” פנימי — **סטטיסטיקה**.`),
    seriesPost(2, SERIES, 'הזיות', `עובדות **שגויות** באינטרנט — **מודל** **מאמין** — **hallucination** מוגבר.`),
    seriesPost(3, SERIES, 'רעילות', `שנאה, פגיעה — **חוזר** — **jailbreak** קל — **מוצר** מת.`),
    seriesPost(4, SERIES, 'spam', `SEO, מילוי — **שפה** מעוותת — **איכות** יורדת — **מביך**.`),
    seriesPost(5, SERIES, 'כפילויות', `אותו **שקר** 1000 פעמים — **מחוזק** — **אמת** נדירה — **נדרס**.`),
    seriesPost(6, SERIES, 'PII', `דליפת פרטים — **בעיה** משפטית — **זיכרון** סטטיסטי — **סיכון**.`),
    seriesPost(7, SERIES, 'קוד זדוני', `malware בדאטה — **ממליץ** מסוכן — **סינון** קריטי.`),
    seriesPost(8, SERIES, 'עלות', `אימון **יקר** — **לזרוק** אחרי = **בזבוז** מיליונים — **מניעה**.`),
    seriesPost(9, SERIES, 'קשה לתקן', `אחרי pretrain — **הטיה** עמוקה — **צריך** RLHF כבד — **לא** מחיקה קלה.`),
    seriesPost(10, SERIES, 'סיכום', `**דאטה מלוכלך = מודל מלוכלך — אין קסם ניקוי אחרי trillion tokens.**

השקעה ב**צינור** — **הכרח**.`),
  ],
}
