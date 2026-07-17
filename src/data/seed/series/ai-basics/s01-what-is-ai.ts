import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה בכלל בינה מלאכותית?'

export const aiBasicsWhatIsAi: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא רובוט בסרט', `**AI** — Artificial Intelligence — **מחשב שמבצע משימות** שנראות “חכמות” — זיהוי, החלטה, יצירה — **בלי** לתכנת כל מקרה ידנית.`),
    seriesPost(2, SERIES, 'רחב מדי', `מסנן ספאם, GPS, המלצות נטפליקס, ChatGPT — **כולם** תחת מטריית AI — **לא** מוצר אחד.`),
    seriesPost(3, SERIES, 'מטרה: דפוסים', `למצוא **קשר** בנתונים — “אם X אז לרוב Y” — **חיזוי**, **סיווג**, **יצירה** — לא “חשיבה אנושית”.`),
    seriesPost(4, SERIES, 'מול אוטומציה רגילה', `if/else — **כללים ידניים**. AI — **לומד** מהדוגמאות — **גמיש** — **פחות צפוי** לפעמים.`),
    seriesPost(5, SERIES, 'Weak vs Strong', `**צר AI** — משימה אחת (שחמט). **חזק** — AGI — **תיאורטי** — לא קיים — **מיתוסים** מבלבלים.`),
    seriesPost(6, SERIES, 'ML בתוך AI', `היום **רוב** AI = **Machine Learning** — למידה מנתונים — לא מערכות מומחה ישנות בלבד.`),
    seriesPost(7, SERIES, 'לא קסם', `**סטטיסטיקה + חישוב** — **מגבלות** — bias, טעויות — **כלי** — לא אורקל.`),
    seriesPost(8, SERIES, 'במוצר', `כפתור “AI” — לעיתים **מודל** — לעיתים **כללים** — **שאל** מה בפנים.`),
    seriesPost(9, SERIES, 'היסטוריה בקצרה', `1950 — חלום. 1980 — מומחים. 2010 — deep learning. 2022 — LLM לכולם — **גלים** — לא קו ישר.`),
    seriesPost(10, SERIES, 'סיכום', `**AI = מערכות שלמדו או חושבות לפי כללים כדי לפתור משימות מורכבות.**

הבא: **מה זה מודל** — הלב הטכני.`),
  ],
}
