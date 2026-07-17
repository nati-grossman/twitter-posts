import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל מבין הקשר?'

export const deepMlContext: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא זיכרון כמו אדם', `**הקשר** = מה **נכנס** בחלון — טוקנים — **לא** “זוכר אתמול” אלא **טקסט בפרומפט**.`),
    seriesPost(2, SERIES, 'Context window', `4K, 128K — **כמה** טוקנים **בבת אחת** — מעבר — **נחתך** או **סיכום**.`),
    seriesPost(3, SERIES, 'Attention = הקשר', `כל מילה **מושפעת** מכל השאר בחלון — **it** → **מי?** — **משקלים**.`),
    seriesPost(4, SERIES, 'שכבות מצטברות', `שכבה 1 — דקדוק. **עמוק** — כוונה, נושא — **היררכיה** — **לא** מובטח.`),
    seriesPost(5, SERIES, 'שיחה ארוכה', `history בצ’אט — **שולחים שוב** — **עולה** במחיר — **RAG** לזיכרון חיצוני.`),
    seriesPost(6, SERIES, 'System prompt', `הוראות בתחילה — **מסגרת** — “אתה עוזר משפטי” — **חלק** מההקשר.`),
    seriesPost(7, SERIES, 'מגבלות', `פרומפט נגד עצמו — **שכח** התחלה — **בלבול** — **לא** הבנה אמיתית.`),
    seriesPost(8, SERIES, 'In-context learning', `דוגמאות בפרומפט — **לומד בלי** עדכון משקלים — **few-shot** — **הקשר כאימון זמני**.`),
    seriesPost(9, SERIES, 'מול RAG', `ידע **מחוץ** לחלון — **מסמכים** — **הרחבת** “הקשר” — **לא** רק weights.`),
    seriesPost(10, SERIES, 'סיכום', `**הקשר = כל מה שבחלון + Attention שמקשר טוקנים — לא זיכרון נצחי.**

“מבין” = **מנבא טוב** לפי מה שרואה **עכשיו**.`),
  ],
}
