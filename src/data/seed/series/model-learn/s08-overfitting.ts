import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה overfitting?'

export const modelLearnOverfitting: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שנן במקום ללמוד', `**Overfitting** — מצוין על **train** — **נכשל** על **חדש** — **רעש** כחלק מהמודל.`),
    seriesPost(2, SERIES, 'אנלוגיה', `10 שאלות — **שיננת** תשובות — **מבחן חדש** — **נכשל** — **לא** הבין.`),
    seriesPost(3, SERIES, 'גרף', `train loss ↓ — val loss **↑** — **פער** — **עצור**.`),
    seriesPost(4, SERIES, 'מודל גדול מדי', `יותר פרמטרים מדאטה — **קל** לשנן — **קטן** או **יותר** דאטה.`),
    seriesPost(5, SERIES, 'Regularization', `dropout, weight decay — **מעניש** מורכבות — **מכליל**.`),
    seriesPost(6, SERIES, 'More data', `התרופה **הטובה** — **גיוון** — **לא** רק כמות.`),
    seriesPost(7, SERIES, 'LLM', `מצטט **דוגמאות** אימון — **memorization** — **פרטיות** — **בעיה**.`),
    seriesPost(8, SERIES, 'Early stopping', `עוצרים **לפני** שינון — **הנקודה** הטובה — **validation**.`),
    seriesPost(9, SERIES, 'Cross-validation', `k folds — **בודקים** — **לא** מבחן אחד — **אמין**.`),
    seriesPost(10, SERIES, 'סיכום', `**Overfitting = התאמה יתר לtrain — גרוע בהכללה.**

מטרה: **פשוט מספיק** לדפוס האמיתי.`),
  ],
}
