import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך משפט הופך למספרים?'

export const llmWorkTextToNumbers: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'Pipeline', `טקסט → **tokenizer** → רשימת IDs → **embedding** → **טנסור** — **GPU**.`),
    seriesPost(2, SERIES, 'Tokenizer', `מפצל לטוקנים — **ממפה** ל-ID — **deterministic** — **אותו קלט = אותו פלט**.`),
    seriesPost(3, SERIES, 'Embedding layer', `כל ID → **וקטור** 4096 — **שורה** בטבלה **למידה** — **משמעות** סטטיסטית.`),
    seriesPost(4, SERIES, 'Position', `סדר מילים — **positional encoding** — **לא** רק תוכן — **מיקום**.`),
    seriesPost(5, SERIES, 'Batch', `מאות משפטים **מקביל** — **מטריצות** — **padding** — **אותו אורך**.`),
    seriesPost(6, SERIES, 'Float', `מספרים **עשרוניים** — **bfloat16** — **חיסכון** — **דיוק** כמעט.`),
    seriesPost(7, SERIES, 'Decode חזרה', `IDs → tokenizer → **טקסט** — **הצגה** — **לא** בשכבות אמצע.`),
    seriesPost(8, SERIES, 'Unicode', `UTF-8 → bytes → BPE — **עברית** — **אמוג’י** — **אותו** מנגנון.`),
    seriesPost(9, SERIES, 'לא ASCII ישן', `לא תו = מספר 65 בלבד — **וקטור עשיר** — **הקשר**.`),
    seriesPost(10, SERIES, 'סיכום', `**משפט למספרים = token IDs + embedding vectors + מיקום — אז שכבות Transformer.**

מה שאתה כותב — **מטריצות**.`),
  ],
}
