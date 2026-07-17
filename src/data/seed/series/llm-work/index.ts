import type { SeedSubtopic } from '../../types'
import { llmWorkNextWord } from './s01-next-word'
import { llmWorkToken } from './s02-token'
import { llmWorkTextToNumbers } from './s03-text-to-numbers'
import { llmWorkVocabulary } from './s04-vocabulary'
import { llmWorkContext } from './s05-context'
import { llmWorkAttention } from './s06-attention'
import { llmWorkAttentionImportant } from './s07-attention-important'
import { llmWorkWhatMatters } from './s08-what-matters'
import { llmWorkStepByStep } from './s09-step-by-step'
import { llmWorkNoUnderstanding } from './s10-no-understanding'

export const LLM_WORK_SERIES: SeedSubtopic[] = [
  llmWorkNextWord,
  llmWorkToken,
  llmWorkTextToNumbers,
  llmWorkVocabulary,
  llmWorkContext,
  llmWorkAttention,
  llmWorkAttentionImportant,
  llmWorkWhatMatters,
  llmWorkStepByStep,
  llmWorkNoUnderstanding,
]
