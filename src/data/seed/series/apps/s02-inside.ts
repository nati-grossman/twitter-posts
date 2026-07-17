import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך אפליקציה בנויה מבפנים?'

export const appsInside: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שכבות', `**UI** — מה רואים. **לוגיקה** — החלטות. **נתונים** — API, DB מקומי. **תשתית** — רשת, קבצים.`),
    seriesPost(2, SERIES, 'MVC / MVVM', `Model-View-Controller — **מפריד** — **לא** הכל בכפתור אחד — **תחזוקה**.`),
    seriesPost(3, SERIES, 'Components', `React, SwiftUI — **חלקים** — מסך = **הרכבה** — **state** לכל חלק.`),
    seriesPost(4, SERIES, 'Navigation', `מסכים — **stack** — חזרה — **router** — **לא** דף HTML מלא.`),
    seriesPost(5, SERIES, 'Services', `מודול רשת — **auth** — **לא** מפוזר בכל מקום.`),
    seriesPost(6, SERIES, 'Assets', `תמונות, פונטים — **בחבילה** — **לא** מהאינטרנט בכל פעם.`),
    seriesPost(7, SERIES, 'Config', `API URL — **סביבות** dev/prod — **לא** קשיח בקוד.`),
    seriesPost(8, SERIES, 'Dependencies', `ספריות — npm, CocoaPods — **לא** להמציא הכל.`),
    seriesPost(9, SERIES, 'Build', `קוד מקור → **קומפילציה** → **APK/IPA** — **בינארי** למכשיר.`),
    seriesPost(10, SERIES, 'סיכום', `**מבפנים = UI + לוגיקה + נתונים + ניווט + שירותים — מסודר בשכבות.**

בלגן = **קשה** לתקן ולעדכן.`),
  ],
}
