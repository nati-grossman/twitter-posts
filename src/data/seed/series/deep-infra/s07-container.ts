import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה container?'

export const deepInfraContainer: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'קופסה לריצה',``),
    seriesPost(2, SERIES, 'לא VM מלא',``),
    seriesPost(3, SERIES, 'Image',``),
    seriesPost(4, SERIES, 'Docker',``),
    seriesPost(5, SERIES, 'Layers',``),
    seriesPost(6, SERIES, 'Port mapping',``),
    seriesPost(7, SERIES, 'Volumes',``),
    seriesPost(8, SERIES, 'docker-compose',``),
    seriesPost(9, SERIES, 'Production',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
