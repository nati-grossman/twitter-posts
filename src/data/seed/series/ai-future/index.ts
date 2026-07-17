import type { SeedSubtopic } from '../../types'
import { aiFutureAgents } from './s01-agents'
import { aiFutureTasksAlone } from './s02-tasks-alone'
import { aiFutureToolUse } from './s03-tool-use'
import { aiFutureInternet } from './s04-internet'
import { aiFutureMultimodal } from './s05-multimodal'
import { aiFutureSeeImages } from './s06-see-images'
import { aiFutureVideo } from './s07-video'
import { aiFutureCodeModels } from './s08-code-models'
import { aiFuture510Years } from './s09-5-10-years'
import { aiFutureOsWorld } from './s10-os-world'

export const AI_FUTURE_SERIES: SeedSubtopic[] = [
  aiFutureAgents,
  aiFutureTasksAlone,
  aiFutureToolUse,
  aiFutureInternet,
  aiFutureMultimodal,
  aiFutureSeeImages,
  aiFutureVideo,
  aiFutureCodeModels,
  aiFuture510Years,
  aiFutureOsWorld,
]
