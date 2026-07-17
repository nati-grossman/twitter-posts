import type { SeedTopic } from '../types'
import {
  scaleGoogleFast,
  scaleSearchEngine,
  scaleIndex,
  scaleRecommendations,
  scaleFeedAlgo,
  scaleBillionsUsers,
  scaleLoadBalancing,
  scaleSurviveLoad,
  scaleMicroservices,
  scaleManyParts,
} from '../series/scale'

export const scaleInternet: SeedTopic = {
  id: 'scale-internet',
  name: 'אינטרנט בקנה מידה גדול',
  description: `חיפוש, פיד, מיליארדי משתמשים, load balancing ומיקרו-שירותים — 10 סדרות × 10 פוסטים.`,
  subtopics: [
    scaleGoogleFast,
    scaleSearchEngine,
    scaleIndex,
    scaleRecommendations,
    scaleFeedAlgo,
    scaleBillionsUsers,
    scaleLoadBalancing,
    scaleSurviveLoad,
    scaleMicroservices,
    scaleManyParts,
  ],
}
