import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה multimodal AI (טקסט+תמונה+קול)?'

export const aiFutureMultimodal: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**Multimodal** — **כמה** סוגי קלט/פלט — טקסט, תמונה, אודיו — **מודל** אחד או **מחובר**.`),
    seriesPost(2, SERIES, 'למה', `עולם **לא** רק טקסט — **מסמכים**, שיחה, **וידאו** — **צורך**.`),
    seriesPost(3, SERIES, 'GPT-4V', `תמונה + שאלה — **תיאור** — **OCR** — **מוצר** 2023+.`),
    seriesPost(4, SERIES, 'קול', `Whisper — **דיבור→טקסט** — TTS — **טקסט→דיבור** — **שיחה** קולית.`),
    seriesPost(5, SERIES, 'איחוד', `אותו **Transformer** — **patch** תמונה + טוקנים — **משותף** — **מחקר**.`),
    seriesPost(6, SERIES, 'יצירה', `DALL·E, Sora — **יציאה** תמונה/וידאו — **לא** רק הבנה — **generative**.`),
    seriesPost(7, SERIES, 'עלות', `תמונה **יקרה** בטוקנים — **וידאו** יותר — **תמחור** שונה.`),
    seriesPost(8, SERIES, 'רובוטיקה', `מצלמה + **פעולה** — **עתיד** — **לא** רק צאט.`),
    seriesPost(9, SERIES, 'מגבלות', `טועה **בפרטים** — **מספרים** בתמונה — **לא** מושלם.`),
    seriesPost(10, SERIES, 'סיכום', `**Multimodal = מודל שמטפל ביותר ממדיום אחד — קרוב יותר לאיך בני אדם תופסים.**

המגמה **דומיננטית** — **לא** נישה.`),
  ],
}
