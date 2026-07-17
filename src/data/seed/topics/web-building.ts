import type { SeedTopic } from '../types'
import {
  buildingFirstSite,
  buildingFrontendBackend,
  buildingApi,
  buildingSitesTalk,
  buildingJson,
  buildingAppBehind,
  buildingDatabase,
  buildingSmartData,
  buildingAuthnAuthz,
  buildingLoginFlow,
} from '../series/building'

export const webBuilding: SeedTopic = {
  id: 'web-building',
  name: 'בניית אתרים ומערכות',
  description: `Frontend/Backend, API, JSON, DB, AuthN/AuthZ והתחברות מקצה לקצה — 10 סדרות × 10 פוסטים.`,
  subtopics: [
    buildingFirstSite,
    buildingFrontendBackend,
    buildingApi,
    buildingSitesTalk,
    buildingJson,
    buildingAppBehind,
    buildingDatabase,
    buildingSmartData,
    buildingAuthnAuthz,
    buildingLoginFlow,
  ],
}
