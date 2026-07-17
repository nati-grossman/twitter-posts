import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודלים מקבלים התנהגות?'

export const trainRealBehavior: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא אופי מולד',``),
    seriesPost(2, SERIES, 'SFT',``),
    seriesPost(3, SERIES, 'RLHF',``),
    seriesPost(4, SERIES, 'System',``),
    seriesPost(5, SERIES, 'Refusal',``),
    seriesPost(6, SERIES, 'Tone',``),
    seriesPost(7, SERIES, 'Jailbreak',``),
    seriesPost(8, SERIES, 'סותרים',``),
    seriesPost(9, SERIES, 'Customization',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
