import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מאמנים מודל שפה ענק?'

export const llmChatTrainHuge: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שלושה שלבים', `**Pretrain** → **SFT** → **RLHF** (לעיתים) — **לא** יום אחד.`),
    seriesPost(2, SERIES, 'Pretrain', `טריליוני טוקנים — **אינטרנט** + ספרים — **חיזוי** הבא — **שבועות** על אלפי GPU.`),
    seriesPost(3, SERIES, 'תשתית', `קластר — **NVLink** — **checkpoint** — **תקלות** — **מיליוני דולר**.`),
    seriesPost(4, SERIES, 'נתונים', `סינון, dedup, **איכות** — **curation** — **רעיל** יוצא — **bias**.`),
    seriesPost(5, SERIES, 'ארכיטקטורה', `Transformer — **מיליארדי** פרמטרים — **Chinchilla** — **optimal** data/compute.`),
    seriesPost(6, SERIES, 'SFT', `שיחות מדורגות — **עוזר** — **פורמט** — **התנהגות** — **פחות** דאטה מ-pretrain.`),
    seriesPost(7, SERIES, 'RLHF', `reward model — **PPO** — **מועיל** — **בטוח** — **יקר** — **מחלוקת**.`),
    seriesPost(8, SERIES, 'DPO / אלטרנטיבות', `בלי RL מלא — **פשוט יותר** — **נפוץ** 2024+.`),
    seriesPost(9, SERIES, 'לא לכולם', `רק **מעט** חברות — **open weights** חלקי — **Llama** — **קהילה** fine-tune.`),
    seriesPost(10, SERIES, 'סיכום', `**מודל ענק = pretrain יקר + SFT + יישור אנושי — תשתית ודאטה ענק.**

אתה **לא** מאמן GPT-4 בבית — **משתמש** או **fine-tune קטן**.`),
  ],
}
