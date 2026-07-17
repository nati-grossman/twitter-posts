import { useMemo, useState } from 'react'
import { PostEditor } from './components/PostEditor'
import { Sidebar } from './components/Sidebar'
import {
  TitlesCatalog,
  type CatalogSnapshot,
} from './components/TitlesCatalog'
import { useAppData } from './hooks/useAppData'
import type { Post } from './types'

export default function App() {
  const {
    data,
    addTopic,
    updateTopic,
    deleteTopic,
    addPost,
    updatePost,
    deletePost,
    duplicatePost,
    reloadSeed,
  } = useAppData()

  const [view, setView] = useState<'editor' | 'catalog'>('catalog')
  const [catalogFocusTopicId, setCatalogFocusTopicId] = useState<string | null>(
    null,
  )
  const [catalogSnapshot, setCatalogSnapshot] = useState<CatalogSnapshot | null>(
    null,
  )
  const [catalogRestoreKey, setCatalogRestoreKey] = useState(0)
  const [canReturnToCatalog, setCanReturnToCatalog] = useState(false)
  const [editOnOpen, setEditOnOpen] = useState(false)
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null)
  const [editorDraft, setEditorDraft] = useState<Post | null>(null)

  const postCountByTopic = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const post of data.posts) {
      counts[post.topic] = (counts[post.topic] ?? 0) + 1
    }
    return counts
  }, [data.posts])

  const selectedPost =
    editorDraft ??
    data.posts.find((p) => p.id === selectedPostId) ??
    null

  const handleOpenCatalog = (topicId: string | null = null) => {
    setCatalogFocusTopicId(topicId)
    setCatalogSnapshot(null)
    setCanReturnToCatalog(false)
    setView('catalog')
    setEditorDraft(null)
  }

  const handleSelectPostFromCatalog = (
    id: string,
    snapshot: Omit<CatalogSnapshot, 'focusTopicId'>,
  ) => {
    setCatalogSnapshot({
      ...snapshot,
      focusTopicId: catalogFocusTopicId,
    })
    setCanReturnToCatalog(true)
    setEditOnOpen(false)
    setSelectedPostId(id)
    setEditorDraft(null)
    setView('editor')
  }

  const handleBackToCatalog = () => {
    if (catalogSnapshot) {
      setCatalogFocusTopicId(catalogSnapshot.focusTopicId)
    }
    setCatalogRestoreKey((k) => k + 1)
    setView('catalog')
    setEditorDraft(null)
  }

  const handleNewPost = () => {
    const topicId =
      catalogFocusTopicId ?? data.topics[0]?.id ?? 'general'
    const id = addPost(topicId)
    setCatalogSnapshot(null)
    setCanReturnToCatalog(false)
    setEditOnOpen(true)
    setSelectedPostId(id)
    setEditorDraft(null)
    setView('editor')
  }

  const handleDeletePost = (id: string) => {
    deletePost(id)
    if (selectedPostId === id) {
      setSelectedPostId(null)
      setEditorDraft(null)
    }
  }

  const handleDuplicate = (id: string) => {
    const newId = duplicatePost(id)
    if (newId) {
      setSelectedPostId(newId)
      setEditorDraft(null)
    }
  }

  return (
    <div className="app">
      <Sidebar
        topics={data.topics}
        catalogActive={view === 'catalog'}
        catalogFocusTopicId={catalogFocusTopicId}
        onOpenCatalog={handleOpenCatalog}
        onNewPost={handleNewPost}
        onAddTopic={addTopic}
        onUpdateTopic={updateTopic}
        onDeleteTopic={deleteTopic}
        onReloadLibrary={() => {
          if (
            window.confirm(
              'לטעון מחדש את כל ספריית התוכן? פעולה זו תחליף את כל הנושאים והפוסטים הקיימים.',
            )
          ) {
            reloadSeed()
            setView('catalog')
            setCatalogFocusTopicId(null)
            setCatalogSnapshot(null)
            setCanReturnToCatalog(false)
            setSelectedPostId(null)
            setEditorDraft(null)
          }
        }}
        postCountByTopic={postCountByTopic}
        totalPosts={data.posts.length}
      />
      {view === 'catalog' ? (
        <TitlesCatalog
          topics={data.topics}
          posts={data.posts}
          focusTopicId={catalogFocusTopicId}
          onClearTopicFocus={() => setCatalogFocusTopicId(null)}
          onBack={() => setView('editor')}
          onSelectPost={handleSelectPostFromCatalog}
          restoreKey={catalogRestoreKey}
          restoreSnapshot={canReturnToCatalog ? catalogSnapshot : null}
          highlightPostId={canReturnToCatalog ? selectedPostId : null}
        />
      ) : (
        <PostEditor
          post={selectedPost}
          topics={data.topics}
          editOnOpen={editOnOpen}
          onDraftChange={setEditorDraft}
          onUpdate={updatePost}
          onDelete={handleDeletePost}
          onDuplicate={handleDuplicate}
          onOpenCatalog={() => handleOpenCatalog(null)}
          onBackToCatalog={canReturnToCatalog ? handleBackToCatalog : undefined}
        />
      )}
    </div>
  )
}
