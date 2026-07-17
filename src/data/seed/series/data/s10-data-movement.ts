import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך נתונים זזים בין מערכות?'

export const dataMovement: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא אי נפרד',``),
    seriesPost(2, SERIES, 'API sync',``),
    seriesPost(3, SERIES, 'Message queue',``),
    seriesPost(4, SERIES, 'CDC',``),
    seriesPost(5, SERIES, 'SFTP / CSV',``),
    seriesPost(6, SERIES, 'iPaaS',``),
    seriesPost(7, SERIES, 'Schema mapping',``),
    seriesPost(8, SERIES, 'Idempotency',``),
    seriesPost(9, SERIES, 'אבטחה בתנועה',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
