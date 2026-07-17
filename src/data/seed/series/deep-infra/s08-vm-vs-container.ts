import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה ההבדל בין VM ל-container?'

export const deepInfraVmVsContainer: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'VM — מחשב וירטואלי', `**Hypervisor** — Windows/Linux **מלא** על חומרה וירטואלית — **בידוד חזק** — **כבד**.`),
    seriesPost(2, SERIES, 'Container — תהליך מבודד', `**אותו kernel** — namespaces, cgroups — **רק** מה שצריך לאפליקציה — **קל**.`),
    seriesPost(3, SERIES, 'זמן הפעלה', `VM — **דקות**. Container — **שניות** — scale מהיר.`),
    seriesPost(4, SERIES, 'משאבים', `10 VMs — 10 kernels — **בזבוז**. 10 containers — **שיתוף** — **צפיפות** גבוהה.`),
    seriesPost(5, SERIES, 'אבטחה', `VM — פריצה **קשה** לברוח ל-VM אחר. Container — **צריך** הגדרה נכונה — **shared kernel** — סיכון אם רופף.`),
    seriesPost(6, SERIES, 'מתי VM', `Windows legacy, רגולציה קשה, **שליטה מלאה** על OS — **עדיין** נפוץ.`),
    seriesPost(7, SERIES, 'מתי container', `מיקרו-שירותים, CI, **scale** — **סטנדרט** מודרני.`),
    seriesPost(8, SERIES, 'יחד', `VM **מריצים** containers — **שכבה כפולה** — בידוד + צפיפות — נפוץ בענן.`),
    seriesPost(9, SERIES, 'Serverless', `לפעמים container **מתחת** — אתה **לא רואה** — מנהל הספק.`),
    seriesPost(10, SERIES, 'סיכום', `**VM = OS מלא, כבד, בידוד חזק. Container = קל, משותף kernel, מהיר.**

לא או-או — **לעיתים שניהם**.`),
  ],
}
