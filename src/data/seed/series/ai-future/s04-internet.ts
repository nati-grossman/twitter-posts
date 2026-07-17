import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל משתמש באינטרנט?'

export const aiFutureInternet: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא גלישה חופשית', `**לא** דפדפן פנימי תמיד — **כלי** חיפוש — **API** — **מוגבל**.`),
    seriesPost(2, SERIES, 'Browse', `ChatGPT Browse — **שולף** דפים — **מסכם** — **ציטוט** — **מוצר**.`),
    seriesPost(3, SERIES, 'RAG web', `שאילתה → **חיפוש** → **קטעים** בפרומפט — **עוגן** — **פחות** המצאה.`),
    seriesPost(4, SERIES, 'עדכון', `cutoff **עוקף** — **חדשות** היום — **לא** זיכרון קבוע — **זמני**.`),
    seriesPost(5, SERIES, 'סיכון', `דפים **זדוניים** — **prompt injection** — **סינון** — **זהירות**.`),
    seriesPost(6, SERIES, 'מחיר', `קריאות **רבות** — **איטי** — **יקר** — **לא** כל שאלה.`),
    seriesPost(7, SERIES, 'Perplexity', `מוצר **מבוסס** חיפוש — **מקורות** — **מודל** + **retrieval**.`),
    seriesPost(8, SERIES, 'API חיצוני', `Google, Bing — **מפתח** — **Backend** — **לא** במודל.`),
    seriesPost(9, SERIES, 'פרטיות', `מה **נשלח** לספק חיפוש — **לוגים** — **מדיניות**.`),
    seriesPost(10, SERIES, 'סיכום', `**אינטרנט במודל = חיפוש/שליפה דרך כלים — לא “יודע הכל” בזיכרון.**

תמיד **בדוק** מקור.`),
  ],
}
