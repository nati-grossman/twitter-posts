import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה server tick?'

export const realtimeServerTick: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לב המשחק', `**Tick** — מחזור קבוע — 20/60 פעם בשנייה — **מעדכן** פיזיקה, פגיעות, AI — **שעון פנימי**.`),
    seriesPost(2, SERIES, 'Fixed timestep', `0.05 שניות **תמיד** — **יציב** — לא תלוי FPS של שחקן — **סימולציה הוגנת**.`),
    seriesPost(3, SERIES, 'קלט בין ticks', `שחקן לחץ — **נרשם** ל-tick הבא — **לא** באמצע חישוב — **סדר**.`),
    seriesPost(4, SERIES, 'Tick rate ו-FPS', `שרת 30Hz — לקוח 144FPS — **מייצג** בין — **interpolation**.`),
    seriesPost(5, SERIES, 'Overhead', `tick גבוה — **מדויק** — **יקר** CPU — 10Hz ל-MMO, 128Hz ל-FPS תחרותי.`),
    seriesPost(6, SERIES, 'Determinism', `אותו קלט — **אותה תוצאה** — **replay** — esports — **קשה** עם float.`),
    seriesPost(7, SERIES, 'Network tick', `שולחים **בסוף** tick — **חבילה אחת** — **סנכרון** עם סימולציה.`),
    seriesPost(8, SERIES, 'Slow tick משחק אחר', `אסטרטגיה — tick **איטי** — **סבלנות** — לא הכל צריך 60Hz.`),
    seriesPost(9, SERIES, 'Event loop כללי', `Node.js — **tick** דומה — **turn** אחד — **לא חוסם** — **אסינכרון**.`),
    seriesPost(10, SERIES, 'סיכום', `**Server tick = דופק זמן של עולם המשחק — קצב קבוע ללוגיקה.**

בלי tick — **כאוס** בין מכונות שונות.`),
  ],
}
