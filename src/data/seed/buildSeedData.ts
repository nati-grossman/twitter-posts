import type { AppData, Post, Topic } from '../../types'
import { generateId } from '../../utils'
import { browserWebsites } from './topics/browser-websites'
import { communicationSecurity } from './topics/communication-security'
import { aiAdvancedFuture } from './topics/ai-advanced-future'
import { aiRealSystems } from './topics/ai-real-systems'
import { aiProblemsLimits } from './topics/ai-problems-limits'
import { realWorldTraining } from './topics/real-world-training'
import { transformersDeep } from './topics/transformers-deep'
import { howLlmsWork } from './topics/how-llms-work'
import { howModelsLearn } from './topics/how-models-learn'
import { systemPerformance } from './topics/system-performance'
import { systemsLearnYou } from './topics/systems-learn-you'
import { futureInternet } from './topics/future-internet'
import { digitalData } from './topics/digital-data'
import { howAppsWork } from './topics/how-apps-work'
import { llmChatgpt } from './topics/llm-chatgpt'
import { deepLearning } from './topics/deep-learning'
import { aiBasics } from './topics/ai-basics'
import { realtimeSystems } from './topics/realtime-systems'
import { globalInternet } from './topics/global-internet'
import { deepInfrastructure } from './topics/deep-infrastructure'
import { webBuilding } from './topics/web-building'
import { securityDefense } from './topics/security-defense'
import { scaleInternet } from './topics/scale-internet'
import { trafficSpeed } from './topics/traffic-speed'
import { internetInfrastructure } from './topics/internet-infrastructure'
import { techFoundations } from './topics/tech-foundations'
import { SEED_TOPICS } from './topics'
import type { SeedTopic } from './types'

const SEED_VERSION = '127'

/** נושאי seed ישנים שהוסרו מהספרייה (נמחקים מ-localStorage בטעינה) */
export const REMOVED_SEED_TOPIC_IDS = [
  'ai-foundations',
  'transformers',
  'llm-internals',
  'ai-infrastructure',
  'gpus-compute',
  'ai-for-developers',
  'rag-vectors',
  'agents',
  'ai-misconceptions',
  'ai-philosophy',
  'model-training',
  'inference',
  'scaling',
] as const

export { SEED_VERSION }

export function pruneRemovedSeedTopics(data: AppData): AppData {
  const removed = new Set<string>(REMOVED_SEED_TOPIC_IDS)
  const topics = data.topics.filter((t) => !removed.has(t.id))
  const posts = data.posts.filter((p) => !removed.has(p.topic))
  if (topics.length === data.topics.length && posts.length === data.posts.length) {
    return data
  }
  return { topics, posts }
}

function topicToRecord(seed: SeedTopic): Topic {
  return {
    id: seed.id,
    name: seed.name,
    description: [
      seed.description,
      '',
      'תת-נושאים:',
      ...seed.subtopics.map((s) => `• ${s.name}`),
    ].join('\n'),
  }
}

function postsFromSeedTopic(seed: SeedTopic, dayOffsetStart: number): Post[] {
  const posts: Post[] = []
  let dayOffset = dayOffsetStart

  for (const sub of seed.subtopics) {
    for (const p of sub.posts) {
      const created = new Date()
      created.setDate(created.getDate() - dayOffset)
      dayOffset += 2

      posts.push({
        id: generateId(),
        title: p.title,
        content: p.content,
        topic: seed.id,
        postType: p.postType,
        status: 'draft',
        createdAt: created.toISOString(),
        publishedAt: null,
        tags: [sub.name, ...(p.tags ?? [])],
      })
    }
  }

  return posts
}

export function buildSeedData(): AppData {
  const topics: Topic[] = SEED_TOPICS.map(topicToRecord)
  const posts: Post[] = []

  let dayOffset = 0
  for (const topic of SEED_TOPICS) {
    const topicPosts = postsFromSeedTopic(topic, dayOffset)
    const count = topic.subtopics.reduce((n, s) => n + s.posts.length, 0)
    dayOffset += count * 2
    posts.push(...topicPosts)
  }

  posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )

  return { topics, posts }
}

function mergeSeedTopicIfMissing(data: AppData, seed: SeedTopic): AppData {
  if (data.topics.some((t) => t.id === seed.id)) {
    return data
  }

  const topic = topicToRecord(seed)
  const maxOffset = data.posts.length * 2
  const newPosts = postsFromSeedTopic(seed, maxOffset)

  return {
    topics: [...data.topics, topic],
    posts: [...newPosts, ...data.posts].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    ),
  }
}

/** מוסיף ספריות תוכן חדשות בלי למחוק נתונים קיימים */
export function mergeLibraryUpdatesIfMissing(data: AppData): AppData {
  let result = data
  result = mergeSeedTopicIfMissing(result, techFoundations)
  result = mergeSeedTopicIfMissing(result, internetInfrastructure)
  result = mergeSeedTopicIfMissing(result, browserWebsites)
  result = mergeSeedTopicIfMissing(result, communicationSecurity)
  result = mergeSeedTopicIfMissing(result, trafficSpeed)
  result = mergeSeedTopicIfMissing(result, scaleInternet)
  result = mergeSeedTopicIfMissing(result, securityDefense)
  result = mergeSeedTopicIfMissing(result, webBuilding)
  result = mergeSeedTopicIfMissing(result, deepInfrastructure)
  result = mergeSeedTopicIfMissing(result, globalInternet)
  result = mergeSeedTopicIfMissing(result, realtimeSystems)
  result = mergeSeedTopicIfMissing(result, aiBasics)
  result = mergeSeedTopicIfMissing(result, deepLearning)
  result = mergeSeedTopicIfMissing(result, llmChatgpt)
  result = mergeSeedTopicIfMissing(result, howAppsWork)
  result = mergeSeedTopicIfMissing(result, digitalData)
  result = mergeSeedTopicIfMissing(result, futureInternet)
  result = mergeSeedTopicIfMissing(result, systemsLearnYou)
  result = mergeSeedTopicIfMissing(result, systemPerformance)
  result = mergeSeedTopicIfMissing(result, howModelsLearn)
  result = mergeSeedTopicIfMissing(result, howLlmsWork)
  result = mergeSeedTopicIfMissing(result, transformersDeep)
  result = mergeSeedTopicIfMissing(result, realWorldTraining)
  result = mergeSeedTopicIfMissing(result, aiProblemsLimits)
  result = mergeSeedTopicIfMissing(result, aiRealSystems)
  result = mergeSeedTopicIfMissing(result, aiAdvancedFuture)
  return result
}

/** מעדכן תוכן פוסטים קיימים לפי seed (לפי נושא + כותרת) */
export function syncSeedContentUpdates(data: AppData): AppData {
  const seed = buildSeedData()
  const contentByKey = new Map(
    seed.posts.map((p) => [`${p.topic}\0${p.title}`, p.content] as const),
  )

  let changed = false
  const posts = data.posts.map((post) => {
    const content = contentByKey.get(`${post.topic}\0${post.title}`)
    if (content !== undefined && content !== post.content) {
      changed = true
      return { ...post, content }
    }
    return post
  })

  return changed ? { ...data, posts } : data
}
