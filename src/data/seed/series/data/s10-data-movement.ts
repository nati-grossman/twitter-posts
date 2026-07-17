import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך נתונים זזים בין מערכות?'

export const dataMovement: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא אי נפרד', `CRM, DB, דוח — **מדברים** — API, קבצים, תורים — **אינטגרציה**.`),
    seriesPost(2, SERIES, 'API sync', `REST — **משיכה** — webhook — **דחיפה** — **JSON**.`),
    seriesPost(3, SERIES, 'Message queue', `Kafka — **מפריד** — producer לא יודע consumer — **עמיד**.`),
    seriesPost(4, SERIES, 'CDC', `Change Data Capture — DB השתנה — **stream** — **מערכת ב'** מתעדכנת — **ללא** poll.`),
    seriesPost(5, SERIES, 'SFTP / CSV', `בנקים ישנים — **קובץ יומי** — **איטי** — **עדיין** קיים.`),
    seriesPost(6, SERIES, 'iPaaS', `Zapier, Make — **ללא** קוד — **קטן** — **מגבלות**.`),
    seriesPost(7, SERIES, 'Schema mapping', `שדה A → B — **טיפוס** שונה — **שבירה** — **גרסאות**.`),
    seriesPost(8, SERIES, 'Idempotency', `שליחה כפולה — **לא** כפילות — **מפתח** ייחודי.`),
    seriesPost(9, SERIES, 'אבטחה בתנועה', `TLS — **הצפנה** — **PII** ממוסך — **לא** פתוח.`),
    seriesPost(10, SERIES, 'סיכום', `**תנועה בין מערכות = API + תורים + קבצים + מיפוי + אבטחה.**

דאטה **חי** — **זורם** — לא רק **יושב**.`),
  ],
}
