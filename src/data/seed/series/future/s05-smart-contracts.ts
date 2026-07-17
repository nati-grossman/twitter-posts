import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה חוזים חכמים?'

export const futureSmartContracts: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'קוד כחוזה', `**Smart contract** — קוד על בלוקצ׳יין — **רץ** כשתנאים מתקיימים — **בלי** עורך דין.`),
    seriesPost(2, SERIES, 'Ethereum', `מכונה וירטואלית — **Solidity** — **gas** — **הרבה** dApps.`),
    seriesPost(3, SERIES, 'דוגמה', `אם קיבלתי תשלום — **שחרר** NFT — **אוטומטי** — **שקוף**.`),
    seriesPost(4, SERIES, 'Immutable', `פרסום — **קשה** לתקן באג — **מיליונים** אבודים — **audit** חובה.`),
    seriesPost(5, SERIES, 'Oracle', `חוזה צריך מחיר מניה — **Oracle** מביא מחוץ ל-chain — **נקודת אמון**.`),
    seriesPost(6, SERIES, 'DeFi', `הלוואות, exchange — **ללא** בנק — **סיכון** — **hack**.`),
    seriesPost(7, SERIES, 'Legal', `חוק מול קוד — **מחלוקת** — **רגולטור** מתעורר.`),
    seriesPost(8, SERIES, 'Upgradeable', `proxy patterns — **תיקון** — **מורכב** — **לא** טהור immutable.`),
    seriesPost(9, SERIES, 'מול API רגיל', `שרת יכול לשנות — **חוזה** — **קוד הוא חוק** — **שונה**.`),
    seriesPost(10, SERIES, 'סיכום', `**חוזים חכמים = לוגיקה על chain שמבצעת הסכמות אוטומטית — עוצמה + סיכון קוד.**

לא **לכל** דבר — רק **אמון בקוד**.`),
  ],
}
