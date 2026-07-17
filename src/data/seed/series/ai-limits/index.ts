import type { SeedSubtopic } from '../../types'
import { aiLimitsInventsAnswers } from './s01-invents-answers'
import { aiLimitsHallucination } from './s02-hallucination'
import { aiLimitsNotReliable } from './s03-not-reliable'
import { aiLimitsSpotWrong } from './s04-spot-wrong'
import { aiLimitsBias } from './s05-bias'
import { aiLimitsOpinionsFromData } from './s06-opinions-from-data'
import { aiLimitsContextLimit } from './s07-context-limit'
import { aiLimitsForgets } from './s08-forgets'
import { aiLimitsInconsistency } from './s09-inconsistency'
import { aiLimitsUnderstanding } from './s10-understanding'

export const AI_LIMITS_SERIES: SeedSubtopic[] = [
  aiLimitsInventsAnswers,
  aiLimitsHallucination,
  aiLimitsNotReliable,
  aiLimitsSpotWrong,
  aiLimitsBias,
  aiLimitsOpinionsFromData,
  aiLimitsContextLimit,
  aiLimitsForgets,
  aiLimitsInconsistency,
  aiLimitsUnderstanding,
]
