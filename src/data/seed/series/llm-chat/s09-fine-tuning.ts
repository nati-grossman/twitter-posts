import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה fine-tuning?'

export const llmChatFineTuning: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**Fine-tuning** — לוקחים מודל **מאומן** — **ממשיכים** על דאטה **צר** — **משימה/סגנון**.`),
    seriesPost(2, SERIES, 'מול pretrain', `Pretrain — **כל השפה**. Fine-tune — **רפואה**, **משפט עברי**, **טון מותג**.`),
    seriesPost(3, SERIES, 'Full vs LoRA', `**Full** — כל המשקלים — **יקר**. **LoRA** — שכבות קטנות — **זול** — **נפוץ**.`),
    seriesPost(4, SERIES, 'דאטה קטן', `אלפי דוגמאות **איכותיות** — **לפעמים** מספיק — **לא** מיליון גרוע.`),
    seriesPost(5, SERIES, 'Overfit', `זוכר **דוגמאות** — **נכשל** בחדש — **epoch** מעט — **validation**.`),
    seriesPost(6, SERIES, 'Catastrophic forgetting', `שוכח **כללי** — **רק** niche — **מיזוג** זהיר — **instruction mix**.`),
    seriesPost(7, SERIES, 'API fine-tune', `OpenAI — **מעלה** JSONL — **מקבל** model id — **לא** weights — **שחור קופסה**.`),
    seriesPost(8, SERIES, 'מול prompt', `פרומפט — **מהיר**, **זול**. Fine-tune — **התנהגות קבועה** — **ללא** prompt ענק.`),
    seriesPost(9, SERIES, 'רישוי', `Llama — **תנאים** — **commercial** — **לקרוא** לפני שימוש.`),
    seriesPost(10, SERIES, 'סיכום', `**Fine-tuning = התאמת מודל קיים לדומיין שלך — LoRA או full.**

כשפרומפט + RAG **לא מספיקים** — **שקול**.`),
  ],
}
