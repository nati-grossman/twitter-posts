import type { SeedTopic } from '../types'
import { LLM_WORK_SERIES } from '../series/llm-work'

export const howLlmsWork: SeedTopic = {
  id: 'how-llms-work',
  name: 'איך מודלי שפה (LLMs) עובדים',
  description: `חיזוי מילה, טוקנים, embedding, vocabulary, הקשר, Attention וגבולות הבנה — 10 סדרות × 10 פוסטים.`,
  subtopics: LLM_WORK_SERIES,
}
