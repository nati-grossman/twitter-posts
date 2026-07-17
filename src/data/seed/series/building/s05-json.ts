import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה JSON?'

export const buildingJson: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'פורמט טקסט',``),
    seriesPost(2, SERIES, 'מבנה',``),
    seriesPost(3, SERIES, 'למה לא HTML',``),
    seriesPost(4, SERIES, 'ב-API',``),
    seriesPost(5, SERIES, 'parse ו-stringify',``),
    seriesPost(6, SERIES, 'שגיאות נפוצות',``),
    seriesPost(7, SERIES, 'XML ישן',``),
    seriesPost(8, SERIES, 'YAML, protobuf',``),
    seriesPost(9, SERIES, 'גודל',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
