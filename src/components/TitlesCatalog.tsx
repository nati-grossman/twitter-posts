import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { Post, Topic } from '../types'
import { postHasContent } from '../utils'
import {
  formatSeriesTitlesForCopy,
  getSeriesPart,
  groupPostsBySeries,
} from '../utils/series'

export interface CatalogSnapshot {
  focusTopicId: string | null
  query: string
  scrollTop: number
}

interface TitlesCatalogProps {
  topics: Topic[]
  posts: Post[]
  focusTopicId?: string | null
  onClearTopicFocus?: () => void
  onBack: () => void
  onSelectPost: (id: string, snapshot: Omit<CatalogSnapshot, 'focusTopicId'>) => void
  restoreKey?: number
  restoreSnapshot?: CatalogSnapshot | null
  highlightPostId?: string | null
}

function seriesKey(topicId: string, seriesName: string) {
  return `${topicId}::${seriesName}`
}

export function TitlesCatalog({
  topics,
  posts,
  focusTopicId = null,
  onClearTopicFocus,
  onBack,
  onSelectPost,
  restoreKey = 0,
  restoreSnapshot = null,
  highlightPostId = null,
}: TitlesCatalogProps) {
  const [query, setQuery] = useState('')
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  const visibleTopics = focusTopicId
    ? topics.filter((t) => t.id === focusTopicId)
    : topics

  const focusTopic = focusTopicId
    ? topics.find((t) => t.id === focusTopicId)
    : null

  useEffect(() => {
    if (restoreSnapshot) {
      setQuery(restoreSnapshot.query)
    }
  }, [restoreKey, restoreSnapshot])

  useEffect(() => {
    if (restoreSnapshot || !focusTopicId) return
    const el = document.getElementById(`topic-${focusTopicId}`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [focusTopicId, restoreSnapshot])

  useLayoutEffect(() => {
    if (!restoreSnapshot || !bodyRef.current) return
    bodyRef.current.scrollTop = restoreSnapshot.scrollTop
    if (highlightPostId) {
      document
        .getElementById(`catalog-post-${highlightPostId}`)
        ?.scrollIntoView({ block: 'nearest' })
    }
  }, [restoreKey, restoreSnapshot, highlightPostId])

  const captureSnapshot = (): Omit<CatalogSnapshot, 'focusTopicId'> => ({
    query,
    scrollTop: bodyRef.current?.scrollTop ?? 0,
  })

  const sections = useMemo(() => {
    const byTopic = new Map<string, Post[]>()
    for (const topic of topics) {
      byTopic.set(topic.id, [])
    }
    for (const post of posts) {
      const list = byTopic.get(post.topic)
      if (list) {
        list.push(post)
      } else {
        byTopic.set(post.topic, [post])
      }
    }

    const q = query.trim().toLowerCase()

    return visibleTopics
      .map((topic) => {
        const topicPosts = (byTopic.get(topic.id) ?? []).sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        )

        const { series: allSeries, standalone: allStandalone } =
          groupPostsBySeries(topicPosts)

        const series = q
          ? allSeries
              .map((ser) => {
                const nameMatch = ser.name.toLowerCase().includes(q)
                const matching = ser.posts.filter((p) =>
                  p.title.toLowerCase().includes(q),
                )
                if (!nameMatch && matching.length === 0) return null
                return {
                  name: ser.name,
                  posts: nameMatch ? ser.posts : matching,
                }
              })
              .filter((s): s is NonNullable<typeof s> => s !== null)
          : allSeries

        const standalone = q
          ? allStandalone.filter(
              (p) =>
                p.title.toLowerCase().includes(q) ||
                p.tags.some((t) => t.toLowerCase().includes(q)),
            )
          : allStandalone

        return {
          topic,
          series,
          standalone,
          total: topicPosts.length,
        }
      })
      .filter(
        (s) =>
          s.series.length > 0 ||
          s.standalone.length > 0 ||
          (!q && s.total > 0),
      )
      .filter((s) => s.series.length > 0 || s.standalone.length > 0)
  }, [visibleTopics, posts, query])

  const visibleCount = sections.reduce(
    (n, s) =>
      n + s.series.reduce((m, ser) => m + ser.posts.length, 0) + s.standalone.length,
    0,
  )

  const handleCopySeries = async (
    topicId: string,
    seriesName: string,
    seriesPosts: Post[],
  ) => {
    const key = seriesKey(topicId, seriesName)
    const text = formatSeriesTitlesForCopy(seriesPosts)
    try {
      await navigator.clipboard.writeText(text)
      setCopiedKey(key)
      window.setTimeout(() => setCopiedKey(null), 2000)
    } catch {
      window.prompt('העתק את הכותרות:', text)
    }
  }

  return (
    <main className="panel titles-catalog">
      <header className="titles-catalog-header">
        <div>
          <button type="button" className="btn-ghost titles-catalog-back" onClick={onBack}>
            ← חזרה לעריכה
          </button>
          {focusTopic && onClearTopicFocus && (
            <button
              type="button"
              className="btn-ghost titles-catalog-back"
              onClick={onClearTopicFocus}
            >
              ← כל הנושאים
            </button>
          )}
          <h2 className="titles-catalog-title">
            {focusTopic ? focusTopic.name : 'כל הנושאים והכותרות'}
          </h2>
          <p className="muted">
            {focusTopic
              ? `${sections.reduce((n, s) => n + s.series.length, 0)} סדרות · ${sections[0]?.total ?? 0} פוסטים`
              : `${topics.length} נושאים · ${posts.length} פוסטים · ${sections.reduce((n, s) => n + s.series.length, 0)} סדרות`}
            {query.trim() ? ` · מוצגים ${visibleCount}` : ''}
          </p>
        </div>
        <label className="titles-catalog-search">
          <span className="sr-only">חיפוש כותרת</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="חיפוש בכותרות או בשם סדרה…"
            dir="rtl"
          />
        </label>
      </header>

      <div className="titles-catalog-body" ref={bodyRef}>
        {sections.length === 0 ? (
          <p className="empty-state">לא נמצאו כותרות התואמות לחיפוש.</p>
        ) : (
          sections.map(({ topic, series, standalone, total }) => (
            <section key={topic.id} id={`topic-${topic.id}`} className="titles-topic-section">
              <header className="titles-topic-header">
                <h3>{topic.name}</h3>
                <span className="titles-topic-count">
                  {query.trim()
                    ? `${series.reduce((n, s) => n + s.posts.length, 0) + standalone.length} / ${total}`
                    : `${series.length} סדרות · ${total} פוסטים`}
                </span>
              </header>

              {series.map((ser) => {
                const key = seriesKey(topic.id, ser.name)
                const copied = copiedKey === key
                const filledCount = ser.posts.filter(postHasContent).length
                return (
                  <article key={key} className="titles-series-block">
                    <header className="titles-series-header">
                      <h4 className="titles-series-name">{ser.name}</h4>
                      <span className="titles-series-filled" title="כמה פוסטים עם תוכן">
                        {filledCount}/{ser.posts.length} עם תוכן
                      </span>
                      <button
                        type="button"
                        className={`btn-secondary titles-series-copy ${copied ? 'copied' : ''}`}
                        onClick={() => handleCopySeries(topic.id, ser.name, ser.posts)}
                      >
                        {copied ? 'הועתק ✓' : `העתק ${ser.posts.length} כותרות`}
                      </button>
                    </header>
                    <ol className="titles-list">
                      {ser.posts.map((post) => {
                        const hasContent = postHasContent(post)
                        return (
                          <li key={post.id}>
                            <button
                              type="button"
                              id={`catalog-post-${post.id}`}
                              className={`titles-list-item${highlightPostId === post.id ? ' titles-list-item-highlight' : ''}`}
                              onClick={() => onSelectPost(post.id, captureSnapshot())}
                            >
                              <span className="titles-list-num">
                                {getSeriesPart(post) ?? '·'}
                              </span>
                              <span className="titles-list-text">{post.title}</span>
                              <span
                                className={`titles-list-status ${hasContent ? 'has-content' : 'is-empty'}`}
                              >
                                {hasContent ? 'יש תוכן' : 'ריק'}
                              </span>
                            </button>
                          </li>
                        )
                      })}
                    </ol>
                  </article>
                )
              })}

              {standalone.length > 0 && (
                <article className="titles-series-block">
                  <header className="titles-series-header">
                    <h4 className="titles-series-name">פוסטים בודדים</h4>
                    <span className="titles-series-filled" title="כמה פוסטים עם תוכן">
                      {standalone.filter(postHasContent).length}/{standalone.length} עם תוכן
                    </span>
                    <button
                      type="button"
                      className={`btn-secondary titles-series-copy ${copiedKey === seriesKey(topic.id, '__standalone') ? 'copied' : ''}`}
                      onClick={() =>
                        handleCopySeries(topic.id, '__standalone', standalone)
                      }
                    >
                      {copiedKey === seriesKey(topic.id, '__standalone')
                        ? 'הועתק ✓'
                        : `העתק ${standalone.length} כותרות`}
                    </button>
                  </header>
                  <ol className="titles-list">
                    {standalone.map((post, index) => {
                      const hasContent = postHasContent(post)
                      return (
                        <li key={post.id}>
                          <button
                            type="button"
                            id={`catalog-post-${post.id}`}
                            className={`titles-list-item${highlightPostId === post.id ? ' titles-list-item-highlight' : ''}`}
                            onClick={() => onSelectPost(post.id, captureSnapshot())}
                          >
                            <span className="titles-list-num">{index + 1}</span>
                            <span className="titles-list-text">{post.title}</span>
                            <span
                              className={`titles-list-status ${hasContent ? 'has-content' : 'is-empty'}`}
                            >
                              {hasContent ? 'יש תוכן' : 'ריק'}
                            </span>
                          </button>
                        </li>
                      )
                    })}
                  </ol>
                </article>
              )}
            </section>
          ))
        )}
      </div>
    </main>
  )
}
