import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מערכות מונעות קפיצות בזמן אמת?'

export const realtimeNoJumps: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'קפיצה = חוסר רציפות', `דמות **קפצה** 2 מטר — **packet איחר** — **תיקון** — **הרגשה גרועה**.`),
    seriesPost(2, SERIES, 'Interpolation', `ממוצע בין מצבים ישנים — **תנועה חלקה** — **מאחור** במילי-שניות — **trade-off**.`),
    seriesPost(3, SERIES, 'Extrapolation', `מנחשים המשך — **סיכון** — טעות — **snap back** — **זהירות**.`),
    seriesPost(4, SERIES, 'Dead reckoning', `מהירות + כיוון — **חיזוי** — עד עדכון חדש — **רכבים** במשחק.`),
    seriesPost(5, SERIES, 'Buffer jitter', `מאגרים 50ms אודיו — **מחליקים** שונות — **פחות** קטיעות — **יותר** delay.`),
    seriesPost(6, SERIES, 'Snap threshold', `טעות קטנה — **מתעלמים** — גדולה — **מתקנים** — **לא רואים** micro-jitter.`),
    seriesPost(7, SERIES, 'Smooth camera', `לא עוקב ישיר — **lerp** — **קולנועי** — גם ב-streaming UI.`),
    seriesPost(8, SERIES, 'Frame sync', `VSync — **לא** tear — **משחק** — **input lag** — **איזון**.`),
    seriesPost(9, SERIES, 'Rollback netcode', `חוזרים tick אחורה — **מתקנים** — **fighting games** — **מורכב** — **הוגן**.`),
    seriesPost(10, SERIES, 'סיכום', `**מונעים קפיצות = interpolation + buffers + ספי תיקון + חיזוי מבוקר.**

זמן אמת **חלק** = **מאחורי הקלעים מתקנים** מה שהרשת שבר.`),
  ],
}
