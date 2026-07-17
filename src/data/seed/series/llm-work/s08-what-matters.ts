import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל יודע מה חשוב במשפט?'

export const llmWorkWhatMatters: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא יודע — לומד',``),
    seriesPost(2, SERIES, 'דפוסים סטטיסטיים',``),
    seriesPost(3, SERIES, 'שכבות עמוקות',``),
    seriesPost(4, SERIES, 'מילות מפתח',``),
    seriesPost(5, SERIES, 'פרומפט',``),
    seriesPost(6, SERIES, 'הטיה',``),
    seriesPost(7, SERIES, 'Negation',``),
    seriesPost(8, SERIES, 'מול אדם',``),
    seriesPost(9, SERIES, 'Mechanistic',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
