import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה ההבדל בין AI ישן ל-ML מודרני?'

export const aiBasicsOldVsModern: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'AI ישן — סמלי', `כללים: אם X אז Y — **מומחה** כותב — **Expert Systems** — **שביר** — לא scale.`),
    seriesPost(2, SERIES, 'בעיית הקנה מידה', `אלפי כללים — **סתירות** — **תחזוקה** גיהינום — **לא** למד מדוגמאות.`),
    seriesPost(3, SERIES, 'ML מודרני', `**לומד** מדאטה — **פחות** כללים ידניים — **יותר** דאטה וחישוב.`),
    seriesPost(4, SERIES, 'Deep Learning', `רשתות **עמוקות** — תמונה, טקסט, קול — **ייצוגים** אוטומטיים — **2012+** פריצה.`),
    seriesPost(5, SERIES, 'Transformers', `Attention — **שפה** — GPT — **סימן** שינוי — **לא** רק CNN.`),
    seriesPost(6, SERIES, 'Feature engineering', `ישן: מומחה **בוחר** פיצ’רים. מודרני: **לומד** פיצ’רים — **פחות** יד.`),
    seriesPost(7, SERIES, 'היברידי היום', `כללים + ML — **בנק**, **רפואה** — **לא** הכל end-to-end — **פרגמטי**.`),
    seriesPost(8, SERIES, 'סיבה למעבר', `דאטה **ענק** + GPU **זול יחסית** — **ביצועים** עלו — **כלכלה**.`),
    seriesPost(9, SERIES, 'מיתוסים', `“AI ישן נכשל” — **עדיין** שימושי בלוגיקה קשיחה — **לא** הכל ML.`),
    seriesPost(10, SERIES, 'סיכום', `**ישן = כללים ידניים. מודרני = למידה מנתונים + רשתות עמוקות.**

היום = **ML + מוצר** — לא מערכות מומחה בלבד.`),
  ],
}
