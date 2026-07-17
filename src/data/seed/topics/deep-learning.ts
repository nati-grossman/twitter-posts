import type { SeedTopic } from '../types'
import {
  deepMlNeuralNetwork,
  deepMlNeuron,
  deepMlLayers,
  deepMlImage,
  deepMlText,
  deepMlEmbedding,
  deepMlWordMeaning,
  deepMlTransformer,
  deepMlWhyTransformers,
  deepMlContext,
} from '../series/deep-ml'

export const deepLearning: SeedTopic = {
  id: 'deep-learning',
  name: 'מודלים ולמידה עמוקה',
  description: `רשתות נוירונים, שכבות, CNN, embeddings, Transformer והקשר — 10 סדרות × 10 פוסטים.`,
  subtopics: [
    deepMlNeuralNetwork,
    deepMlNeuron,
    deepMlLayers,
    deepMlImage,
    deepMlText,
    deepMlEmbedding,
    deepMlWordMeaning,
    deepMlTransformer,
    deepMlWhyTransformers,
    deepMlContext,
  ],
}
