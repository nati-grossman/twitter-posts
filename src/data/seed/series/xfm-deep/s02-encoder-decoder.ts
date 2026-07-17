import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה encoder ו-decoder?'

export const xfmDeepEncoderDecoder: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שני תפקידים', `**Encoder** — **קורא** קלט — **מייצג**. **Decoder** — **כותב** פלט — **מנצל** ייצוג.`),
    seriesPost(2, SERIES, 'תרגום קלאסי', `משפט עברית → encoder → **וקטורים** → decoder → אנגלית — **מקור** מול **יעד**.`),
    seriesPost(3, SERIES, 'Cross-attention', `Decoder **מסתכל** על פלט encoder — **קשר** בין שפות — **יישור**.`),
    seriesPost(4, SERIES, 'Encoder בלבד', `BERT — **מסכה** דו-כיוונית — **רואה** הכל — **הבנה** — **לא** כותב.`),
    seriesPost(5, SERIES, 'Decoder בלבד', `GPT — **causal mask** — **רק** עבר — **מנבא** — **שיחה**.`),
    seriesPost(6, SERIES, 'T5', `הכל **text-to-text** — encoder-decoder — **משימה אחת** — **גמיש**.`),
    seriesPost(7, SERIES, 'למה GPT ניצח', `משימה אחת — **גנרציה** — decoder-only **פשוט** — **סקייל** — **נתונים**.`),
    seriesPost(8, SERIES, 'אותו בלוק', `Encoder ו-decoder — **כמעט** אותו בלוק — **Attention** שונה — **מסכה**.`),
    seriesPost(9, SERIES, 'Seq2seq ישן', `LSTM encoder-decoder — **איטי** — Transformer **החליף** — **אותה** רעיון.`),
    seriesPost(10, SERIES, 'סיכום', `**Encoder = קורא ומקודד. Decoder = מייצר. GPT = decoder בלבד — בלי encoder נפרד.**

שיחה היום — **צד אחד**.`),
  ],
}
