import type { SeedTopic } from '../types'
import {
  futureWeb3,
  futureBlockchain,
  futureCryptoInternet,
  futureBitcoin,
  futureSmartContracts,
  futureDecentralized,
  futureEdge,
  futureAiInternet,
  futureApps10Years,
  futureBrowserFuture,
} from '../series/future'

export const futureInternet: SeedTopic = {
  id: 'future-internet',
  name: 'אינטרנט של העתיד',
  description: `Web3, בלוקצ׳יין, ביטקוין, edge, AI, אפליקציות ודפדפן — 10 סדרות × 10 פוסטים.`,
  subtopics: [
    futureWeb3,
    futureBlockchain,
    futureCryptoInternet,
    futureBitcoin,
    futureSmartContracts,
    futureDecentralized,
    futureEdge,
    futureAiInternet,
    futureApps10Years,
    futureBrowserFuture,
  ],
}
