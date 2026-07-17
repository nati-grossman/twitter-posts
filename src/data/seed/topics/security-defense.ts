import type { SeedTopic } from '../types'
import {
  defenseHackersBreakIn,
  defenseSqlInjection,
  defenseDdos,
  defenseProtectSite,
  defenseSslCertificate,
  defenseRealSite,
  defensePhishing,
  defenseBrowserProtects,
  defensePermissions,
  defenseUserData,
} from '../series/defense'

export const securityDefense: SeedTopic = {
  id: 'security-defense',
  name: 'אבטחה והגנה',
  description: `פריצות, SQLi, DDoS, SSL, phishing, דפדפן, הרשאות ושמירת מידע — 10 סדרות × 10 פוסטים.`,
  subtopics: [
    defenseHackersBreakIn,
    defenseSqlInjection,
    defenseDdos,
    defenseProtectSite,
    defenseSslCertificate,
    defenseRealSite,
    defensePhishing,
    defenseBrowserProtects,
    defensePermissions,
    defenseUserData,
  ],
}
