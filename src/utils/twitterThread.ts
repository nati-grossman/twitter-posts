/** מספר חלקים בשרשור טוויטר לכל פוסט */
export const TWITTER_THREAD_PARTS = 3

/** מפריד נוח בין ציוצים בהעתקה */
export const TWITTER_THREAD_SEPARATOR = '\n\n———————\n\n'

function findBreakIndex(text: string, ideal: number): number {
  if (text.length <= ideal) return text.length

  const min = Math.max(Math.floor(ideal * 0.55), 1)
  const max = Math.min(text.length, ideal + 60)
  const window = text.slice(0, max)

  const paragraph = window.lastIndexOf('\n\n')
  if (paragraph >= min) return paragraph

  const line = window.lastIndexOf('\n')
  if (line >= min) return line

  const space = window.lastIndexOf(' ')
  if (space >= min) return space

  return Math.min(ideal, text.length)
}

/** מחלק טקסט ל־n חלקים מאוזנים, עם העדפה לשבירות בפסקאות / שורות / מילים */
export function splitTextEvenly(text: string, parts: number): string[] {
  const trimmed = text.trim()
  if (!trimmed) return Array.from({ length: parts }, () => '')
  if (parts <= 1) return [trimmed]

  const result: string[] = []
  let remaining = trimmed

  for (let i = 0; i < parts - 1; i++) {
    if (!remaining) {
      result.push('')
      continue
    }
    const slotsLeft = parts - i
    const ideal = Math.ceil(remaining.length / slotsLeft)
    const cut = findBreakIndex(remaining, ideal)
    result.push(remaining.slice(0, cut).trim())
    remaining = remaining.slice(cut).trim()
  }
  result.push(remaining)
  return result
}

/**
 * מחלק פוסט (כותרת + תוכן) ל־3 ציוצי טוויטר ממוספרים.
 * הכותרת נכנסת לתחילת השרשור יחד עם התוכן.
 */
export function splitPostIntoTwitterThread(
  title: string,
  content: string,
  parts = TWITTER_THREAD_PARTS,
): string[] {
  const t = title.trim()
  const c = content.trim()
  const full = [t, c].filter(Boolean).join('\n\n')
  const bodies = splitTextEvenly(full, parts)

  return bodies.map((body, index) => {
    const label = `${index + 1}/${parts}`
    return body ? `${label}\n${body}` : label
  })
}

export function formatTwitterThreadForCopy(parts: string[]): string {
  return parts.filter((p) => p.trim().length > 0).join(TWITTER_THREAD_SEPARATOR)
}
