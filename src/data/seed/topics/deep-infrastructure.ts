import type { SeedTopic } from '../types'
import {
  deepInfraCdn,
  deepInfraCloud,
  deepInfraBigThree,
  deepInfraServersScale,
  deepInfraKubernetes,
  deepInfraAppsInCloud,
  deepInfraContainer,
  deepInfraVmVsContainer,
  deepInfraStability247,
  deepInfraFaultTolerance,
} from '../series/deep-infra'

export const deepInfrastructure: SeedTopic = {
  id: 'deep-infrastructure',
  name: 'תשתיות עמוקות',
  description: `CDN, ענן, AWS/Azure/GCP, scale, Kubernetes, containers, 24/7 ו-fault tolerance — 10 סדרות × 10 פוסטים.`,
  subtopics: [
    deepInfraCdn,
    deepInfraCloud,
    deepInfraBigThree,
    deepInfraServersScale,
    deepInfraKubernetes,
    deepInfraAppsInCloud,
    deepInfraContainer,
    deepInfraVmVsContainer,
    deepInfraStability247,
    deepInfraFaultTolerance,
  ],
}
