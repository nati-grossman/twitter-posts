import type { SeedTopic } from '../types'
import {
  infraRouter,
  infraIsp,
  infraCountries,
  infraFiber,
  infraDatacenter,
  infraCables,
  infraRouting,
  infraDns,
  infraGoogle,
  infraBrowserUrl,
} from '../series/infra'

export const internetInfrastructure: SeedTopic = {
  id: 'internet-infrastructure',
  name: 'תשתיות האינטרנט',
  description: `תשתית פיזית ולוגית — 10 סדרות × 10 פוסטים: ראוטר, ISP, כבלים, דאטה סנטר, DNS, ומה קורה בדפדפן.`,
  subtopics: [
    infraRouter,
    infraIsp,
    infraCountries,
    infraFiber,
    infraDatacenter,
    infraCables,
    infraRouting,
    infraDns,
    infraGoogle,
    infraBrowserUrl,
  ],
}
