import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך AI מזהה טקסט?'

export const deepMlText: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'טקסט = רצף', `אותיות, מילים — **סדר** חשוב — “לא טוב” ≠ “טוב לא”.`),
    seriesPost(2, SERIES, 'Tokenization', `מפצל ל**טוקנים** — מילה / חלק מילה — **מספרים** — vocabulary.`),
    seriesPost(3, SERIES, 'ישן: Bag of Words', `סופרים מילים — **מאבד** סדר — **בסיס** — **לא** ChatGPT.`),
    seriesPost(4, SERIES, 'RNN / LSTM', `קוראים **תו אחר תו** — **זיכרון** — **איטי** — **לפני** Transformer.`),
    seriesPost(5, SERIES, 'Transformer היום', `**Attention** על כל המשפט — **מקביל** — **GPT, BERT**.`),
    seriesPost(6, SERIES, 'Classification', `סנטימנט — חיובי/שלילי — **טקסט → וקטור →** קטגוריה.`),
    seriesPost(7, SERIES, 'NER', `**Named Entity** — שמות, מקומות — **חילוץ** — **מסמכים**.`),
    seriesPost(8, SERIES, 'שפות שונות', `Tokenizer **שונה** — עברית, אנגלית — **multilingual** models — **אותו** רעיון.`),
    seriesPost(9, SERIES, 'אורך', `מגבלת **context** — 4K, 128K טוקנים — **לא** ספר שלם בלי טריקים.`),
    seriesPost(10, SERIES, 'סיכום', `**טקסט = טוקנים + מודל רצף (היום Attention) + משימת ראש.**

זיהוי ≠ יצירה — **אותה** תשתית לעיתים.`),
  ],
}
