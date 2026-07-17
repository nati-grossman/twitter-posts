import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'האם יהיה בכלל דפדפן בעתיד?'

export const futureBrowserFuture: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'דפדפן = OS שכבה',``),
    seriesPost(2, SERIES, 'יתמורפוזה',``),
    seriesPost(3, SERIES, 'אפליקציות שבולעות',``),
    seriesPost(4, SERIES, 'WebAssembly',``),
    seriesPost(5, SERIES, 'AI built-in',``),
    seriesPost(6, SERIES, 'פרטיות',``),
    seriesPost(7, SERIES, 'VR browser',``),
    seriesPost(8, SERIES, 'Protocol חדש',``),
    seriesPost(9, SERIES, 'למה יישאר',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
