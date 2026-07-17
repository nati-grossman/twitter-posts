import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך שרתים מתרבים לפי עומס?'

export const deepInfraServersScale: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הבעיה',``),
    seriesPost(2, SERIES, 'Horizontal Scaling',``),
    seriesPost(3, SERIES, 'Vertical Scaling',``),
    seriesPost(4, SERIES, 'Auto Scaling',``),
    seriesPost(5, SERIES, 'Stateless',``),
    seriesPost(6, SERIES, 'Bottleneck',``),
    seriesPost(7, SERIES, 'Queue',``),
    seriesPost(8, SERIES, 'Cold Start',``),
    seriesPost(9, SERIES, 'Capacity Planning',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
