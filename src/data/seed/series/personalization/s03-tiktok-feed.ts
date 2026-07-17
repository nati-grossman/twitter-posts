import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך טיקטוק בונה פיד?'

export const persTiktokFeed: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'For You Page', `**FYP** — לא רק עוקבים — **אלגוריתם** בוחר **מיליוני** סרטונים.`),
    seriesPost(2, SERIES, 'אותות חזקים', `צפית עד הסוף — **חיובי**. דילוג ב-0.3 שניות — **שלילי**. **מהיר**.`),
    seriesPost(3, SERIES, 're-watch', `צפית שוב — **מאוד** חיובי — **ממכר** — **מכוון**.`),
    seriesPost(4, SERIES, 'תגובות', `שיתוף, תגובה — **משקל** — **לא** רק צפייה.`),
    seriesPost(5, SERIES, 'embedding', `סרטון → **וקטור** — **דומה** למה שאהבת — **content**.`),
    seriesPost(6, SERIES, 'batch', `לא מחשבים **כל** וידאו — **מועמדים** — **דירוג** — **scale**.`),
    seriesPost(7, SERIES, 'cold start', `סרטון חדש — **מוצג** לקבוצה קטנה — **בודקים** — **מפוצץ** או מת.`),
    seriesPost(8, SERIES, 'filter bubble', `רק ריקוד — **מחזק** — **קשה** לצאת — **by design**.`),
    seriesPost(9, SERIES, 'לא רק AI גנרי', `מודלים **ייעודיים** — **אינטראקציה** — **לא** ChatGPT בפיד.`),
    seriesPost(10, SERIES, 'סיכום', `**טיקטוק = אותות מעורבות מהירים + embeddings + דירוג המוני — FYP מותאם אגרסיבית.**

**שניות** מגדירות **שעות** שלך.`),
  ],
}
