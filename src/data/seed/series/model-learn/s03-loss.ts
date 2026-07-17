import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה פונקציית הפסד (Loss)?'

export const modelLearnLoss: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'מדד טעות',``),
    seriesPost(2, SERIES, 'MSE',``),
    seriesPost(3, SERIES, 'Cross-entropy',``),
    seriesPost(4, SERIES, '0 לא תמיד',``),
    seriesPost(5, SERIES, 'גרף',``),
    seriesPost(6, SERIES, 'Train vs Val',``),
    seriesPost(7, SERIES, 'לא מטריקה עסקית',``),
    seriesPost(8, SERIES, 'רגולריזציה',``),
    seriesPost(9, SERIES, 'Multi-task',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
