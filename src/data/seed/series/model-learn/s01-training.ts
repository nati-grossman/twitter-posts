import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה אימון (Training) של מודל?'

export const modelLearnTraining: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא תכנות ידני', `**Training** — מעבירים **דוגמאות** — המודל **מעדכן** מיליוני מספרים (weights) — **למידה**.`),
    seriesPost(2, SERIES, 'לפני ואחרי', `לפני — **אקראי** — תשובות **שטויות**. אחרי — **מכוון** למשימה — **סיווג, טקסט**.`),
    seriesPost(3, SERIES, 'שלבים', `Pretrain → fine-tune → (RLHF) — **לא** תמיד הכל — **תלוי** מוצר.`),
    seriesPost(4, SERIES, 'GPU', `חישוב **מטריצות** — **שעות/ימים** — **אלפי** כרטיסים — **עלות**.`),
    seriesPost(5, SERIES, 'Dataset', `קלט + **תשובה נכונה** (לפעמים) — **מיליונים** שורות — **איכות** קריטית.`),
    seriesPost(6, SERIES, 'Hyperparameters', `קצב למידה, גודל batch — **לא** לומדים מדאטה — **בן אדם** בוחר.`),
    seriesPost(7, SERIES, 'Checkpoint', `שומרים weights באמצע — **ממשיך** — **לא** מהתחלה — **גרסאות**.`),
    seriesPost(8, SERIES, 'Inference ≠ Training', `שימוש — **לא** משנים weights — **רק** forward — **זול** יחסית.`),
    seriesPost(9, SERIES, 'עצירה', `מספיק epochs — **early stopping** — **לא** overfit — **validation**.`),
    seriesPost(10, SERIES, 'סיכום', `**Training = חזרה על דוגמאות + עדכון weights עד שה-loss יורד.**

לא **מלמדים כללים** — **מכוונים מספרים**.`),
  ],
}
