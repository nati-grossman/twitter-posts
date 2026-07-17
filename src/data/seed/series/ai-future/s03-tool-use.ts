import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה tool use במודלים?'

export const aiFutureToolUse: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**Tool use** — מודל **קורא** לפונקציות חיצוניות — **מחשבון**, DB, API — **לא** רק טקסט.`),
    seriesPost(2, SERIES, 'למה', `מתמטיקה, **עובדות** — **LLM** חלש — **כלי** **מדויק**.`),
    seriesPost(3, SERIES, 'Schema', `רשימת **כלים** + תיאור — **JSON schema** — **מודל** בוחר — **structured**.`),
    seriesPost(4, SERIES, 'שרת מריץ', `המודל **לא** מריץ קוד — **אתה** — **בידוד** — **אבטחה**.`),
    seriesPost(5, SERIES, 'דוגמאות', `weather API, SQL, **Python** sandbox — **מגוון**.`),
    seriesPost(6, SERIES, 'ריבוי', `כמה **כלים** ברצף — **אורקסטרציה** — **agent**.`),
    seriesPost(7, SERIES, 'טעויות', `קורא **כלי** לא נכון — **פרמטרים** שגויים — **ולידציה** חובה.`),
    seriesPost(8, SERIES, 'MCP', `Model Context Protocol — **סטנדרט** כלים — **2024–25** — **אקוסיסטם**.`),
    seriesPost(9, SERIES, 'UX', `משתמש **לא** רואה — **לוגים** — **שקיפות** לפעמים — **אמון**.`),
    seriesPost(10, SERIES, 'סיכום', `**Tool use = המודל בוחר פעולה, השרת מבצע, התוצאה חוזרת לפרומפט.**

גשר בין **שפה** ל**עולם אמיתי**.`),
  ],
}
