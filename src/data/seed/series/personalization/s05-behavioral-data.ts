import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה behavioral data?'

export const persBehavioralData: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'התנהגות כדאטה',``),
    seriesPost(2, SERIES, 'Event stream',``),
    seriesPost(3, SERIES, 'מול declarative',``),
    seriesPost(4, SERIES, 'Features',``),
    seriesPost(5, SERIES, 'Session',``),
    seriesPost(6, SERIES, 'Funnel',``),
    seriesPost(7, SERIES, 'אנונימי?',``),
    seriesPost(8, SERIES, 'רגישות',``),
    seriesPost(9, SERIES, 'Retention',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
