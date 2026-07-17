import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודלים מקבלים התנהגות?'

export const trainRealBehavior: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא אופי מולד', `**התנהגות** = **דפוסים** שנלמדו — **לא** אופי — **לא** רצון.`),
    seriesPost(2, SERIES, 'SFT', `דוגמאות **מנומס**, **מועיל** — **חוזר** — **מחקה**.`),
    seriesPost(3, SERIES, 'RLHF', `פרס ל**עזרה** — עונש ל**פגיעה** — **סטייל** מוצר.`),
    seriesPost(4, SERIES, 'System', `“אתה עוזר…” — **מסגרת** — **בכל** שיחה — **חזק**.`),
    seriesPost(5, SERIES, 'Refusal', `“אני לא יכול” — **למד** מדוגמאות **סירוב** — **עקבי**.`),
    seriesPost(6, SERIES, 'Tone', `קצר/ארוך, פורמלי — **דאטה** — **לא** slider פנימי.`),
    seriesPost(7, SERIES, 'Jailbreak', `פרומפט **עוקף** — **לא** שינוי weights — **משחק** ציפיות.`),
    seriesPost(8, SERIES, 'סותרים', `דאטה **מעורב** — **התנהגות** לא עקבית — **בעיה** נפוצה.`),
    seriesPost(9, SERIES, 'Customization', `GPTs, instructions — **שכבת** משתמש — **על** בסיס.`),
    seriesPost(10, SERIES, 'סיכום', `**התנהגות = SFT + RLHF + system + מסננים — למידה מה לעשות, לא “מוסר פנימי”.**

מוצר **מעצב** — **לא** המודל לבד.`),
  ],
}
