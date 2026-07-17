import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך כל מילה מדברת עם כל מילה?'

export const xfmDeepEveryWordTalks: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מטריצה מלאה', `N מילים → **N×N** קשרים — **כל** זוג — **לא** רק שכן.`),
    seriesPost(2, SERIES, 'דוגמה', `החתול **ישב** על המחצלת — **ישב** מסתכל על **חתול** ו**מחצלת** — **משקלים** שונים.`),
    seriesPost(3, SERIES, 'לא שווה', `רוב משקלים **נמוכים** — **מעט** גבוהים — **sparse** רעיוני — **יעיל** בחישוב.`),
    seriesPost(4, SERIES, 'Multi-head', `8 ראשים — **8** “שיחות” — **מקביל** — **דקדוק**, רחוק, מספר — **יחד**.`),
    seriesPost(5, SERIES, 'שכבה 1 vs 40', `למטה — **מקומי** — למעלה — **מושג** — **אותה** מטריצה — **משמעות** משתנה.`),
    seriesPost(6, SERIES, 'Causal', `ב-GPT — **חצי** מטריצה — **לא** רואים עתיד — **משולש** — **גנרציה**.`),
    seriesPost(7, SERIES, 'Bidirectional', `BERT — **מלא** — **שני** כיוונים — **הבנה** — **לא** חיזוי.`),
    seriesPost(8, SERIES, 'עלות', `כל מילה × כל מילה — **יקר** — **ארוך** = **איטי** — **אופטימיזציה**.`),
    seriesPost(9, SERIES, 'Induction', `דפוסים — **A** … **B** — **A** שוב → **B** — **מעגלים** שנלמדו — **מחקר**.`),
    seriesPost(10, SERIES, 'סיכום', `**כל מילה “מדברת” עם כל מילה = מטריצת Attention מלאה (או ממוסכת ב-GPT).**

שפה = **רשת** קשרים, לא **שרשרת** בודדת.`),
  ],
}
