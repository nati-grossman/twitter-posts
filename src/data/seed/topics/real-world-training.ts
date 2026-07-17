import type { SeedTopic } from '../types'
import { TRAIN_REAL_SERIES } from '../series/train-real'

export const realWorldTraining: SeedTopic = {
  id: 'real-world-training',
  name: 'אימון מודלים בעולם האמיתי',
  description: `Pretrain, fine-tuning, RLHF, דאטה, סינון, bias והשפעת איכות נתונים — 10 סדרות × 10 פוסטים.`,
  subtopics: TRAIN_REAL_SERIES,
}
