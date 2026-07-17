import type { Post } from '../types'

const SERIES_TITLE_RE = /^(.+?) \((\d+)\/10\) —/

export function getSeriesPart(post: Post): number | null {
  const fromTitle = post.title.match(/\((\d+)\/10\)/)
  if (fromTitle) return Number(fromTitle[1])
  const tag = post.tags.find((t) => /^\d+\/10$/.test(t))
  if (tag) return Number(tag.split('/')[0])
  return null
}

export function getSeriesName(post: Post): string | null {
  if (post.tags.includes('סדרה') && post.tags[0]) {
    return post.tags[0]
  }
  const m = post.title.match(SERIES_TITLE_RE)
  return m?.[1] ?? null
}

export function isSeriesPost(post: Post): boolean {
  return post.tags.includes('סדרה') || SERIES_TITLE_RE.test(post.title)
}

export interface PostSeries {
  name: string
  posts: Post[]
}

export function groupPostsBySeries(posts: Post[]): {
  series: PostSeries[]
  standalone: Post[]
} {
  const byName = new Map<string, Post[]>()
  const standalone: Post[] = []

  for (const post of posts) {
    const name = getSeriesName(post)
    if (name && isSeriesPost(post)) {
      const list = byName.get(name) ?? []
      list.push(post)
      byName.set(name, list)
    } else {
      standalone.push(post)
    }
  }

  const series = [...byName.entries()]
    .map(([name, seriesPosts]) => ({
      name,
      posts: seriesPosts.sort(
        (a, b) => (getSeriesPart(a) ?? 0) - (getSeriesPart(b) ?? 0),
      ),
    }))
    .sort((a, b) => a.name.localeCompare(b.name, 'he'))

  return { series, standalone }
}

export function formatSeriesTitlesForCopy(posts: Post[]): string {
  return posts.map((p) => p.title).join('\n')
}
