import type { SeedTopic } from '../types'
import {
  persSitesKnowLikes,
  persRecommendation,
  persTiktokFeed,
  persYoutubeNext,
  persBehavioralData,
  persTracking,
  persAdsPersonal,
  persAbTesting,
  persImproveProduct,
  persPrivacyLine,
} from '../series/personalization'

export const systemsLearnYou: SeedTopic = {
  id: 'systems-learn-you',
  name: 'איך מערכות לומדות עליך',
  description: `המלצות, טיקטוק, יוטיוב, tracking, פרסום, A/B ופרטיות — 10 סדרות × 10 פוסטים.`,
  subtopics: [
    persSitesKnowLikes,
    persRecommendation,
    persTiktokFeed,
    persYoutubeNext,
    persBehavioralData,
    persTracking,
    persAdsPersonal,
    persAbTesting,
    persImproveProduct,
    persPrivacyLine,
  ],
}
