import type { SeedSubtopic } from '../../types'
import { trainRealTrainChatgpt } from './s01-train-chatgpt'
import { trainRealPretraining } from './s02-pretraining'
import { trainRealFineTuning } from './s03-fine-tuning'
import { trainRealRlhf } from './s04-rlhf'
import { trainRealHumansFix } from './s05-humans-fix'
import { trainRealBehavior } from './s06-behavior'
import { trainRealQualityDataset } from './s07-quality-dataset'
import { trainRealFilterData } from './s08-filter-data'
import { trainRealBias } from './s09-bias'
import { trainRealDirtyData } from './s10-dirty-data'

export const TRAIN_REAL_SERIES: SeedSubtopic[] = [
  trainRealTrainChatgpt,
  trainRealPretraining,
  trainRealFineTuning,
  trainRealRlhf,
  trainRealHumansFix,
  trainRealBehavior,
  trainRealQualityDataset,
  trainRealFilterData,
  trainRealBias,
  trainRealDirtyData,
]
