import { REUSE_ELIGIBLE_DAYS } from './constants'
import type { Post } from './types'

export function generateId(): string {
  return crypto.randomUUID()
}

export function formatDate(iso: string | null): string {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('he-IL', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function isEligibleForReuse(post: Post): boolean {
  const reference = post.status === 'published' ? post.publishedAt : post.createdAt
  if (!reference) return false
  const ageMs = Date.now() - new Date(reference).getTime()
  const days = ageMs / (1000 * 60 * 60 * 24)
  return days >= REUSE_ELIGIBLE_DAYS
}

export function parseTagsInput(value: string): string[] {
  return value
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)
}

export function tagsToInput(tags: string[]): string {
  return tags.join(', ')
}

export function postHasContent(post: { content: string }): boolean {
  return post.content.trim().length > 0
}

/** תצוגה מקדימה של תוכן הפוסט בכרטיס — טקסט רציף וקריא */
export function previewContent(text: string, maxLength = 200): string {
  const normalized = text.replace(/\s+/g, ' ').trim()
  if (!normalized) return ''
  if (normalized.length <= maxLength) return normalized
  const cut = normalized.slice(0, maxLength)
  const lastSpace = cut.lastIndexOf(' ')
  const end = lastSpace > maxLength * 0.6 ? lastSpace : maxLength
  return `${cut.slice(0, end).trimEnd()}…`
}
