import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה ההבדל בין VM ל-container?'

export const deepInfraVmVsContainer: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'VM — מחשב וירטואלי',``),
    seriesPost(2, SERIES, 'Container — תהליך מבודד',``),
    seriesPost(3, SERIES, 'זמן הפעלה',``),
    seriesPost(4, SERIES, 'משאבים',``),
    seriesPost(5, SERIES, 'אבטחה',``),
    seriesPost(6, SERIES, 'מתי VM',``),
    seriesPost(7, SERIES, 'מתי container',``),
    seriesPost(8, SERIES, 'יחד',``),
    seriesPost(9, SERIES, 'Serverless',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
