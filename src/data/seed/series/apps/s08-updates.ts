import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך אפליקציות מתעדכנות?'

export const appsUpdates: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'סוגי עדכון', `**קוד** — חנות. **תוכן** — מהשרת. **Config** — remote — **בלי** חנות.`),
    seriesPost(2, SERIES, 'App Store flow', `מפתח מעלה — **ביקורת** Apple/Google — **משתמש** מוריד — **גרסה** חדשה.`),
    seriesPost(3, SERIES, 'OTA — CodePush', `JS bundle — **עדכון** בלי חנות — **לא** native — **מוגבל** — **מהיר** לבאגים.`),
    seriesPost(4, SERIES, 'Force update', `API מחזיר “מינימום גרסה” — **חוסם** — **חובה** לעדכן — **אבטחה**.`),
    seriesPost(5, SERIES, 'Feature flags', `שרת מדליק פיצ’ר — **A/B** — **בלי** APK חדש.`),
    seriesPost(6, SERIES, 'Schema migration', `DB מקומי — **גרסה 2** — **מעביר** נתונים — **לא** למחוק הכל.`),
    seriesPost(7, SERIES, 'Staged rollout', `10% משתמשים — **בדיקה** — 100% — **פחות** אסון.`),
    seriesPost(8, SERIES, 'Web app', `רענון דף — **שרת** חדש — **מיידי** — **cache** דפדפן — **זהירות**.`),
    seriesPost(9, SERIES, 'Rollback', `גרסה גרועה — **מושכים** — **חנות** איטית — **flags** מהירים.`),
    seriesPost(10, SERIES, 'סיכום', `**עדכון = חנות (קוד) + שרת (תוכן/flags) + מקומי (DB).**

מוצר חי = **שלושה** מסלולים במקביל.`),
  ],
}
