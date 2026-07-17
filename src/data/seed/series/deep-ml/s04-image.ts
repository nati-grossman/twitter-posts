import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך מודל מזהה תמונה?'

export const deepMlImage: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'פיקסלים למספרים', `תמונה = מטריצה RGB — **224×224×3** — **קלט** לרשת.`),
    seriesPost(2, SERIES, 'CNN', `**Convolutional Neural Network** — מסנן **3×3** על התמונה — **זז** — **מוצא** קצוות, טקסטורות.`),
    seriesPost(3, SERIES, 'Pooling', `מקטין רזולוציה — **מיקוד** על מה חשוב — **פחות** חישוב.`),
    seriesPost(4, SERIES, 'היררכיה חזותית', `שכבות ראשונות — פשוט. **עמוק** — חלקי פנים, אובייקטים — **למד** ממיליוני תמונות.`),
    seriesPost(5, SERIES, 'Transfer learning', `ResNet מאומן — **מקפיא** — **מוסיף** ראש קטן ל**משימה שלך** — **10 תמונות** לפעמים מספיק.`),
    seriesPost(6, SERIES, 'Data augmentation', `סיבוב, חיתוך — **מגדיל** דאטה — **עמידות** — **לא** רק מלאי.`),
    seriesPost(7, SERIES, 'Object detection', `לא רק “מה” — **איפה** — תיבות — YOLO — **מספר** אובייקטים.`),
    seriesPost(8, SERIES, 'Segmentation', `כל פיקסל — **שייך** לרקע/אדם — **רפואה**, רכב אוטונומי.`),
    seriesPost(9, SERIES, 'טעויות', `תמונה מטועה — **בטוח** — adversarial — **פיקסלים** קטנים **מטעים**.`),
    seriesPost(10, SERIES, 'סיכום', `**זיהוי תמונה = CNN + היררכיה + המון דאטה (+ לפעמים transfer).**

לא “רואה” כמו אדם — **דפוסים סטטיסטיים**.`),
  ],
}
