import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה concurrency?'

export const perfConcurrency: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הגדרה', `**Concurrency** — **כמה** משימות **מתקדמות** — לא בהכרח **באותה מילי-שנייה** — **מקבילות לוגית**.`),
    seriesPost(2, SERIES, 'מול parallel', `**Parallel** — שני cores **בו-זמן** — **אמת** מקביל — **CPU** — **כבד**.`),
    seriesPost(3, SERIES, 'Threads', `תהליכון — **זיכרון משותף** — **זהיר** — **race condition**.`),
    seriesPost(4, SERIES, 'Processes', `נפרדים — **בטוח** — **כבד** — **spawn** — **workers**.`),
    seriesPost(5, SERIES, 'Goroutines', `Go — **קלים** — **אלפים** — **scheduler**.`),
    seriesPost(6, SERIES, 'Locks', `mutex — **רק אחד** כותב — **deadlock** — **זהיר**.`),
    seriesPost(7, SERIES, 'Async זה concurrency', `event loop — **מאות** I/O — **לא** threads לכל אחד.`),
    seriesPost(8, SERIES, 'DB', `transactions — **בידוד** — **לא** שני כותבים **סותרים**.`),
    seriesPost(9, SERIES, 'Web server', `worker pool — **10** threads — **1000** מחכים — **מודל**.`),
    seriesPost(10, SERIES, 'סיכום', `**Concurrency = ניהול משימות רבות — async, threads, queues.**

לא תמיד **parallel** — אבל **מרגיש** מקביל.`),
  ],
}
