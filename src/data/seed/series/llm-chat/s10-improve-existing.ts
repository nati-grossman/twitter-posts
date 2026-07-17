import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך משפרים מודלים אחרי שהם כבר קיימים?'

export const llmChatImproveExisting: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא רק אימון מחדש',``),
    seriesPost(2, SERIES, 'RLHF / DPO שוב',``),
    seriesPost(3, SERIES, 'RAG upgrade',``),
    seriesPost(4, SERIES, 'Prompt engineering',``),
    seriesPost(5, SERIES, 'Guardrails',``),
    seriesPost(6, SERIES, 'Distillation',``),
    seriesPost(7, SERIES, 'Quantization',``),
    seriesPost(8, SERIES, 'Evals',``),
    seriesPost(9, SERIES, 'Continuous learning',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
