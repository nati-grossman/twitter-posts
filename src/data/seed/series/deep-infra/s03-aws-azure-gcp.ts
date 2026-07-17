import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה AWS / Azure / GCP (ברמת רעיון)?'

export const deepInfraBigThree: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שלושה ענקים',``),
    seriesPost(2, SERIES, 'אותו רעיון',``),
    seriesPost(3, SERIES, 'AWS בקצרה',``),
    seriesPost(4, SERIES, 'Azure בקצרה',``),
    seriesPost(5, SERIES, 'GCP בקצרה',``),
    seriesPost(6, SERIES, 'בחירה',``),
    seriesPost(7, SERIES, 'Free tier',``),
    seriesPost(8, SERIES, 'Multi-cloud',``),
    seriesPost(9, SERIES, 'שירותים מנוהלים',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
