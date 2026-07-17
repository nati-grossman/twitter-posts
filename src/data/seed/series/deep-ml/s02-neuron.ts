import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך נוירון מלאכותי עובד?'

export const deepMlNeuron: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'יחידת בסיס', `**נוירון** — מקבל **קלטים** — מכפיל במשקלים — **מסכם** — **פונקציית הפעלה**.`),
    seriesPost(2, SERIES, 'weighted sum', `x1×w1 + x2×w2 + … + **bias** — **מספר אחד** — לפני activation.`),
    seriesPost(3, SERIES, 'activation', `ReLU — **אם שלילי → 0** — **אם חיובי → עובר** — **לא לינארי** — **קריטי**.`),
    seriesPost(4, SERIES, 'למה לא לינארי', `רק לינארי — **שכבות** לא עוזרות — **activation** = **עומק אמיתי**.`),
    seriesPost(5, SERIES, 'sigmoid ו-softmax', `הסתברות 0–1 — **סיווג** — softmax — **סכום 1** על קטגוריות.`),
    seriesPost(6, SERIES, 'אנלוגיה', `“כמה כל קלט **חשוב**” — משקל גבוה — **מדגיש** — **לומד** מדאטה.`),
    seriesPost(7, SERIES, 'מיליונים יחד', `נוירון אחד — **פשוט**. מיליון — **יכול** זיהוי פנים — **דפוסים**.`),
    seriesPost(8, SERIES, 'dead neuron', `ReLU תמיד 0 — **לא לומד** — **אתחול** זהיר — **Leaky ReLU**.`),
    seriesPost(9, SERIES, 'biological gap', `מוח — **סינapses** מורכבים — **מודל** — **קירוב** — **עובד** בלי להיות זהה.`),
    seriesPost(10, SERIES, 'סיכום', `**נוירון = סכום משוקלל + הפעלה לא-לינארית.**

רשת = **הרבה** כאלה ב**שכבות**.`),
  ],
}
