import type { SeedPost } from '../types'

export function seriesPost(
  part: number,
  seriesName: string,
  subtitle: string,
  content: string,
): SeedPost {
  return {
    title: `${seriesName} (${part}/10) — ${subtitle}`,
    content: content.trim(),
    postType: 'explainer',
    tags: [`${part}/10`, 'סדרה'],
  }
}
