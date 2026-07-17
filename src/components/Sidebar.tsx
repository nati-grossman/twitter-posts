import { useState } from 'react'
import type { Topic } from '../types'

interface SidebarProps {
  topics: Topic[]
  catalogActive?: boolean
  catalogFocusTopicId?: string | null
  onOpenCatalog: (topicId?: string | null) => void
  onNewPost: () => void
  onAddTopic: (name: string, description: string) => void
  onUpdateTopic: (id: string, name: string, description: string) => void
  onDeleteTopic: (id: string) => void
  onReloadLibrary: () => void
  postCountByTopic: Record<string, number>
  totalPosts: number
}

export function Sidebar({
  topics,
  catalogActive = false,
  catalogFocusTopicId = null,
  onOpenCatalog,
  onNewPost,
  onAddTopic,
  onUpdateTopic,
  onDeleteTopic,
  onReloadLibrary,
  postCountByTopic,
  totalPosts,
}: SidebarProps) {
  const [modal, setModal] = useState<'add' | { edit: Topic } | null>(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const openAdd = () => {
    setName('')
    setDescription('')
    setModal('add')
  }

  const openEdit = (topic: Topic) => {
    setName(topic.name)
    setDescription(topic.description)
    setModal({ edit: topic })
  }

  const closeModal = () => setModal(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return
    if (modal === 'add') {
      onAddTopic(trimmed, description.trim())
    } else if (modal && typeof modal === 'object') {
      onUpdateTopic(modal.edit.id, trimmed, description.trim())
    }
    closeModal()
  }

  return (
    <aside className="panel sidebar">
      <div className="sidebar-header">
        <h1 className="app-title">פוסטים</h1>
        <p className="app-subtitle">מערכת תוכן לטוויטר</p>
      </div>

      <nav className="sidebar-nav">
        <button
          type="button"
          className={`nav-item ${catalogActive && catalogFocusTopicId === null ? 'active' : ''}`}
          onClick={() => onOpenCatalog(null)}
        >
          <span className="nav-label">כל הכותרות</span>
          <span className="nav-count">{totalPosts}</span>
        </button>

        <div className="nav-section-label">נושאים</div>

        {topics.map((topic) => (
          <div key={topic.id} className="topic-row">
            <button
              type="button"
              className={`nav-item ${catalogActive && catalogFocusTopicId === topic.id ? 'active' : ''}`}
              onClick={() => onOpenCatalog(topic.id)}
            >
              <span className="nav-label">{topic.name}</span>
              <span className="nav-count">{postCountByTopic[topic.id] ?? 0}</span>
            </button>
            {topic.id !== 'general' && (
              <button
                type="button"
                className="icon-btn topic-edit-btn"
                onClick={() => openEdit(topic)}
                aria-label={`עריכת ${topic.name}`}
                title="עריכה"
              >
                ✎
              </button>
            )}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button type="button" className="btn-primary sidebar-add" onClick={onNewPost}>
          + פוסט חדש
        </button>
        <button type="button" className="btn-secondary sidebar-add" onClick={openAdd}>
          + נושא חדש
        </button>
        <button
          type="button"
          className="btn-ghost sidebar-reload"
          onClick={onReloadLibrary}
        >
          טען ספריית תוכן
        </button>
      </div>

      {modal && (
        <div className="modal-overlay" onClick={closeModal}>
          <form
            className="modal"
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit}
          >
            <h2>{modal === 'add' ? 'נושא חדש' : 'עריכת נושא'}</h2>
            <label>
              שם
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="למשל: יסודות AI"
                autoFocus
              />
            </label>
            <label>
              תיאור
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="איזה סוג פוסטים שייכים לנושא?"
                rows={3}
              />
            </label>
            <div className="modal-actions">
              {typeof modal === 'object' && modal.edit.id !== 'general' && (
                <button
                  type="button"
                  className="btn-danger"
                  onClick={() => {
                    onDeleteTopic(modal.edit.id)
                    closeModal()
                  }}
                >
                  מחיקה
                </button>
              )}
              <div className="modal-actions-right">
                <button type="button" className="btn-ghost" onClick={closeModal}>
                  ביטול
                </button>
                <button type="submit" className="btn-primary">
                  שמירה
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </aside>
  )
}
