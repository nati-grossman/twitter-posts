import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך ייראו AI בעוד 5–10 שנים?'

export const aiFuture510Years: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא יודעים',``),
    seriesPost(2, SERIES, 'סביר',``),
    seriesPost(3, SERIES, 'חומרה',``),
    seriesPost(4, SERIES, 'רגולציה',``),
    seriesPost(5, SERIES, 'עבודה',``),
    seriesPost(6, SERIES, 'מדע',``),
    seriesPost(7, SERIES, 'AGI?',``),
    seriesPost(8, SERIES, 'סיכונים',``),
    seriesPost(9, SERIES, 'שוויון',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
