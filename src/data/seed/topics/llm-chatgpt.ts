import type { SeedTopic } from '../types'
import {
  llmChatNextWord,
  llmChatToken,
  llmChatNotHuman,
  llmChatStepByStep,
  llmChatContextWindow,
  llmChatInvents,
  llmChatHallucination,
  llmChatTrainHuge,
  llmChatFineTuning,
  llmChatImproveExisting,
} from '../series/llm-chat'

export const llmChatgpt: SeedTopic = {
  id: 'llm-chatgpt',
  name: 'מודלים כמו ChatGPT',
  description: `טוקנים, חיזוי, הקשר, hallucination, אימון, fine-tuning ושיפור — 10 סדרות × 10 פוסטים.`,
  subtopics: [
    llmChatNextWord,
    llmChatToken,
    llmChatNotHuman,
    llmChatStepByStep,
    llmChatContextWindow,
    llmChatInvents,
    llmChatHallucination,
    llmChatTrainHuge,
    llmChatFineTuning,
    llmChatImproveExisting,
  ],
}
