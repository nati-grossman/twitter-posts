import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה prediction?'

export const aiBasicsPrediction: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'חיזוי', `**Prediction** — ניחוש **מבוסס מודל** — לא בהכרח עתיד — “מה התווית?” — **classification**.`),
    seriesPost(2, SERIES, 'הסתברות', `“85% חתול” — **לא** ודאות — **התפלגות** — **סף** — מעל 50% = חתול.`),
    seriesPost(3, SERIES, 'רגרסיה', `מחיר דירה — **מספר** רציף — **לא** קטגוריה — **אותו** מנגנון.`),
    seriesPost(4, SERIES, 'Inference time', `קלט חדש → **forward pass** — **מילי-שניות** עד **שניות** — **GPU** — **latency**.`),
    seriesPost(5, SERIES, 'Batch', `1000 בבת אחת — **יעיל** — **שרת** — לא רק משתמש אחד.`),
    seriesPost(6, SERIES, 'Confidence מזויף', `מודל **בטוח** וטועה — **calibration** — **לא** לסמוך על “99%”.`),
    seriesPost(7, SERIES, 'מול הסתברות אמיתית', `חיזוי מזג — **פיזיקה**. spam — **דפוס** — **סוגי אי-ודאות** שונים.`),
    seriesPost(8, SERIES, 'Online learning', `מעדכנים **תוך כדי** שימוש — **זהיר** — drift — **נדיר** ב-LLM גדול.`),
    seriesPost(9, SERIES, 'Ensemble', `כמה מודלים **מצביעים** — **ממוצע** — **יציב** יותר — **יקר**.`),
    seriesPost(10, SERIES, 'סיכום', `**Prediction = פלט מודל על קלט חדש — לרוב עם הסתברות, לא אמת מוחלטת.**

Production = **מה עושים** עם החיזוי.`),
  ],
}
