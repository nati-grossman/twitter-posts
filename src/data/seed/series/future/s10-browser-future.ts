import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'האם יהיה בכלל דפדפן בעתיד?'

export const futureBrowserFuture: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'דפדפן = OS שכבה', `Chrome — **לא** רק אתרים — **OS** ל-web — **PWA**, extensions.`),
    seriesPost(2, SERIES, 'יתמורפוזה', `**מנוע** נשאר — **מעטפת** משתנה — chat, AR — **לא** address bar תמיד.`),
    seriesPost(3, SERIES, 'אפליקציות שבולעות', `טיקטוק native — **פחות** web — **אבל** web עדיין **בסיס**.`),
    seriesPost(4, SERIES, 'WebAssembly', `קוד מהיר בדפדפן — **משחקים**, CAD — **כוח** desktop.`),
    seriesPost(5, SERIES, 'AI built-in', `סיכום דף — **תרגום** — **חלק** מהדפדפן — Copilot, Arc.`),
    seriesPost(6, SERIES, 'פרטיות', `tracking פחות — **sandbox** חזק — **זהות** wallet.`),
    seriesPost(7, SERIES, 'VR browser', `מטא — **חלל** — **נישה** — **לא** החליף 2D.`),
    seriesPost(8, SERIES, 'Protocol חדש', `HTTP עדיין — **IPFS** נישה — **איטי** — **לא** מחר.`),
    seriesPost(9, SERIES, 'למה יישאר', `פתוח — **לא** רק App Store — **קישור** — **שיתוף** — **דמוקרטיה** טכנית.`),
    seriesPost(10, SERIES, 'סיכום', `**דפדפן לא ייעלם — יהפוך לפורטל חכם, ממוזג AI, פחות “גולשים” ידנית.**

המנוע **נשאר** — **הרגל** משתנה.`),
  ],
}
