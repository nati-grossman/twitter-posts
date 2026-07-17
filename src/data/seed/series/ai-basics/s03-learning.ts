import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מחשב לומד במקום להיות מתוכנת?'

export const aiBasicsLearning: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא if על כל מקרה', `מיליון תמונות חתול — **לא** לכתוב כלל לכל — **מחפשים** דפוסים **אוטומטית**.`),
    seriesPost(2, SERIES, 'Loss', `**טעות** — חיזוי מול אמת — **מספר** — המטרה: **להקטין** — **למידה** = כיוון ירידה.`),
    seriesPost(3, SERIES, 'Gradient descent', `**גרדיאנט** — איזה כיוון מוריד טעות — **מעדכנים** משקלים קצת — **שוב ושוב** — מיליוני צעדים.`),
    seriesPost(4, SERIES, 'Epoch', `מעבר **שלם** על הדאטה — epoch 1, 2, 50 — **עד** מספיק טוב — **או** overfit.`),
    seriesPost(5, SERIES, 'Backpropagation', `רשת נוירונים — **מפיץ** אשם לאחור — **מי אשם** בטעות — **מעדכן** שכבות.`),
    seriesPost(6, SERIES, 'היפרפרמטרים', `קצב למידה, גודל batch — **לא** לומדים מדאטה — **בן אדם** בוחר — **ניסוי**.`),
    seriesPost(7, SERIES, 'Validation', `דאטה **שלא** ראה באימון — **בודק** — **לא** לשנן — **להכליל**.`),
    seriesPost(8, SERIES, 'מול תכנות קלאסי', `מפתח **כותב** לוגיקה. ML **מגדיר** מטרה — מחשב **מוצא** לוגיקה.`),
    seriesPost(9, SERIES, 'כשל', `דאטה גרוע — **לומד** bias — **לא** “טיפש” — **שיקף** את הנתונים.`),
    seriesPost(10, SERIES, 'סיכום', `**למידה = חזור על דוגמאות, מדוד טעות, עדכן פרמטרים.**

לא קסם — **אופטימיזציה** חוזרת.`),
  ],
}
