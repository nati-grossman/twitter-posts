import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל שומר הקשר?'

export const llmWorkContext: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא זיכרון נצחי', `**הקשר** = **כל** הטוקנים ב**חלון** הנוכחי — **לא** “זוכר אתמול”.`),
    seriesPost(2, SERIES, 'Context window', `4k, 128k — **מקסימום** — מעבר — **נחתך** או **סיכום**.`),
    seriesPost(3, SERIES, 'KV cache', `ב-inference — **שומרים** מפתחות/ערכים מטוקנים קודמים — **לא** מחשבים מחדש — **מהיר**.`),
    seriesPost(4, SERIES, 'Attention רואה הכל', `כל טוקן **רואה** כל טוקן בחלון — **קשר** רחוק — **it** → נושא.`),
    seriesPost(5, SERIES, 'שיחה ארוכה', `היסטוריה **בפרומפט** — **גדל** — **יקר** — **מקצרים**.`),
    seriesPost(6, SERIES, 'System prompt', `הוראות **בתחילה** — **חלק** מההקשר — **מסגרת**.`),
    seriesPost(7, SERIES, 'RAG', `ידע **מחוץ** לחלון — **מסמכים** — **מרחיב** “זיכרון”.`),
    seriesPost(8, SERIES, 'מגבלה', `פרומפט נגד עצמו — **שכח** התחלה — **בלבול** — **לא** אדם.`),
    seriesPost(9, SERIES, 'Long context tech', `RoPE scaling — **128k** — **לא** אינסופי — **עלות** ריבועית לפעמים.`),
    seriesPost(10, SERIES, 'סיכום', `**שומר הקשר = כל הטוקנים בחלון + Attention + KV cache — לא זיכרון ארוך טווח.**

חלון = **גבול** הקשר.`),
  ],
}
