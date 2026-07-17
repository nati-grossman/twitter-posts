import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה database SQL?'

export const dataSql: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'DB יחסי', `**SQL** — Structured Query Language — **טבלאות** — **קשרים** — PostgreSQL, MySQL.`),
    seriesPost(2, SERIES, 'SELECT', `שואלים — WHERE — **סינון** — **לא** שולפים הכל — **אינדקס**.`),
    seriesPost(3, SERIES, 'JOIN', `users + orders — **מחברים** — **foreign key** — **עקביות**.`),
    seriesPost(4, SERIES, 'INSERT UPDATE DELETE', `כותבים — **transaction** — **ACID** — **ביטול** אם כשל.`),
    seriesPost(5, SERIES, 'Schema', `עמודות מוגדרות — **טיפוס** — **migration** — **גרסה**.`),
    seriesPost(6, SERIES, 'Primary key', `id ייחודי — **לא** כפילות — **אוטו** increment או UUID.`),
    seriesPost(7, SERIES, 'Index', `מהיר — **מחיר** בכתיבה — **WHERE** על indexed column.`),
    seriesPost(8, SERIES, 'מתי SQL', `הזמנות, בנק, CRM — **מובנה** — **עקביות** — **דוחות**.`),
    seriesPost(9, SERIES, 'ORM', `קוד → SQL — **Prisma** — **לא** מחליף הבנת SQL.`),
    seriesPost(10, SERIES, 'סיכום', `**SQL DB = טבלאות + שאילתות + עסקאות — עדיין לב העסקים.**

NoSQL **לא** הורג — **משלים**.`),
  ],
}
