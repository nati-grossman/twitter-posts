import type { SeedSubtopic } from '../../types'
import { aiProdChatgptSystem } from './s01-chatgpt-system'
import { aiProdAiApi } from './s02-ai-api'
import { aiProdAppUsesModel } from './s03-app-uses-model'
import { aiProdInference } from './s04-inference'
import { aiProdCloud } from './s05-cloud'
import { aiProdLatency } from './s06-latency'
import { aiProdFaster } from './s07-faster'
import { aiProdBatching } from './s08-batching'
import { aiProdScaleMillions } from './s09-scale-millions'
import { aiProdRealtimeOps } from './s10-realtime-ops'

export const AI_PROD_SERIES: SeedSubtopic[] = [
  aiProdChatgptSystem,
  aiProdAiApi,
  aiProdAppUsesModel,
  aiProdInference,
  aiProdCloud,
  aiProdLatency,
  aiProdFaster,
  aiProdBatching,
  aiProdScaleMillions,
  aiProdRealtimeOps,
]
