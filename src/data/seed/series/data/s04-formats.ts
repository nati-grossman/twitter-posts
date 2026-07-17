import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה פורמטים (JSON, XML)?'

export const dataFormats: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'פורמט = חוזה',``),
    seriesPost(2, SERIES, 'JSON',``),
    seriesPost(3, SERIES, 'XML',``),
    seriesPost(4, SERIES, 'CSV',``),
    seriesPost(5, SERIES, 'Protobuf',``),
    seriesPost(6, SERIES, 'Parquet',``),
    seriesPost(7, SERIES, 'Schema',``),
    seriesPost(8, SERIES, 'Conversion',``),
    seriesPost(9, SERIES, 'Human readable',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
