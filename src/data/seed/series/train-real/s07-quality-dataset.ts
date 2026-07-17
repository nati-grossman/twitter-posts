import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה dataset איכותי?'

export const trainRealQualityDataset: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא רק גודל', `**איכות** > כמות לעיתים — **מיליון** גרוע < **אלף** מדויק.`),
    seriesPost(2, SERIES, 'מגוון', `נושאים, סגנונות, שפות — **לא** עותק אחד — **הכללה**.`),
    seriesPost(3, SERIES, 'תיוג נכון', `SFT — **תשובה** מומחה — **שגיאה** = **מודל** שגוי.`),
    seriesPost(4, SERIES, 'עדכני', `נתונים 2020 — **לא** יודע 2025 — **תאריך** חשוב — **RAG** מחוץ.`),
    seriesPost(5, SERIES, 'מאוזן', `יותר מדי קוד — **חלש** בשירה — **משקלים** — **תכנון**.`),
    seriesPost(6, SERIES, 'רישוי', `CC, public domain — **לא** גנוב — **תביעות** — **הסרה**.`),
    seriesPost(7, SERIES, 'פרטיות', `PII — **הסרה** — **GDPR** — **קנס** — **אתיקה**.`),
    seriesPost(8, SERIES, 'דופליקטים', `אותו טקסט **פעמיים** — **בזבוז** — **overfit** — **dedup**.`),
    seriesPost(9, SERIES, 'Human in loop', `מומחים **כותבים** — **לא** רק scrape — **יקר** — **שווה**.`),
    seriesPost(10, SERIES, 'סיכום', `**Dataset איכותי = מגוון, מדויק, חוקי, נקי, מעודכן — לא “הורדנו את האינטרנט”.**

דאטה **הוא** המוצר הנסתר.`),
  ],
}
