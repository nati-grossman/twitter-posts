import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה edge computing?'

export const futureEdge: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'העברת חישוב', `**Edge** — **קרוב** למשתמש — לא רק דאטה סנטר מרכזי — **מכשיר, מגדל, עיר**.`),
    seriesPost(2, SERIES, 'למה', `latency — **וידאו**, רכב, AR — **מילי-שניות** — **לא** round-trip לוירגיניה.`),
    seriesPost(3, SERIES, 'מול Cloud', `Cloud — **מרכז**. Edge — **מפוזר** — **משלימים** — **hybrid**.`),
    seriesPost(4, SERIES, 'CDN קרוב', `Cloudflare Workers — **קוד** ב-Edge — **לא** רק קבצים — **serverless** מקומי.`),
    seriesPost(5, SERIES, 'IoT', `חיישן — **מעבד** מקומי — **לא** שולח הכל — **סינון**.`),
    seriesPost(6, SERIES, '5G MEC', `Multi-access Edge — **אופרטור** — **רשת + compute** — **משחקים**.`),
    seriesPost(7, SERIES, 'פרטיות', `וידאו מצלמה — **מעבד** בבית — **לא** ענן — **פחות** העלאה.`),
    seriesPost(8, SERIES, 'סינכרון', `Edge מחליט — **מאוחר** לענן — **לא** הכל מיידי — **עקביות**.`),
    seriesPost(9, SERIES, 'AI at edge', `מודל קטן על טלפון — **on-device** — **לא** שולח קול לענן.`),
    seriesPost(10, SERIES, 'סיכום', `**Edge = חישוב קרוב למקור הנתונים — מהיר, פרטי, מפוזר.**

עתיד = **ענן + edge** — לא אחד מחליף.`),
  ],
}
