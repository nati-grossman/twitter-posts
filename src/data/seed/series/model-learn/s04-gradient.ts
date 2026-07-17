import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה Gradient Descent?'

export const modelLearnGradient: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'ירידה בהר', `**Gradient descent** — הולכים **לכיוון** שמוריד loss — **כמו** מפה תלולה — **לא** קפיצה אקראית.`),
    seriesPost(2, SERIES, 'Gradient', `נגזרת — **שיפוע** — **איפה** העלייה הכי תלולה — **היפך** = ירידה.`),
    seriesPost(3, SERIES, 'Learning rate', `גודל צעד — **גדול** — **דילוג** מינימום — **קטן** — **איטי** — **תכוון**.`),
    seriesPost(4, SERIES, 'SGD', `Stochastic — **דוגמה אחת** — **רועש** — **מהיר** — **מיני-batch** אמצע.`),
    seriesPost(5, SERIES, 'Adam', `אופטימייזר **מודרני** — **מותאם** לכל weight — **ברירת מחדל** רבים.`),
    seriesPost(6, SERIES, 'מינימום מקומי', `נתקעים **בעמק** — **לא** הגלובלי — **אתחול** שונה — **ensemble**.`),
    seriesPost(7, SERIES, 'מיליוני ממדים', `כל weight — **gradient** — **מטריצה** — **GPU** — **backprop**.`),
    seriesPost(8, SERIES, 'לא רק NN', `לינארי, לוגיסטי — **אותו** רעיון — **קלאסי** ML.`),
    seriesPost(9, SERIES, 'vanishing', `רשת עמוקה — gradient **נעלם** — **ReLU, skip** — **ארכיטקטורה**.`),
    seriesPost(10, SERIES, 'סיכום', `**Gradient descent = עדכון weights לכיוון שמקטין loss — צעד אחר צעד.**

לב **אימון** עמוק.`),
  ],
}
