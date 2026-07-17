import { useCallback, useEffect, useRef, useState } from 'react'
import { createEmptyPost, loadData, loadSeedLibrary, saveData } from '../storage'
import type { AppData, Post, Topic } from '../types'
import { generateId } from '../utils'

export function useAppData() {
  const [data, setData] = useState<AppData>(() => loadData())

  const persist = useCallback((updater: (prev: AppData) => AppData) => {
    setData((prev) => {
      const next = updater(prev)
      saveData(next)
      return next
    })
  }, [])

  const addTopic = useCallback((name: string, description: string) => {
    const topic: Topic = { id: generateId(), name, description }
    let topicId = topic.id
    persist((prev) => {
      topicId = topic.id
      return { ...prev, topics: [...prev.topics, topic] }
    })
    return topicId
  }, [persist])

  const updateTopic = useCallback(
    (id: string, name: string, description: string) => {
      persist((prev) => ({
        ...prev,
        topics: prev.topics.map((t) =>
          t.id === id ? { ...t, name, description } : t,
        ),
      }))
    },
    [persist],
  )

  const deleteTopic = useCallback(
    (id: string) => {
      persist((prev) => {
        const fallback = prev.topics.find((t) => t.id !== id)?.id ?? 'general'
        return {
          topics: prev.topics.filter((t) => t.id !== id),
          posts: prev.posts.map((p) =>
            p.topic === id ? { ...p, topic: fallback } : p,
          ),
        }
      })
    },
    [persist],
  )

  const addPost = useCallback(
    (topicId: string) => {
      const post = createEmptyPost(topicId)
      persist((prev) => ({ ...prev, posts: [post, ...prev.posts] }))
      return post.id
    },
    [persist],
  )

  const updatePost = useCallback(
    (id: string, patch: Partial<Post>) => {
      persist((prev) => ({
        ...prev,
        posts: prev.posts.map((p) => {
          if (p.id !== id) return p
          const next = { ...p, ...patch }
          if (patch.status === 'published' && p.status === 'draft') {
            next.publishedAt = new Date().toISOString()
          }
          if (patch.status === 'draft') {
            next.publishedAt = null
          }
          return next
        }),
      }))
    },
    [persist],
  )

  const deletePost = useCallback(
    (id: string) => {
      persist((prev) => ({
        ...prev,
        posts: prev.posts.filter((p) => p.id !== id),
      }))
    },
    [persist],
  )

  const duplicatePost = useCallback(
    (id: string) => {
      let newId: string | null = null
      persist((prev) => {
        const source = prev.posts.find((p) => p.id === id)
        if (!source) return prev
        const now = new Date().toISOString()
        const copy: Post = {
          ...source,
          id: generateId(),
          title: `${source.title} (עותק)`,
          status: 'draft',
          createdAt: now,
          publishedAt: null,
        }
        newId = copy.id
        return { ...prev, posts: [copy, ...prev.posts] }
      })
      return newId
    },
    [persist],
  )

  const reloadSeed = useCallback(() => {
    setData(loadSeedLibrary())
  }, [])

  return {
    data,
    addTopic,
    updateTopic,
    deleteTopic,
    addPost,
    updatePost,
    deletePost,
    duplicatePost,
    reloadSeed,
  }
}

export type SaveState = 'idle' | 'saving' | 'saved'

export function useAutosave(
  post: Post | null,
  onUpdate: (id: string, patch: Partial<Post>) => void,
): SaveState {
  const [saveState, setSaveState] = useState<SaveState>('idle')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const savedTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const draftRef = useRef<Post | null>(null)

  useEffect(() => {
    if (!post) {
      setSaveState('idle')
      draftRef.current = null
      return
    }

    if (!draftRef.current) {
      draftRef.current = post
      return
    }

    const prev = draftRef.current
    draftRef.current = post

    if (prev.id !== post.id) {
      setSaveState('idle')
      return
    }

    const changed =
      prev.title !== post.title ||
      prev.content !== post.content ||
      prev.topic !== post.topic ||
      prev.postType !== post.postType ||
      prev.status !== post.status ||
      JSON.stringify(prev.tags) !== JSON.stringify(post.tags)

    if (!changed) return

    setSaveState('saving')
    if (timer.current) clearTimeout(timer.current)
    if (savedTimer.current) clearTimeout(savedTimer.current)

    timer.current = setTimeout(() => {
      onUpdate(post.id, {
        title: post.title,
        content: post.content,
        topic: post.topic,
        postType: post.postType,
        status: post.status,
        tags: post.tags,
      })
      setSaveState('saved')
      savedTimer.current = setTimeout(() => setSaveState('idle'), 2000)
    }, 400)

    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [post, onUpdate])

  return saveState
}
