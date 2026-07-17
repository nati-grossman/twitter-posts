import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה דאטה בכלל?'

export const dataWhatIsData: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא רק מספרים', `**Data** — כל **ייצוג** שניתן לעבד במחשב — טקסט, תמונה, קליק, טמפרטורה — **לא** רק Excel.`),
    seriesPost(2, SERIES, 'מול מידע', `**Data** גולמי — **Information** עם משמעות — **Knowledge** עם החלטה — **ספקטרום**.`),
    seriesPost(3, SERIES, 'Structured', `טבלה — שורות, עמודות — **SQL** — **מסודר**.`),
    seriesPost(4, SERIES, 'Unstructured', `וידאו, PDF, צ’אט — **80%** מהעולם — **קשה** יותר — **AI** עוזר.`),
    seriesPost(5, SERIES, 'Semi-structured', `JSON, לוגים — **גמיש** — **שדות** — **בין** לבין.`),
    seriesPost(6, SERIES, 'Big Data', `נפח, מהירות, מגוון — **לא** נכנס למחשב אחד — **הבטחה** marketing לפעמים.`),
    seriesPost(7, SERIES, 'איכות', `נקי, מלא, מדויק — **garbage in** — **החלטות** שגויות.`),
    seriesPost(8, SERIES, 'פרטיות', `דאטה על **אנשים** — **רגולציה** — **לא** “יש לי, אז שלי”.`),
    seriesPost(9, SERIES, 'נכס', `חברות **נסחרות** על דאטה — **מפתח** תחרותי — **לא** רק קוד.`),
    seriesPost(10, SERIES, 'סיכום', `**דאטה = חומר גלם דיגיטלי — מובנה או לא — שמזין אפליקציות, AI ודוחות.**

הבא: **איך המחשב מייצג**.`),
  ],
}
