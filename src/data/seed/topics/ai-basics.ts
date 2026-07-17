import type { SeedTopic } from '../types'
import {
  aiBasicsWhatIsAi,
  aiBasicsModel,
  aiBasicsLearning,
  aiBasicsTrainingData,
  aiBasicsPrediction,
  aiBasicsOldVsModern,
  aiBasicsSupervised,
  aiBasicsUnsupervised,
  aiBasicsReinforcement,
  aiBasicsWhyData,
} from '../series/ai-basics'

export const aiBasics: SeedTopic = {
  id: 'ai-basics',
  name: 'יסודות AI — מהבסיס',
  description: `AI, מודל, למידה, דאטה, prediction, supervised/unsupervised/RL — 10 סדרות × 10 פוסטים הסבריים.`,
  subtopics: [
    aiBasicsWhatIsAi,
    aiBasicsModel,
    aiBasicsLearning,
    aiBasicsTrainingData,
    aiBasicsPrediction,
    aiBasicsOldVsModern,
    aiBasicsSupervised,
    aiBasicsUnsupervised,
    aiBasicsReinforcement,
    aiBasicsWhyData,
  ],
}
