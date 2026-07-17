import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה AWS / Azure / GCP (ברמת רעיון)?'

export const deepInfraBigThree: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שלושה ענקים', `**AWS** (Amazon), **Azure** (Microsoft), **GCP** (Google) — **שוק ענן** — מאות שירותים כל אחד.`),
    seriesPost(2, SERIES, 'אותו רעיון', `VM, storage, DB, AI, CDN — **שמות שונים** — **מפת מוח** דומה — למידה על אחד **מקלה** על אחר.`),
    seriesPost(3, SERIES, 'AWS בקצרה', `הכי ותיק — EC2, S3, Lambda — **שוק ענק** — תיעוד וקהילה **עצומים**.`),
    seriesPost(4, SERIES, 'Azure בקצרה', `חזק ב**ארגונים** — Active Directory, Office — **היברידי** — Windows shops.`),
    seriesPost(5, SERIES, 'GCP בקצרה', `**BigQuery**, Kubernetes מקור, AI — חזק ב**דאטה ו-ML** — פחות “הכל לכולם” מ-AWS.`),
    seriesPost(6, SERIES, 'בחירה', `צוות מכיר AWS — **לא** לעבור בלי סיבה. רגולציה — **region** מסוים. **מחיר** — משתנה — calculators.`),
    seriesPost(7, SERIES, 'Free tier', `שכבה חינמית מוגבלת — **לימוד** — לא production רציני — **קפיצות** בחשבון אם לא זהירים.`),
    seriesPost(8, SERIES, 'Multi-cloud', `חלק ב-AWS, חלק ב-GCP — **מורכב** — redundancy — לא לכולם.`),
    seriesPost(9, SERIES, 'שירותים מנוהלים', `RDS, Cloud SQL — **DB מנוהל** — פחות patch ידני — **יותר כסף**, פחות כאב ראש.`),
    seriesPost(10, SERIES, 'סיכום', `**שלושה = חנויות ענן ענקיות עם קטלוג דומה.**

למפתח: **מושגים** (VM, bucket, function) — לא לשנן 400 שמות שירות.`),
  ],
}
