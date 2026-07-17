import type { SeedSubtopic } from '../../types'
import { xfmDeepArchitecture } from './s01-architecture'
import { xfmDeepEncoderDecoder } from './s02-encoder-decoder'
import { xfmDeepVsRnn } from './s03-vs-rnn'
import { xfmDeepSelfAttention } from './s04-self-attention'
import { xfmDeepEveryWordTalks } from './s05-every-word-talks'
import { xfmDeepPositionalEncoding } from './s06-positional-encoding'
import { xfmDeepWordOrder } from './s07-word-order'
import { xfmDeepLayers } from './s08-layers'
import { xfmDeepInfoFlow } from './s09-info-flow'
import { xfmDeepGoodForLanguage } from './s10-good-for-language'

export const XFM_DEEP_SERIES: SeedSubtopic[] = [
  xfmDeepArchitecture,
  xfmDeepEncoderDecoder,
  xfmDeepVsRnn,
  xfmDeepSelfAttention,
  xfmDeepEveryWordTalks,
  xfmDeepPositionalEncoding,
  xfmDeepWordOrder,
  xfmDeepLayers,
  xfmDeepInfoFlow,
  xfmDeepGoodForLanguage,
]
