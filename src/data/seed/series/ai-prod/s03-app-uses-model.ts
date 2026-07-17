import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך אפליקציה משתמשת במודל?'

export const aiProdAppUsesModel: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'ארכיטקטורה', `React/App → **Backend** → **API** AI — **לא** מפתח בדפדפן — **אבטחה**.`),
    seriesPost(2, SERIES, 'פרומפט', `אפליקציה **בונה** messages — **הקשר** — **תבנית** — **שליטה**.`),
    seriesPost(3, SERIES, 'תשובה', `מקבלת טקסט — **מציגה** — **שומרת** DB — **היסטוריה** — **UI**.`),
    seriesPost(4, SERIES, 'כלים', `Backend **קורא** DB, API — **מזין** למודל — **function calling**.`),
    seriesPost(5, SERIES, 'RAG', `שאלה → **embedding** → **חיפוש** → **מסמכים** בפרומפט — **אפליקציה**.`),
    seriesPost(6, SERIES, 'Timeout', `30s — **ביטול** — **ספינר** — **retry** — **UX**.`),
    seriesPost(7, SERIES, 'Fallback', `מודל **קטן** אם כבד — **שגיאה** ידידותית — **לא** קריסה.`),
    seriesPost(8, SERIES, 'לוגים', `לא שומרים **סודות** — **PII** — **אנונימיזציה** — **תאימות**.`),
    seriesPost(9, SERIES, 'עלות', `מגבילים **אורך** — **סיכום** — **cache** תשובות — **מוצר**.`),
    seriesPost(10, SERIES, 'סיכום', `**אפליקציה = בונה פרומפט, קורא API, מציגה, שומרת — המודל רק מנבא טקסט.**

הלוגיקה **שלך** — **לא** של GPT.`),
  ],
}
