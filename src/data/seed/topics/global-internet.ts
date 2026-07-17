import type { SeedTopic } from '../types'
import {
  globalCountries,
  globalWhoControls,
  globalSubmarineCables,
  globalBgp,
  globalIspsConnect,
  globalPeering,
  globalPeakTraffic,
  globalSpeedByCountry,
  globalLaws,
  globalDecentralized,
} from '../series/global'

export const globalInternet: SeedTopic = {
  id: 'global-internet',
  name: 'אינטרנט ברמה גלובלית',
  description: `מדינות, BGP, כבלים ימיים, peering, חוקים ומבוזרות — 10 סדרות × 10 פוסטים.`,
  subtopics: [
    globalCountries,
    globalWhoControls,
    globalSubmarineCables,
    globalBgp,
    globalIspsConnect,
    globalPeering,
    globalPeakTraffic,
    globalSpeedByCountry,
    globalLaws,
    globalDecentralized,
  ],
}
