import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה push notification?'

export const appsPush: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'דחיפה מבחוץ',``),
    seriesPost(2, SERIES, 'מול local',``),
    seriesPost(3, SERIES, 'FCM / APNs',``),
    seriesPost(4, SERIES, 'רישום',``),
    seriesPost(5, SERIES, 'Payload',``),
    seriesPost(6, SERIES, 'הרשאה',``),
    seriesPost(7, SERIES, 'Silent push',``),
    seriesPost(8, SERIES, 'לא SMS',``),
    seriesPost(9, SERIES, 'שיווק מול transactional',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
