import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה data pipeline?'

export const dataPipeline: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'צינור', `**Pipeline** — דאטה **זורם** שלבים — מקור → ניקוי → אחסון → דוח — **אוטומטי**.`),
    seriesPost(2, SERIES, 'ETL', `Extract — Transform — Load — **מערכת א'** → **מחסן** — **לילה**.`),
    seriesPost(3, SERIES, 'ELT', `Load גולמי — **אחר כך** transform ב-warehouse — **מודרני** — Snowflake.`),
    seriesPost(4, SERIES, 'Batch', `כל לילה — **מיליונים** שורות — **לא** שנייה-שנייה — **זול**.`),
    seriesPost(5, SERIES, 'Streaming', `Kafka — **אירוע** אחר אירוע — **real-time** — **מורכב** יותר.`),
    seriesPost(6, SERIES, 'Data quality', `null, כפילויות — **בדיקות** — **עוצרים** pipeline — **לא** זבל פנימה.`),
    seriesPost(7, SERIES, 'Orchestration', `Airflow, Dagster — **מתזמן** — **תלות** — job B אחרי A.`),
    seriesPost(8, SERIES, 'Lineage', `מאיפה הגיע שדה — **ביקורת** — **רגולציה** — **trust**.`),
    seriesPost(9, SERIES, 'Failure', `job נכשל — **retry** — **alert** — **לא** שקט.`),
    seriesPost(10, SERIES, 'סיכום', `**Data pipeline = זרימה מסודרת של דאטה בין שלבי עיבוד — batch או stream.**

בלי pipeline — **בלגן** של קבצים ידניים.`),
  ],
}
