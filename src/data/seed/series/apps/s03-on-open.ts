import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה קורה כשפותחים אפליקציה?'

export const appsOnOpen: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לחיצה על אייקון', `OS **טוען** בינארי — **מקצה** זיכרון — **יוצר** process — **מתחיל** main.`),
    seriesPost(2, SERIES, 'Splash', `מסך פתיחה — **מסך** ראשון טוען — **מסתיר** אתחול — **לא** “ריק”.`),
    seriesPost(3, SERIES, 'Init', `קריאת config — **בדיקת** token שמור — **החלטה** login או home — **סדר**.`),
    seriesPost(4, SERIES, 'Cold start', `לא הייתה ברקע — **איטי** — טוען הכל — **חם** = מהיר יותר.`),
    seriesPost(5, SERIES, 'רשת', `בקשות מקבילות — פרופיל, פיד — **spinner** — **מחכים** או cache.`),
    seriesPost(6, SERIES, 'Permissions', `מצלמה? — **פופאפ** OS — **פעם ראשונה** — **זוכר** בחירה.`),
    seriesPost(7, SERIES, 'Analytics', `אירוע “פתיחה” — **שרת** — **מדידה** — **פרטיות**?`),
    seriesPost(8, SERIES, 'Deep link', `קישור — **נפתח** ישר למסך — **מנתב** — **לא** תמיד home.`),
    seriesPost(9, SERIES, 'כשל', `אין רשת — **מסך** שגיאה — **retry** — **offline mode**.`),
    seriesPost(10, SERIES, 'סיכום', `**פתיחה = OS מרים process → init → UI → נתונים (רשת/מקומי).**

הרגשה מהירה = **תכנון** אתחול.`),
  ],
}
