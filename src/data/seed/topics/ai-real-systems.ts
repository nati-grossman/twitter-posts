import type { SeedTopic } from '../types'
import { AI_PROD_SERIES } from '../series/ai-prod'

export const aiRealSystems: SeedTopic = {
  id: 'ai-real-systems',
  name: 'AI מערכות אמיתיות (מאחורי הקלעים של מוצרים)',
  description: `ChatGPT כמערכת, API, inference, ענן, latency, batching, scale ותחזוקה — 10 סדרות × 10 פוסטים.`,
  subtopics: AI_PROD_SERIES,
}
