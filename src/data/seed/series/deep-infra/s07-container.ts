import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה container?'

export const deepInfraContainer: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'קופסה לריצה', `**Container** — האפליקציה + **תלויות** — רצה **בנפרד** — לא מתערבבת באחרות על אותו שרת.`),
    seriesPost(2, SERIES, 'לא VM מלא', `**קל יותר** — חולק **קרנל** של Linux — לא OS שלם לכל אחד — **שניות** להעלאה.`),
    seriesPost(3, SERIES, 'Image', `**תבנית קפואה** — Dockerfile → build → **image** — registry — **מושכים** ומריצים.`),
    seriesPost(4, SERIES, 'Docker', `השם הכי מוכר — **docker run** — פיתוח מקומי = **אותו** כמו production (כמעט).`),
    seriesPost(5, SERIES, 'Layers', `שכבות image — **cache** — שינוי קטן — build **מהיר** — לא מהתחלה.`),
    seriesPost(6, SERIES, 'Port mapping', `אפליקציה על 3000 **בתוך** — ממפים ל-8080 **בחוץ** — **גישה** מהדפדפן.`),
    seriesPost(7, SERIES, 'Volumes', `DB בתוך container — **נמחק** — **volume** — נתונים **נשארים** על הדיסק.`),
    seriesPost(8, SERIES, 'docker-compose', `כמה containers — API + DB + Redis — **קובץ אחד** — מרימים יחד — **פיתוח**.`),
    seriesPost(9, SERIES, 'Production', `Docker לבד — **לא** מספיק scale — **Kubernetes** — **אורקסטרציה**.`),
    seriesPost(10, SERIES, 'סיכום', `**Container = חבילה עקבית לריצת אפליקציה — קלה, מהירה, ניידת.**

פתרון: “על המחשב שלי עובד” → **אותו image בכל מקום**.`),
  ],
}
