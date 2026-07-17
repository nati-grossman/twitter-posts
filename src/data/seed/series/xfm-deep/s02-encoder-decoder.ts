import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה encoder ו-decoder?'

export const xfmDeepEncoderDecoder: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שני תפקידים',``),
    seriesPost(2, SERIES, 'תרגום קלאסי',``),
    seriesPost(3, SERIES, 'Cross-attention',``),
    seriesPost(4, SERIES, 'Encoder בלבד',``),
    seriesPost(5, SERIES, 'Decoder בלבד',``),
    seriesPost(6, SERIES, 'T5',``),
    seriesPost(7, SERIES, 'למה GPT ניצח',``),
    seriesPost(8, SERIES, 'אותו בלוק',``),
    seriesPost(9, SERIES, 'Seq2seq ישן',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
