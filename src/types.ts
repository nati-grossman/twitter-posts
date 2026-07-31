export type PostType =
  | 'single'
  | 'thread'
  | 'question'
  | 'hot_take'
  | 'explainer'

export type PostStatus = 'draft' | 'published'

export interface Post {
  id: string
  title: string
  content: string
  topic: string
  postType: PostType
  status: PostStatus
  createdAt: string
  publishedAt: string | null
  tags: string[]
  /** סומן כבר כהועלה לטוויטר — לא לדרוס ב-seed sync */
  postedToTwitter: boolean
}

export interface Topic {
  id: string
  name: string
  description: string
}

export interface AppData {
  topics: Topic[]
  posts: Post[]
}
