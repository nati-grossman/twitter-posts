import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה דאטה בכלל?'

export const dataWhatIsData: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא רק מספרים',``),
    seriesPost(2, SERIES, 'מול מידע',``),
    seriesPost(3, SERIES, 'Structured',``),
    seriesPost(4, SERIES, 'Unstructured',``),
    seriesPost(5, SERIES, 'Semi-structured',``),
    seriesPost(6, SERIES, 'Big Data',``),
    seriesPost(7, SERIES, 'איכות',``),
    seriesPost(8, SERIES, 'פרטיות',``),
    seriesPost(9, SERIES, 'נכס',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
