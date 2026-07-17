import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה epoch באימון?'

export const modelLearnEpoch: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מחזור מלא', `**Epoch** — מעבר **אחד** על **כל** הדאטה — **ראה** כל דוגמה — **פעם**.`),
    seriesPost(2, SERIES, 'שלב', `epoch 1 — גס. epoch 50 — **עדין** — **loss** יורד — **לא** לנצח.`),
    seriesPost(3, SERIES, 'מול iteration', `iteration = **batch** אחד — **אלפי** iterations ב-epoch — **מבלבל** — **שני מושגים**.`),
    seriesPost(4, SERIES, 'Shuffle', `מערבבים **סדר** כל epoch — **לא** זוכרים סדר — **טוב**.`),
    seriesPost(5, SERIES, 'Early stopping', `val loss **עולה** — **עוצרים** — **לא** epoch 1000 — **חוסך**.`),
    seriesPost(6, SERIES, 'Overfit', `יותר מדי epochs — **שנן** train — **val** גרוע — **עצור מוקדם**.`),
    seriesPost(7, SERIES, 'גדול דאטה', `epoch אחד — **שעות** — **טריליון** tokens — **pretrain**.`),
    seriesPost(8, SERIES, 'Checkpoint per epoch', `שומרים — **השוואה** — **rollback** — **ניסוי**.`),
    seriesPost(9, SERIES, 'Learning rate schedule', `קטן עם הזמן — **cosine** — **יציב** בסוף.`),
    seriesPost(10, SERIES, 'סיכום', `**Epoch = סיבוב שלם על הדאטה — מודדים התקדמות ב-loss בין סיבובים.**

לא **יותר epochs** תמיד טוב.`),
  ],
}
