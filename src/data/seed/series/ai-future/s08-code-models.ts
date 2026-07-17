import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה מודלים שמייצרים קוד?'

export const aiFutureCodeModels: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**Code models** — LLM **מאומן** על GitHub, docs — **Copilot**, **Cursor** — **השלמה**.`),
    seriesPost(2, SERIES, 'לא IDE', `המודל **לא** מריץ — **מציע** — **אתה** מאשר — **אחריות**.`),
    seriesPost(3, SERIES, 'הקשר', `קובץ פתוח, **repo** — **RAG** קוד — **הבנה** פרויקט — **agents**.`),
    seriesPost(4, SERIES, 'שפות', `Python, TS, Rust — **דפוסים** — **לא** מבין ריצה — **סטטיסטיקה**.`),
    seriesPost(5, SERIES, 'באגים', `קוד **נראה** נכון — **לא** תמיד — **בדיקות** — **CI** חובה.`),
    seriesPost(6, SERIES, 'אבטחה', `מפתחות בקוד — **דליפה** — **סריקה** — **לא** לסמוך.`),
    seriesPost(7, SERIES, 'Refactor', `הסבר, **תיקון**, מיגרציה — **פרודוקטיביות** — **לא** החלפת מתכנת.`),
    seriesPost(8, SERIES, 'Terminal', `פקודות — **זהירות** — **rm -rf** — **sandbox** — **אישור**.`),
    seriesPost(9, SERIES, 'עתיד', `agent **כותב** PR — **review** אנושי — **workflow** חדש.`),
    seriesPost(10, SERIES, 'סיכום', `**מודלי קוד = LLM על קוד — השלמה, עזרה, agents — לא מחליף בדיקה ואחריות.**

כלי **חזק** — **לא** קסם.`),
  ],
}
