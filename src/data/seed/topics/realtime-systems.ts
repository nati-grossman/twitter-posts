import type { SeedTopic } from '../types'
import {
  realtimeWhatsapp,
  realtimeVideoCalls,
  realtimeWebsockets,
  realtimeSyncUsers,
  realtimeGameState,
  realtimeServerTick,
  realtimeNoJumps,
  realtimeEventDriven,
  realtimeEventsNotRequests,
  realtimeFinance,
} from '../series/realtime'

export const realtimeSystems: SeedTopic = {
  id: 'realtime-systems',
  name: 'מערכות בזמן אמת',
  description: `WhatsApp, וידאו, WebSockets, משחקים, tick, event-driven ופיננסים — 10 סדרות × 10 פוסטים.`,
  subtopics: [
    realtimeWhatsapp,
    realtimeVideoCalls,
    realtimeWebsockets,
    realtimeSyncUsers,
    realtimeGameState,
    realtimeServerTick,
    realtimeNoJumps,
    realtimeEventDriven,
    realtimeEventsNotRequests,
    realtimeFinance,
  ],
}
