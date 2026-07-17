import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה data pipeline?'

export const dataPipeline: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'צינור',``),
    seriesPost(2, SERIES, 'ETL',``),
    seriesPost(3, SERIES, 'ELT',``),
    seriesPost(4, SERIES, 'Batch',``),
    seriesPost(5, SERIES, 'Streaming',``),
    seriesPost(6, SERIES, 'Data quality',``),
    seriesPost(7, SERIES, 'Orchestration',``),
    seriesPost(8, SERIES, 'Lineage',``),
    seriesPost(9, SERIES, 'Failure',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
