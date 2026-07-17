import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה פורמטים (JSON, XML)?'

export const dataFormats: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'פורמט = חוזה', `**איך** לפרש ביטים — **JSON**, **XML**, CSV — **שני צדדים** מסכימים.`),
    seriesPost(2, SERIES, 'JSON', `מפתח-ערך — **קל** — API — **סטנדרט** web — **לא** הערות רשמית.`),
    seriesPost(3, SERIES, 'XML', `תגיות — **כבד** — **סכמות** — בנקים, ישן — **מבנה** קשיח.`),
    seriesPost(4, SERIES, 'CSV', `טבלה בטקסט — **Excel** — **פסיק** — **פשוט** — **בעיות** encoding.`),
    seriesPost(5, SERIES, 'Protobuf', `בינארי — **מהיר** — **קטן** — gRPC — **לא** קריא לעין.`),
    seriesPost(6, SERIES, 'Parquet', `עמודות — **אנליטיקה** — **דחוס** — data lake — **Big Data**.`),
    seriesPost(7, SERIES, 'Schema', `הגדרת שדות — **validation** — **שבירה** אם לא תואם.`),
    seriesPost(8, SERIES, 'Conversion', `XML → JSON — **ETL** — **אובד** לפעמים — **מיפוי**.`),
    seriesPost(9, SERIES, 'Human readable', `JSON — **כן**. Parquet — **לא** — **trade-off** גודל/קריאות.`),
    seriesPost(10, SERIES, 'סיכום', `**פורמטים = שפות לאריזת דאטה — JSON ל-API, Parquet לאנליטיקה, XML ליורשה.**

בוחרים לפי **מי קורא** ו**כמה גדול**.`),
  ],
}
