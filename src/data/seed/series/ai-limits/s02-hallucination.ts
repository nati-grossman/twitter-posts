import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה hallucination?'

export const aiLimitsHallucination: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**Hallucination** — פלט **נשמע** אמין — **לא** תואם **מציאות** או מקור.`),
    seriesPost(2, SERIES, 'לא ראייה', `לא כמו **הזיהה** אנושית — **מטאפורה** — **טקסט** שגוי.`),
    seriesPost(3, SERIES, 'סוגים', `עובדה, מקור, קוד, תאריך — **כולם** — **סגנון** זהה — **תוכן** שגוי.`),
    seriesPost(4, SERIES, 'Confident', `**בטוח** — **מקור** מדומיין — **DOI** מזויף — **מסוכן**.`),
    seriesPost(5, SERIES, 'מדידה', `בנצמרקים — **אחוז** — **לא** אפס — **משתפר** — **לא** נעלם.`),
    seriesPost(6, SERIES, 'RAG', `מקטין — **לא** מבטל — **retrieval** שגוי — **hallucination** על מסמך.`),
    seriesPost(7, SERIES, 'Grounding', `כלי, חיפוש — **עוגן** — **מגביל** — **עדיין** טועה.`),
    seriesPost(8, SERIES, 'משפטי', `ייעוץ רפואי/משפטי — **אחריות** אנושית — **לא** המודל.`),
    seriesPost(9, SERIES, 'מחקר', `detection, uncertainty — **פעיל** — **אין** פתרון סופי — **2025**.`),
    seriesPost(10, SERIES, 'סיכום', `**Hallucination = תשובה חלקה או מלאה שלא נשענת על עובדה — סימן שזה LLM, לא מומחה.**

תמיד **אמת** חיצונית.`),
  ],
}
