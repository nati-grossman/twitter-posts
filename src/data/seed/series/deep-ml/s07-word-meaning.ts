import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מחשבים משמעות של מילים?'

export const deepMlWordMeaning: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא מילון פנימי', `אין טבלת “bank=בנק” — **הקשר** קובע — **משקלים** מסכמים שימוש.`),
    seriesPost(2, SERIES, 'הקשר משנה', `“river bank” מול “bank account” — **אותה מילה** — **וקטורים שונים** ב-Transformer.`),
    seriesPost(3, SERIES, 'דistributional hypothesis', `מילים באותו **הקשר** — משמעות דומה — **Firth** — בסיס **word2vec**.`),
    seriesPost(4, SERIES, 'שכנים במשפט', `Attention — **מסתכל** על מילים אחרות — **מעדכן** ייצוג — **דינמי**.`),
    seriesPost(5, SERIES, 'סטטיסטיקה לא פילוסופיה', `“משמעות” = **מיקום במרחב** שמשרת **חיזוי** — **לא** הבנה אנושית מלאה.`),
    seriesPost(6, SERIES, 'רב-לשוני', `אותה ארכיטקטורה — **שפות** — **מיפוי** דומה בין embeddings — **לא** תרגום מושלם.`),
    seriesPost(7, SERIES, 'נרדפות', `קרובים במרחב — **לא** זהים — **fine-tune** מחדד.`),
    seriesPost(8, SERIES, 'אנלוגיות', `וקטורית — **king, queen** — **מגביל** — **לא** תמיד עובד.`),
    seriesPost(9, SERIES, 'מגבלות', `סרקזם, רמז — **קשה** — **הקשר ארוך** — **עדיין טועה**.`),
    seriesPost(10, SERIES, 'סיכום', `**משמעות במחשב = ייצוג מההקשר הסטטיסטי — embeddings + Attention.**

לא **מחשבה** — **מיפוי** לצורך משימה.`),
  ],
}
