import type { PostStatus, PostType } from './types'

export const STORAGE_KEY = 'twitter-posts-data'

/** Days after which a post is eligible for reuse */
export const REUSE_ELIGIBLE_DAYS = 30

export const POST_TYPE_LABELS: Record<PostType, string> = {
  single: 'טוויט בודד',
  thread: 'שרשור',
  question: 'שאלה',
  hot_take: 'דעה חדה',
  explainer: 'הסבר',
}

export const POST_TYPES: PostType[] = [
  'single',
  'thread',
  'question',
  'hot_take',
  'explainer',
]

export const STATUS_LABELS: Record<PostStatus, string> = {
  draft: 'טיוטה',
  published: 'פורסם',
}
