import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך בונים אתר ראשון מאפס?'

export const buildingFirstSite: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מה באמת בונים',``),
    seriesPost(2, SERIES, 'HTML — שלד',``),
    seriesPost(3, SERIES, 'CSS — מראה',``),
    seriesPost(4, SERIES, 'JavaScript — התנהגות',``),
    seriesPost(5, SERIES, 'מקומי לפני פרסום',``),
    seriesPost(6, SERIES, 'Hosting',``),
    seriesPost(7, SERIES, 'דומיין',``),
    seriesPost(8, SERIES, 'מתי צריך Backend',``),
    seriesPost(9, SERIES, 'כלים מודרניים',``),
    seriesPost(10, SERIES, 'סיכום — מסלול ראשון',``),
  ],
}
