import type { SeedTopic } from '../types'
import {
  secHttp,
  secHttps,
  secEncryption,
  secLoggedIn,
  secCookies,
  secSession,
  secLogin,
  secPasswords,
  secUsers,
  secFirewall,
} from '../series/security'

export const communicationSecurity: SeedTopic = {
  id: 'communication-security',
  name: 'תקשורת ואבטחה',
  description: `HTTP, HTTPS, הצפנה, cookies, sessions, login ו-firewall — 10 סדרות × 10 פוסטים.`,
  subtopics: [
    secHttp,
    secHttps,
    secEncryption,
    secLoggedIn,
    secCookies,
    secSession,
    secLogin,
    secPasswords,
    secUsers,
    secFirewall,
  ],
}
