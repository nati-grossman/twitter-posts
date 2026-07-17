import {
  buildSeedData,
  mergeLibraryUpdatesIfMissing,
  pruneRemovedSeedTopics,
  syncSeedContentUpdates,
  SEED_VERSION,
} from './data/seed/buildSeedData'
import { STORAGE_KEY } from './constants'
import type { AppData, Topic } from './types'
import { generateId } from './utils'

const SEED_VERSION_KEY = 'twitter-posts-seed-version'

const DEFAULT_TOPIC: Topic = {
  id: 'general',
  name: 'כללי',
  description: 'רעיונות וטיוטות שונות',
}

function isUnseeded(data: AppData): boolean {
  if (data.posts.length > 0) return false
  if (data.topics.length === 0) return true
  if (data.topics.length === 1 && data.topics[0]?.id === 'general') return true
  return data.posts.length === 0 && data.topics.length <= 1
}

function applySeed(): AppData {
  const seeded = buildSeedData()
  saveData(seeded)
  localStorage.setItem(SEED_VERSION_KEY, SEED_VERSION)
  return seeded
}

export function loadSeedLibrary(): AppData {
  return applySeed()
}

export function loadData(): AppData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return applySeed()

    const parsed = JSON.parse(raw) as AppData
    if (!parsed.topics?.length) parsed.topics = [DEFAULT_TOPIC]
    if (!parsed.posts) parsed.posts = []

    const storedVersion = localStorage.getItem(SEED_VERSION_KEY)
    if (isUnseeded(parsed)) return applySeed()

    let result = mergeLibraryUpdatesIfMissing(parsed)
    const pruned = pruneRemovedSeedTopics(result)
    if (pruned !== result) result = pruned
    const synced = syncSeedContentUpdates(result)
    if (synced !== result) result = synced

    if (result !== parsed) {
      saveData(result)
      if (storedVersion !== SEED_VERSION) {
        localStorage.setItem(SEED_VERSION_KEY, SEED_VERSION)
      }
      return result
    }

    return parsed
  } catch {
    return applySeed()
  }
}

export function saveData(data: AppData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function createEmptyPost(topicId: string): AppData['posts'][0] {
  const now = new Date().toISOString()
  return {
    id: generateId(),
    title: 'פוסט ללא כותרת',
    content: '',
    topic: topicId,
    postType: 'single',
    status: 'draft',
    createdAt: now,
    publishedAt: null,
    tags: [],
  }
}
