import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך AI מבין וידאו?'

export const aiFutureVideo: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'זמן', `וידאו = **פריימים** + **זמן** — **לא** תמונה אחת — **הרבה** נתונים.`),
    seriesPost(2, SERIES, 'דגימה', `N פריימים **לשנייה** — **לא** כל פיקסל — **דחיסה** — **מגבלה**.`),
    seriesPost(3, SERIES, 'Sora', `diffusion + **מודל** — **יצירה** — **לא** רק הבנה — **מחקר** OpenAI.`),
    seriesPost(4, SERIES, 'הבנה', `מה קורה — **תיאור** — **שאלות** — **Gemini** long video — **מוצר**.`),
    seriesPost(5, SERIES, 'אודיו', `מסלול **נפרד** — **תמלול** — **מוזג** — **רב-מודלי**.`),
    seriesPost(6, SERIES, 'עלות', `דקה וידאו = **אלפי** “טוקנים” — **יקר** — **לא** שוטף לכולם.`),
    seriesPost(7, SERIES, 'זיכרון', `סרט **ארוך** — **חיתוך** — **סיכום** היררכי — **טכניקות**.`),
    seriesPost(8, SERIES, 'יישומים', `ניטור, **סיכום** פגישות — **לא** בימוי — **פרגמטי**.`),
    seriesPost(9, SERIES, 'deepfake', `יצירה **מזויפת** — **סיכון** — **זיהוי** — **אתיקה** — **חוק**.`),
    seriesPost(10, SERIES, 'סיכום', `**וידאו ב-AI = פריימים/זמן + מודלים כבדים — הבנה ויצירה, עדיין יקר ולא מושלם.**

2025 — **מתפתח** מהר.`),
  ],
}
