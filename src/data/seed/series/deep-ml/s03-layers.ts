import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה שכבות (layers) במודל?'

export const deepMlLayers: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שכבה = שלב', `קלט → **שכבה 1** → שכבה 2 → … → **פלט** — כל שכבה **ממד** אחר — **פיצ’רים**.`),
    seriesPost(2, SERIES, 'היררכיה', `שכבה ראשונה — קצוות, צבע. **אמצע** — עיניים. **אחרונה** — “חתול”. — **מופשט**.`),
    seriesPost(3, SERIES, 'Dense / Fully connected', `כל נוירון **מחובר** לכל הקודם — **קלאסי** — **כבד** בפרמטרים.`),
    seriesPost(4, SERIES, 'Convolution', `סינון מקומי על תמונה — **CNN** — **שיתוף** משקל — **יעיל**.`),
    seriesPost(5, SERIES, 'Attention layer', `**Transformer** — **מי חשוב** למי — **לא** רק סדר קבוע.`),
    seriesPost(6, SERIES, 'Input / Output', `קלט — מספרים גולמיים (פיקסלים, טוקנים). פלט — **לוגיטים** → הסתברות.`),
    seriesPost(7, SERIES, 'Hidden', `ביניים — **לא רואים** — **הקסם** — interpretability **קשה**.`),
    seriesPost(8, SERIES, 'Dropout', `כיבוי אקראי — **מונע** overfit — **רק** באימון.`),
    seriesPost(9, SERIES, 'Batch Norm', `מנרמל בין שכבות — **יציב** — **מהיר** — **סטנדרט**.`),
    seriesPost(10, SERIES, 'סיכום', `**Layers = שלבי הפשטה — מגולמי לייצוג למשימה.**

יותר שכבות — **יותר קיבולת** — **יותר דאטה** נדרש.`),
  ],
}
