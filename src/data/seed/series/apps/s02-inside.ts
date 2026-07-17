import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך אפליקציה בנויה מבפנים?'

export const appsInside: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'שכבות',``),
    seriesPost(2, SERIES, 'MVC / MVVM',``),
    seriesPost(3, SERIES, 'Components',``),
    seriesPost(4, SERIES, 'Navigation',``),
    seriesPost(5, SERIES, 'Services',``),
    seriesPost(6, SERIES, 'Assets',``),
    seriesPost(7, SERIES, 'Config',``),
    seriesPost(8, SERIES, 'Dependencies',``),
    seriesPost(9, SERIES, 'Build',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
