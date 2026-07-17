import type { SeedTopic } from '../types'
import {
  trafficSlowInternet,
  trafficLatency,
  trafficBandwidth,
  trafficVideoStutter,
  trafficStreaming,
  trafficBuffering,
  trafficOnlineGames,
  trafficPingGaming,
  trafficStreamingFlow,
  trafficOverload,
} from '../series/traffic'

export const trafficSpeed: SeedTopic = {
  id: 'traffic-speed',
  name: 'תעבורה ומהירות',
  description: `latency, bandwidth, סטרימינג, buffer, גיימינג ועומס — 10 סדרות × 10 פוסטים.`,
  subtopics: [
    trafficSlowInternet,
    trafficLatency,
    trafficBandwidth,
    trafficVideoStutter,
    trafficStreaming,
    trafficBuffering,
    trafficOnlineGames,
    trafficPingGaming,
    trafficStreamingFlow,
    trafficOverload,
  ],
}
