import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה חוסר עקביות בתשובות?'

export const aiLimitsInconsistency: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**אותה** שאלה — **תשובות** שונות — **סתירה** — **לא** יציב.`),
    seriesPost(2, SERIES, 'Temperature', `>0 — **אקראי** — **מכוון** — **0** — **יותר** יציב — **לא** מושלם.`),
    seriesPost(3, SERIES, 'ניסוח', `מילים שונות — **משמעות** שונה — **רגיש** לפרומפט — **לא** עובדתית.`),
    seriesPost(4, SERIES, 'הקשר', `היסטוריה שונה — **תשובה** שונה — **תלוי** שיחה.`),
    seriesPost(5, SERIES, 'גרסה', `מודל **מתעדכן** — **התנהגות** משתנה — **תיעוד** קשה.`),
    seriesPost(6, SERIES, 'סתירה פנימית', `באותו תשובה — **כן** ו**לא** — **לוגיקה** חלשה.`),
    seriesPost(7, SERIES, 'בדיקות', `QA **קשה** — **flaky** — **לא** כמו קוד דטרמיניסטי.`),
    seriesPost(8, SERIES, 'מוצר', `משתמשים **מבולבלים** — **אמון** יורד — **ציפייה** שגויה.`),
    seriesPost(9, SERIES, 'הפחתה', `temperature נמוך — **schema** — **כלים** — **structured output**.`),
    seriesPost(10, SERIES, 'סיכום', `**חוסר עקביות = סטוכסטיקה + הקשר + חולשת היגיון — לא באג חד-פעמי.**

לproduction — **מבנה** פלט.`),
  ],
}
