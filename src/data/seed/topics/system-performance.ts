import type { SeedTopic } from '../types'
import {
  perfFastVsSlow,
  perfOptimization,
  perfAdvancedCache,
  perfReduceServerLoad,
  perfAsync,
  perfConcurrency,
  perfMillionUsers,
  perfQueue,
  perfLoadBalanceRealtime,
  perfBottleneck,
} from '../series/performance'

export const systemPerformance: SeedTopic = {
  id: 'system-performance',
  name: 'ביצועים ומהירות מערכות',
  description: `אופטימיזציה, cache, async, תורים, מיליון משתמשים ובottleneck — 10 סדרות × 10 פוסטים.`,
  subtopics: [
    perfFastVsSlow,
    perfOptimization,
    perfAdvancedCache,
    perfReduceServerLoad,
    perfAsync,
    perfConcurrency,
    perfMillionUsers,
    perfQueue,
    perfLoadBalanceRealtime,
    perfBottleneck,
  ],
}
