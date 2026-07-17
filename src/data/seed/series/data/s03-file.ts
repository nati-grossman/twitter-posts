import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה קובץ?'

export const dataFile: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'יחידת אחסון', `**קובץ** — שם + תוכן ביטים — **על דיסק** — photo.jpg, data.csv.`),
    seriesPost(2, SERIES, 'מול תיקייה', `**תיקייה** — מארגנת — **path** — home/user/docs — **היררכיה**.`),
    seriesPost(3, SERIES, 'Metadata', `תאריך, גודל, הרשאות — **לא** התוכן — **OS** שומר.`),
    seriesPost(4, SERIES, 'סיומת', `.pdf, .exe — **רמז** לפורמט — **לא** מחייב — **זהירות** מזויף.`),
    seriesPost(5, SERIES, 'Binary מול Text', `תמונה — **בינארי**. config.json — **טקסט** — **פתיחה** בעורך.`),
    seriesPost(6, SERIES, 'Stream', `קוראים **חתיכות** — **לא** הכל ב-RAM — **וידאו** גדול.`),
    seriesPost(7, SERIES, 'Cloud object', `S3 — **קובץ** בענן — **URL** — **לא** דיסק מקומי — **אותו** רעיון.`),
    seriesPost(8, SERIES, 'Versioning', `שינוי — **גרסה** — Git, S3 versions — **חזרה** אחורה.`),
    seriesPost(9, SERIES, 'Lock', `שניים כותבים — **התנגשות** — **lock** — **DB** טוב יותר לרב-משתמשים.`),
    seriesPost(10, SERIES, 'סיכום', `**קובץ = שם + ביטים על אחסון — הבסיס של כל export/import.**

מיליוני קבצים = **בעיית ניהול** — נכנסים ל-DB.`),
  ],
}
