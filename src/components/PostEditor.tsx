import { useEffect, useState } from 'react'
import {
  POST_TYPE_LABELS,
  POST_TYPES,
  STATUS_LABELS,
} from '../constants'
import { useAutosave, type SaveState } from '../hooks/useAppData'
import type { Post, PostStatus, PostType, Topic } from '../types'
import { parseTagsInput, tagsToInput } from '../utils'

interface PostEditorProps {
  post: Post | null
  topics: Topic[]
  editOnOpen?: boolean
  onDraftChange: (draft: Post | null) => void
  onUpdate: (id: string, patch: Partial<Post>) => void
  onDelete: (id: string) => void
  onDuplicate: (id: string) => void
  onOpenCatalog: () => void
  onBackToCatalog?: () => void
}

function SaveIndicator({ state }: { state: SaveState }) {
  if (state === 'idle') return null
  return (
    <span className={`save-indicator ${state}`}>
      {state === 'saving' ? 'שומר…' : 'נשמר'}
    </span>
  )
}

function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString('he-IL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function postPatch(draft: Post): Partial<Post> {
  return {
    title: draft.title,
    content: draft.content,
    topic: draft.topic,
    postType: draft.postType,
    status: draft.status,
    tags: draft.tags,
  }
}

export function PostEditor({
  post,
  topics,
  editOnOpen = false,
  onDraftChange,
  onUpdate,
  onDelete,
  onDuplicate,
  onOpenCatalog,
  onBackToCatalog,
}: PostEditorProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState<Post | null>(post)
  const [tagsInput, setTagsInput] = useState('')

  useEffect(() => {
    setDraft(post)
    setTagsInput(post ? tagsToInput(post.tags) : '')
    setIsEditing(editOnOpen)
    onDraftChange(null)
  }, [post?.id, editOnOpen])

  const saveState = useAutosave(isEditing ? draft : null, onUpdate)

  if (!draft) {
    return (
      <section className="panel editor-panel editor-empty">
        <p>בחר פוסט מדף כל הכותרות לצפייה.</p>
        <button type="button" className="btn-primary" onClick={onOpenCatalog}>
          פתח כל הכותרות
        </button>
      </section>
    )
  }

  const topicName =
    topics.find((t) => t.id === draft.topic)?.name ?? draft.topic

  const patch = (partial: Partial<Post>) => {
    const next = { ...draft, ...partial }
    setDraft(next)
    onDraftChange(next)
  }

  const handleTagsBlur = () => {
    patch({ tags: parseTagsInput(tagsInput) })
  }

  const flushSave = () => {
    onUpdate(draft.id, postPatch(draft))
  }

  const startEditing = () => {
    setIsEditing(true)
    onDraftChange(draft)
  }

  const finishEditing = () => {
    const tags = parseTagsInput(tagsInput)
    const final = { ...draft, tags }
    setDraft(final)
    onUpdate(final.id, postPatch(final))
    setIsEditing(false)
    onDraftChange(null)
  }

  const charCount = draft.content.length

  if (!isEditing) {
    return (
      <section className="panel editor-panel post-view">
        {onBackToCatalog && (
          <button
            type="button"
            className="btn-ghost editor-back"
            onClick={onBackToCatalog}
          >
            ← חזרה לכותרות
          </button>
        )}
        <header className="editor-header">
          <div className="post-view-badges">
            <span className={`badge badge-status ${draft.status}`}>
              {STATUS_LABELS[draft.status]}
            </span>
            <span className="badge badge-type">
              {POST_TYPE_LABELS[draft.postType]}
            </span>
            <span className="badge badge-topic">{topicName}</span>
          </div>
          <div className="editor-actions">
            <button type="button" className="btn-primary" onClick={startEditing}>
              עריכה
            </button>
            <button
              type="button"
              className="btn-ghost"
              onClick={() => onDuplicate(draft.id)}
            >
              שכפול
            </button>
            <button
              type="button"
              className="btn-danger"
              onClick={() => onDelete(draft.id)}
            >
              מחיקה
            </button>
          </div>
        </header>

        <h1 className="post-view-title">{draft.title || 'פוסט ללא כותרת'}</h1>

        <article className="post-view-content">
          {draft.content ? (
            <p className="post-view-text">{draft.content}</p>
          ) : (
            <p className="post-view-empty">אין תוכן בפוסט זה.</p>
          )}
          <p className="post-view-char-count">{charCount} תווים</p>
        </article>

        {draft.tags.length > 0 && (
          <div className="post-view-tags">
            {draft.tags.map((tag) => (
              <span key={tag} className="badge badge-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="editor-meta muted">
          נוצר {formatDateTime(draft.createdAt)}
          {draft.publishedAt && (
            <> · פורסם {formatDateTime(draft.publishedAt)}</>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className="panel editor-panel">
      {onBackToCatalog && (
        <button
          type="button"
          className="btn-ghost editor-back"
          onClick={() => {
            flushSave()
            onBackToCatalog()
          }}
        >
          ← חזרה לכותרות
        </button>
      )}
      <header className="editor-header">
        <SaveIndicator state={saveState} />
        <div className="editor-actions">
          <button type="button" className="btn-secondary" onClick={finishEditing}>
            סיום עריכה
          </button>
          <button
            type="button"
            className="btn-ghost"
            onClick={() => onDuplicate(draft.id)}
          >
            שכפול
          </button>
          <button
            type="button"
            className="btn-danger"
            onClick={() => onDelete(draft.id)}
          >
            מחיקה
          </button>
        </div>
      </header>

      <input
        className="editor-title"
        value={draft.title}
        onChange={(e) => patch({ title: e.target.value })}
        placeholder="כותרת הפוסט"
        dir="rtl"
      />

      <textarea
        className="editor-content"
        value={draft.content}
        onChange={(e) => patch({ content: e.target.value })}
        placeholder="כתוב כאן את תוכן הפוסט… (מונחים באנגלית מותרים)"
        dir="rtl"
      />

      <div className="editor-footer">
        <span className="char-count">{charCount} תווים</span>
      </div>

      <div className="editor-fields">
        <label>
          נושא
          <select
            value={draft.topic}
            onChange={(e) => patch({ topic: e.target.value })}
          >
            {topics.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          פורמט
          <select
            value={draft.postType}
            onChange={(e) =>
              patch({ postType: e.target.value as PostType })
            }
          >
            {POST_TYPES.map((t) => (
              <option key={t} value={t}>
                {POST_TYPE_LABELS[t]}
              </option>
            ))}
          </select>
        </label>

        <label>
          סטטוס
          <select
            value={draft.status}
            onChange={(e) =>
              patch({ status: e.target.value as PostStatus })
            }
          >
            <option value="draft">{STATUS_LABELS.draft}</option>
            <option value="published">{STATUS_LABELS.published}</option>
          </select>
        </label>
      </div>

      <label className="editor-tags">
        תגיות
        <input
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          onBlur={handleTagsBlur}
          placeholder="תגית, תגית, תגית"
          dir="rtl"
        />
      </label>

      <div className="editor-meta muted">
        נוצר {formatDateTime(draft.createdAt)}
        {draft.publishedAt && (
          <> · פורסם {formatDateTime(draft.publishedAt)}</>
        )}
      </div>
    </section>
  )
}
