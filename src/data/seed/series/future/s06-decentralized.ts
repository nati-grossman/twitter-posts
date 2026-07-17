import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה אינטרנט מבוזר באמת?'

export const futureDecentralized: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא שרת אחד',``),
    seriesPost(2, SERIES, 'מול מרוכז',``),
    seriesPost(3, SERIES, 'IPFS',``),
    seriesPost(4, SERIES, 'Mesh',``),
    seriesPost(5, SERIES, 'ActivityPub',``),
    seriesPost(6, SERIES, 'מיתוס מוחלט',``),
    seriesPost(7, SERIES, 'יתרונות',``),
    seriesPost(8, SERIES, 'חסרונות',``),
    seriesPost(9, SERIES, 'עתיד היברידי',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
