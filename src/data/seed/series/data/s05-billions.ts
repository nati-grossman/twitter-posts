import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך שומרים מיליארדי נתונים?'

export const dataBillions: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא דיסק אחד', `טרה-בייט — **אלפי** דיסקים — **מפוזר** — **לא** fit ב-laptop.`),
    seriesPost(2, SERIES, 'Data lake', `אגם קבצים — S3, HDFS — **גולמי** — **זול** — **אחר כך** מעבדים.`),
    seriesPost(3, SERIES, 'Partitioning', `לפי תאריך, מדינה — **קוראים** רק חלק — **לא** הכל.`),
    seriesPost(4, SERIES, 'Replication', `3 עותקים — **דיסק** מת — **לא** אובד — **trade-off** מקום.`),
    seriesPost(5, SERIES, 'Compression', `gzip, snappy — **פחות** 70% — **CPU** לפתוח — **שווה**.`),
    seriesPost(6, SERIES, 'Tiering', `חם SSD — **קר** tape/object זול — **ארכיון** — **עלות**.`),
    seriesPost(7, SERIES, 'Sharding DB', `מפצלים לפי user_id — **שרתים** רבים — **scale** אופקי.`),
    seriesPost(8, SERIES, 'CDN לקבצים', `תמונות — **קרוב** למשתמש — **לא** כל הבקשות למרכז.`),
    seriesPost(9, SERIES, 'מחיקה ו-GDPR', `לא רק שומרים — **מדיניות** מחיקה — **בעיה** ב-lake.`),
    seriesPost(10, SERIES, 'סיכום', `**מיליארדים = פיזור + דחיסה + partition + replication + שכבות עלות.**

אחסון **זול** — **שאילתה** יקרה — **תכנון**.`),
  ],
}
