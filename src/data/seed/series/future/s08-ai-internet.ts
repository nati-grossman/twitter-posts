import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך AI משתלב באינטרנט של העתיד?'

export const futureAiInternet: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שכבה חדשה', `AI **בין** משתמש לשירות — **מתרגם**, **מסכם**, **מחליט** — **לא** רק קישורים.`),
    seriesPost(2, SERIES, 'סוכנים', `“תזמן טיסה” — **API** + LLM — **פעולות** — **אורקסטרציה**.`),
    seriesPost(3, SERIES, 'חיפוש', `תשובה ישירה — **לא** 10 כחולים — **SGE** — **מקורות**?`),
    seriesPost(4, SERIES, 'תוכן מסונתז', `סיכום חדשות — **יצירה** — **אמון** — **hallucination**.`),
    seriesPost(5, SERIES, 'אישי', `מודל **יודע** אותך — **הקשר** — **פרטיות** — **on-device**.`),
    seriesPost(6, SERIES, 'תשתית', `GPU clusters — **חלק** מענן — **עלות** — **FinOps**.`),
    seriesPost(7, SERIES, 'רגולציה', `EU AI Act — **שקיפות** — **מים** מסומנים — **חובה**.`),
    seriesPost(8, SERIES, 'מודלים מקומיים', `Llama על laptop — **פחות** ענן — **איטי** — **פרטי**.`),
    seriesPost(9, SERIES, 'פרוטוקולים', `MCP, tools — **אינטרנט** למכונות — **API סטנדרט**.`),
    seriesPost(10, SERIES, 'סיכום', `**AI באינטרנט עתידי = סוכנים, חיפוש חדש, תשתית GPU, רגולציה — שכבה מעל HTTP.**

לא **נפרד** — **משולב**.`),
  ],
}
