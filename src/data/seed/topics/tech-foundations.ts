import type { SeedTopic } from '../types'
import {
  s01Internet,
  s02Server,
  s03Client,
  s04ComputersTalk,
  s05Protocol,
  s06Packet,
  s07SplitRouting,
  s08Ip,
  s09Mac,
  s10WifiInternet,
} from '../series'

export const techFoundations: SeedTopic = {
  id: 'tech-foundations',
  name: 'יסודות',
  description: `מפת יסודות תשתית ורשת — 10 סדרות × 10 פוסטים.
סגנון הסבר אינטואיטיבי בעברית, עם מונחים באנגלית where needed.`,
  subtopics: [
    s01Internet,
    s02Server,
    s03Client,
    s04ComputersTalk,
    s05Protocol,
    s06Packet,
    s07SplitRouting,
    s08Ip,
    s09Mac,
    s10WifiInternet,
  ],
}
