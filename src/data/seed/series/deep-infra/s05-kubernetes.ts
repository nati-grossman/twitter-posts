import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה Kubernetes (ניהול מערכות בקנה מידה)?'

export const deepInfraKubernetes: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הבעיה שפתר',``),
    seriesPost(2, SERIES, 'Cluster',``),
    seriesPost(3, SERIES, 'Pod',``),
    seriesPost(4, SERIES, 'Deployment',``),
    seriesPost(5, SERIES, 'Service ו-Ingress',``),
    seriesPost(6, SERIES, 'ConfigMap Secret',``),
    seriesPost(7, SERIES, 'לא חובה לכולם',``),
    seriesPost(8, SERIES, 'Managed K8s',``),
    seriesPost(9, SERIES, 'Helm',``),
    seriesPost(10, SERIES, 'סיכום',``),
  ],
}
