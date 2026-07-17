import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך שיחות וידאו מתבצעות (Zoom / Meet)?'

export const realtimeVideoCalls: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא וידאו אחד ענק',``),
    seriesPost(2, SERIES, 'WebRTC',``),
    seriesPost(3, SERIES, 'SFU מול MCU',``),
    seriesPost(4, SERIES, 'Signaling',``),
    seriesPost(5, SERIES, 'NAT traversal',``),
    seriesPost(6, SERIES, 'איכות דינמית',``),
    seriesPost(7, SERIES, '100 משתתפים',``),
    seriesPost(8, SERIES, 'Recording',``),
    seriesPost(9, SERIES, 'אבטחה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
