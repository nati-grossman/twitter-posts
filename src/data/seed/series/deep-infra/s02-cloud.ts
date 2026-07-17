import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך Cloud עובד באמת?'

export const deepInfraCloud: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא ענן בשמיים', `**Cloud** = מחשבים **של ספק** בדאטה סנטרים — אתה **שוכר** — לא קונה שרת פיזי.

**מודל שירות** — לא מזג אוויר.`),
    seriesPost(2, SERIES, 'IaaS PaaS SaaS', `**IaaS** — וירטואליות, רשת — אתה מתקין הכל. **PaaS** — Heroku, רק קוד. **SaaS** — Gmail — **מוכן**.`),
    seriesPost(3, SERIES, 'Pay as you go', `משלמים לפי **שעה/GB/בקשה** — scale up — **לא** מלאי שרתים ריקים בחדר.`),
    seriesPost(4, SERIES, 'Regions ו-AZs', `**Region** — אזור גיאוגרפי. **Availability Zone** — מרכזים נפרדים באותו אזור — **גיבוי**.`),
    seriesPost(5, SERIES, 'API לכל דבר', `יוצרים שרת בלחיצה — **תיעוד** — **Infrastructure as Code** — Terraform — **גרסה** לתשתית.`),
    seriesPost(6, SERIES, 'Shared responsibility', `הספק — פיזי, רשת בסיס. **אתה** — סיסמאות, קוד, הגדרות — **לא הכל עליהם**.`),
    seriesPost(7, SERIES, 'Vendor lock-in', `שירות ייחודי — **קשה לעבור** — תכנון: סטנדרטים פתוחים, Kubernetes, S3-compatible.`),
    seriesPost(8, SERIES, 'Hybrid', `חלק on-premise (במשרד), חלק cloud — **בנקים**, רגולציה — **גשר** ביניהם.`),
    seriesPost(9, SERIES, 'Green ועלות', `דאטה סנטר **יעיל** — אבל שימוש מוגזם — **חשבון ענק** — **FinOps** — ניהול עלויות.`),
    seriesPost(10, SERIES, 'סיכום', `**Cloud = שכירות תשתית גמישה + regions + תשלום לפי שימוש.**

עובד כי **הרבה לקוחות חולקים** עלות פיזית ענקית.`),
  ],
}
