import type { SeedTopic } from '../types'
import {
  modelLearnTraining,
  modelLearnMistakes,
  modelLearnLoss,
  modelLearnGradient,
  modelLearnWhyMuchData,
  modelLearnEpoch,
  modelLearnSeeExamples,
  modelLearnOverfitting,
  modelLearnUnderfitting,
  modelLearnReallyLearned,
} from '../series/model-learn'

export const howModelsLearn: SeedTopic = {
  id: 'how-models-learn',
  name: 'איך מודלים באמת לומדים',
  description: `Training, loss, gradient, epoch, over/underfitting והערכה — 10 סדרות × 10 פוסטים.`,
  subtopics: [
    modelLearnTraining,
    modelLearnMistakes,
    modelLearnLoss,
    modelLearnGradient,
    modelLearnWhyMuchData,
    modelLearnEpoch,
    modelLearnSeeExamples,
    modelLearnOverfitting,
    modelLearnUnderfitting,
    modelLearnReallyLearned,
  ],
}
