import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך ייראו AI בעוד 5–10 שנים?'

export const aiFuture510Years: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא יודעים', `**תחזיות** — **לא** נבואה — **2019** לא חזה ChatGPT — **זהירות**.`),
    seriesPost(2, SERIES, 'סביר', `סוכנים **בכל** אפליקציה — **קול** רגיל — **פחות** הקלדה — **ממשק**.`),
    seriesPost(3, SERIES, 'חומרה', `צ'יפים **ל-AI** — **on-device** — **פרטיות** — **זול** יותר.`),
    seriesPost(4, SERIES, 'רגולציה', `חוק **אירופה**, US — **שקיפות** — **אחריות** — **תעשייה** מבוגרת.`),
    seriesPost(5, SERIES, 'עבודה', `פחות **הקלדה** — יותר **פיקוח** על agents — **מקצועות** משתנים — **לא** אפס.`),
    seriesPost(6, SERIES, 'מדע', `תרופות, **חומרים** — **האצה** — **לא** קסם — **בדיקות** נשארות.`),
    seriesPost(7, SERIES, 'AGI?', `**מחלוקת** — **5 שנים**? — **אין** הסכם — **לא** לתכנן כאילו בטוח.`),
    seriesPost(8, SERIES, 'סיכונים', `deepfake, **נשק** אוטונומי — **ממשל** — **חברה אזרחית**.`),
    seriesPost(9, SERIES, 'שוויון', `גישה **לעניים**? — **שפות** — **תשתית** — **לא** מובן מאליו.`),
    seriesPost(10, SERIES, 'סיכום', `**5–10 שנים: agents, multimodal, רגולציה, on-device — לא בהכרח “מוח על-אנושי”.**

הכן **לשינוי** — **לא** לפאניקה.`),
  ],
}
