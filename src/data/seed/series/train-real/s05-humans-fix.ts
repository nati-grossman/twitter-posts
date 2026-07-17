import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך בני אדם מתקנים מודלים?'

export const trainRealHumansFix: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא יד ידנית', `**לא** משנים weights ביד — **דאטה** + **אימון** + **כללים**.`),
    seriesPost(2, SERIES, 'דירוג זוגות', `תשובה A vs B — **איזו** טובה — **אלפים** כך — **reward**.`),
    seriesPost(3, SERIES, 'Red team', `מנסים **לשבור** — jailbreak — **תיעוד** — **תיקון** בדאטה.`),
    seriesPost(4, SERIES, 'Policy', `רשימות **אסור** — **מסננים** פלט — **לא** אימון — **שכבה** מוצר.`),
    seriesPost(5, SERIES, 'דוגמאות זהב', `שאלות-תשובות **מושלמות** — **SFT** — **מומחים** כותבים.`),
    seriesPost(6, SERIES, 'הסרה', `דאטה **רעיל** — **הוצאה** — **retrain** חלקי — **יקר**.`),
    seriesPost(7, SERIES, 'System prompt', `הוראות **בזמן** ריצה — **לא** אימון — **מהיר** — **זמני**.`),
    seriesPost(8, SERIES, 'גרסאות', `GPT-4 → 4o — **איטרציה** — **משוב** מיליונים — **מחזור**.`),
    seriesPost(9, SERIES, 'מגבלה', `לא **מתקן** הכל — **hallucination** — **עדיין** — **בדיקה** חיצונית.`),
    seriesPost(10, SERIES, 'סיכום', `**“תיקון” = דאטה חדש, דירוגים, מדיניות, red team — לא כפתור “תקן באג”.**

אדם **מכוון** — **לא** מתכנת weights.`),
  ],
}
