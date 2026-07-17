import type { SeedTopic } from '../types'
import { AI_LIMITS_SERIES } from '../series/ai-limits'

export const aiProblemsLimits: SeedTopic = {
  id: 'ai-problems-limits',
  name: 'בעיות והגבלות של AI',
  description: `Hallucination, אמינות, bias, הקשר, שכחה, עקביות והאם AI מבין — 10 סדרות × 10 פוסטים.`,
  subtopics: AI_LIMITS_SERIES,
}
