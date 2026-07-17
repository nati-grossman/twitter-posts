import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך משפרים מודלים אחרי שהם כבר קיימים?'

export const llmChatImproveExisting: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא רק אימון מחדש', `**גרסה** חדשה — **או** שכבות על הקיים — **prompt, RAG, tools** — **רוב** המוצרים.`),
    seriesPost(2, SERIES, 'RLHF / DPO שוב', `משוב משתמשים — **דירוג** — **reward** — **יישור** — **GPT-4o** iterations.`),
    seriesPost(3, SERIES, 'RAG upgrade', `מאגר **מעודכן** — chunking טוב — **hybrid search** — **פחות** hallucination.`),
    seriesPost(4, SERIES, 'Prompt engineering', `system prompt — **דוגמאות** — **מבנה** — **זול** — **יעיל**.`),
    seriesPost(5, SERIES, 'Guardrails', `מסנן פלט — **regex** — **מודל קטן** — **מדיניות**.`),
    seriesPost(6, SERIES, 'Distillation', `מודל גדול **מלמד** קטן — **זול** inference — **מהיר** — **איכות** קרובה.`),
    seriesPost(7, SERIES, 'Quantization', `INT8, INT4 — **פחות** VRAM — **קצת** איבוד — **מקומי**.`),
    seriesPost(8, SERIES, 'Evals', `מערך בדיקות — **regression** — **לפני** deploy — **לא** “נראה טוב”.`),
    seriesPost(9, SERIES, 'Continuous learning', `דאטה חדש — **retrain** תקופתי — **drift** — **זהיר** — **לא** תמיד פתוח.`),
    seriesPost(10, SERIES, 'סיכום', `**שיפור = יישור + RAG + prompts + כלים + evals + אופטימיזציה — לא בהכרח pretrain מחדש.**

מוצר **משתפר** מהר יותר מהמודל הגולמי.`),
  ],
}
