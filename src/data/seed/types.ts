import type { PostType } from '../../types'

export interface SeedPost {
  title: string
  content: string
  postType: PostType
  tags?: string[]
}

export interface SeedSubtopic {
  name: string
  posts: SeedPost[]
}

export interface SeedTopic {
  id: string
  name: string
  description: string
  subtopics: SeedSubtopic[]
}
