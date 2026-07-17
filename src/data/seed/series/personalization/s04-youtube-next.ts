import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך יוטיוב בוחר לך סרטון הבא?'

export const persYoutubeNext: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מטרה: watch time', `לא רק קליק — **כמה זמן** נשארת — **עוצמה** ליוטיוב — **המלצה** מכוונת.`),
    seriesPost(2, SERIES, 'היסטוריה', `צפיות, חיפושים, **לא אהבתי** — **פרופיל** עשיר — **שנים**.`),
    seriesPost(3, SERIES, 'Sidebar', `“הבא בתור” — **רשימת** מועמדים — **ממוין** — **לא** אקראי.`),
    seriesPost(4, SERIES, 'Home', `מיקס **מנוי** + **גילוי** — **שילוב** — **לא** רק אלגוריתם.`),
    seriesPost(5, SERIES, 'Thumbnail + title', `מודל **חוזה** CTR — **פיתיון** — **אחריות** יוצר.`),
    seriesPost(6, SERIES, 'קטגוריות', `גיימינג, מדע — **ערוצים** — **cluster**.`),
    seriesPost(7, SERIES, 'Shorts נפרד', `פיד קצר — **אותות** כמו טיקטוק — **מנוע** דומה — **נפרד**.`),
    seriesPost(8, SERIES, 'לא ממליץ בלי נתונים', `incognito — **פחות** — **מחובר** — **Google** רוחב.`),
    seriesPost(9, SERIES, 'kids', `פרופיל ילדים — **מגבלות** — **מודל** אחר — **רגולציה**.`),
    seriesPost(10, SERIES, 'סיכום', `**יוטיוב = watch time + היסטוריה ארוכה + דירוג מועמדים — הבא ממוקסם לשימור.**

שונה מטיקטוק — **אורך** ו**מנויים**.`),
  ],
}
