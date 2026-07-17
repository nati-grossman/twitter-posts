import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה RLHF (למידה עם משוב אנושי)?'

export const trainRealRlhf: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הבעיה',``),
    seriesPost(2, SERIES, 'RLHF',``),
    seriesPost(3, SERIES, 'Reward model',``),
    seriesPost(4, SERIES, 'PPO',``),
    seriesPost(5, SERIES, 'מדרגים',``),
    seriesPost(6, SERIES, 'DPO',``),
    seriesPost(7, SERIES, 'בטיחות',``),
    seriesPost(8, SERIES, 'מחלוקת',``),
    seriesPost(9, SERIES, 'לא חובה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
