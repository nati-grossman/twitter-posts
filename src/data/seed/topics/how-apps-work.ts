import type { SeedTopic } from '../types'
import {
  appsWhatIsApp,
  appsInside,
  appsOnOpen,
  appsServerTalk,
  appsApiInApps,
  appsLocalStorage,
  appsBackground,
  appsUpdates,
  appsPush,
  appsFastReopen,
} from '../series/apps'

export const howAppsWork: SeedTopic = {
  id: 'how-apps-work',
  name: 'איך אפליקציות באמת עובדות',
  description: `מהי אפליקציה, שרת, API, אחסון מקומי, רקע, עדכונים ו-push — 10 סדרות × 10 פוסטים.`,
  subtopics: [
    appsWhatIsApp,
    appsInside,
    appsOnOpen,
    appsServerTalk,
    appsApiInApps,
    appsLocalStorage,
    appsBackground,
    appsUpdates,
    appsPush,
    appsFastReopen,
  ],
}
