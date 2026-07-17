import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך יודעים שמודל באמת למד?'

export const modelLearnReallyLearned: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא loss בלבד', `train loss נמוך — **לא מספיק** — **validation** — **test נפרד** — **לא ראה**.`),
    seriesPost(2, SERIES, 'Generalization', `מבחן **חדש** — **דומה** בהתפלגות — **לא** העתק train — **אמיתי**.`),
    seriesPost(3, SERIES, 'OOD', `out-of-distribution — **שונה** — **נופל** — **יודעים גבולות**.`),
    seriesPost(4, SERIES, 'Benchmarks', `MMLU, HumanEval — **השוואה** — **לא** marketing — **ביקורת**.`),
    seriesPost(5, SERIES, 'Human eval', `אנשים **מדרגים** — **RLHF** — **יקר** — **אמין** לטקסט.`),
    seriesPost(6, SERIES, 'Calibration', `בטוח ו**צודק** — **לא** בטוח וטועה — **reliability**.`),
    seriesPost(7, SERIES, 'A/B production', `משתמשים אמיתיים — **מטריקה עסקית** — **המרה** — **לא** lab.`),
    seriesPost(8, SERIES, 'Red flags', `100% train — **חשוד** — **דליפה** test לtrain — **זליגה**.`),
    seriesPost(9, SERIES, 'לא הבנה', `טוב על מבחן — **לא** מבין — **דפוס** — **זהירות** בניסוח.`),
    seriesPost(10, SERIES, 'סיכום', `**למד = ביצועים טובים על נתונים שלא ראה, יציבים, מדידים הוגנים.**

לא **מספר אחד** — **מערך בדיקות**.`),
  ],
}
