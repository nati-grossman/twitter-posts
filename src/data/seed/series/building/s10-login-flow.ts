import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מערכת התחברות באמת עובדת מקצה לקצה?'

export const buildingLoginFlow: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'המסע המלא',``),
    seriesPost(2, SERIES, 'הרשמה',``),
    seriesPost(3, SERIES, 'בדיקת סיסמה',``),
    seriesPost(4, SERIES, 'Session vs JWT',``),
    seriesPost(5, SERIES, 'Cookie מאובטח',``),
    seriesPost(6, SERIES, '2FA',``),
    seriesPost(7, SERIES, 'Refresh Token',``),
    seriesPost(8, SERIES, 'Logout',``),
    seriesPost(9, SERIES, 'OAuth Flow',``),
    seriesPost(10, SERIES, 'סיכום מקצה לקצה',``),
  ],
}
