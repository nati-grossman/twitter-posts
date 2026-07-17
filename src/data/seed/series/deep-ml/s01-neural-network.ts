import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה neural network?'

export const deepMlNeuralNetwork: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'השראה ביולוגית', `**רשת נוירונים** — צמתים מחוברים — **לא** מוח אמיתי — **מטאפורה** — **מתמטיקה** בפועל.`),
    seriesPost(2, SERIES, 'קלט ופלט', `מספרים נכנסים — **שכבות** מחשבות — מספרים יוצאים — “9” או “חתול”.`),
    seriesPost(3, SERIES, 'לא תכנות ידני', `לא if על כל פיקסל — **משקלים** לומדים — **מיליוני** פרמטרים.`),
    seriesPost(4, SERIES, 'Deep = הרבה שכבות', `**Deep learning** — יותר מ-2–3 שכבות — **ייצוגים** מופשטים — **היררכיה**.`),
    seriesPost(5, SERIES, 'אוניברסלי', `תמונה, טקסט, קול, משחק — **אותו** רעיון — **ארכיטקטורות** שונות.`),
    seriesPost(6, SERIES, 'אימון', `loss → backprop → **עדכון** — **GPU** — **שעות/ימים**.`),
    seriesPost(7, SERIES, 'מול רשת רדודה', `רשת קטנה — **לא** מספיק לתמונה — **עומק** = כוח (עם דאטה).`),
    seriesPost(8, SERIES, 'Black box', `קשה להסביר **למה** — **interpretability** — רפואה, בנק — **נושא** פתוח.`),
    seriesPost(9, SERIES, 'היסטוריה', `Perceptron 1958 — **חורף AI** — backprop 1980 — **2012** ImageNet — **פריצה**.`),
    seriesPost(10, SERIES, 'סיכום', `**Neural network = שכבות של חישובים לומדים שממפות קלט לפלט.**

בסיס ל**כמעט כל AI מודרני**.`),
  ],
}
