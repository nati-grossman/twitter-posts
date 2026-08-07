/** יעד רך לאורך ציוץ (נוח לקריאה במובייל) */
export const TWITTER_SOFT_MAX = 220

/** תקרה קשיחה — בערך מגבלת טוויטר הקלאסית */
export const TWITTER_HARD_MAX = 280

/** מפריד נוח בין ציוצים בהעתקה */
export const TWITTER_THREAD_SEPARATOR = '\n\n———————\n\n'

/** סימן המשך בסוף ציוץ שאינו האחרון */
export const TWITTER_CONTINUATION_MARK = '\n\n👇'

export interface ParsedPostTitle {
  series: string | null
  part: string | null
  subtitle: string | null
  raw: string
}

export function parsePostTitle(title: string): ParsedPostTitle {
  const raw = title.trim()
  const m = raw.match(/^(.+?) \((\d+)\/10\) — (.+)$/)
  if (!m) {
    return { series: null, part: null, subtitle: null, raw }
  }
  return {
    series: m[1].trim(),
    part: m[2],
    subtitle: m[3].trim(),
    raw,
  }
}

function splitLongBlock(text: string, maxLen: number): string[] {
  const trimmed = text.trim()
  if (!trimmed) return []
  if (trimmed.length <= maxLen) return [trimmed]

  const parts: string[] = []
  let remaining = trimmed

  while (remaining.length > maxLen) {
    const window = remaining.slice(0, maxLen)
    // העדפה: סוף משפט, ואז שורה, ואז רווח
    const sentenceEnds = [...window.matchAll(/[.!?…](?=\s|$)/g)]
    let cut = -1
    const lastSentence = sentenceEnds.at(-1)
    if (lastSentence?.index != null && lastSentence.index >= maxLen * 0.45) {
      cut = lastSentence.index + 1
    } else {
      const line = window.lastIndexOf('\n')
      if (line >= maxLen * 0.45) cut = line
      else {
        const space = window.lastIndexOf(' ')
        cut = space >= maxLen * 0.4 ? space : maxLen
      }
    }
    parts.push(remaining.slice(0, cut).trim())
    remaining = remaining.slice(cut).trim()
  }
  if (remaining) parts.push(remaining)
  return parts
}

/** מפרק תוכן ליחידות קטנות: פסקאות, ואם צריך — משפטים */
function contentToUnits(content: string, maxLen: number): string[] {
  const paragraphs = content
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)

  const units: string[] = []
  for (const para of paragraphs) {
    if (para.length <= maxLen) {
      units.push(para)
    } else {
      units.push(...splitLongBlock(para, maxLen))
    }
  }
  return units
}

/** אורז יחידות לציוצים בלי לחתוך באמצע רעיון */
function packUnits(units: string[], maxLen: number): string[] {
  if (units.length === 0) return []

  const tweets: string[] = []
  let current = ''

  for (const unit of units) {
    if (unit.length > maxLen) {
      if (current) {
        tweets.push(current)
        current = ''
      }
      tweets.push(...splitLongBlock(unit, maxLen))
      continue
    }

    const next = current ? `${current}\n\n${unit}` : unit
    if (next.length <= maxLen) {
      current = next
    } else {
      if (current) tweets.push(current)
      current = unit
    }
  }

  if (current) tweets.push(current)
  return tweets
}

/**
 * מחלק פוסט לשרשור טוויטר קריא.
 * מספר הציוצים דינמי לפי אורך התוכן (לא תמיד 3).
 * הכותרת הארוכה לא נדחסת כמו שהיא — משתמשים בכותרת־המשנה כפתיחה.
 */
export function splitPostIntoTwitterThread(
  title: string,
  content: string,
): string[] {
  const parsed = parsePostTitle(title)
  const body = content.trim()
  const labelReserve = 6 // מקום ל־"12/12\n"
  // משאירים מקום ל־👇 בסוף ציוץ שיש לו המשך
  const bodyMax =
    TWITTER_SOFT_MAX - labelReserve - TWITTER_CONTINUATION_MARK.length

  const openerLines: string[] = []
  if (parsed.subtitle) {
    openerLines.push(parsed.subtitle)
  } else if (parsed.raw) {
    openerLines.push(parsed.raw)
  }

  const units = contentToUnits(body, bodyMax)

  // ציוץ ראשון: כותרת משנה + כמה שורות פתיחה שנכנסות בנוחות
  const tweets: string[] = []
  if (openerLines.length && units.length === 0) {
    tweets.push(openerLines.join('\n'))
  } else if (openerLines.length) {
    let first = openerLines.join('\n')
    let i = 0
    while (i < units.length) {
      const candidate = `${first}\n\n${units[i]}`
      if (candidate.length <= bodyMax) {
        first = candidate
        i++
      } else {
        break
      }
    }
    tweets.push(first)
    tweets.push(...packUnits(units.slice(i), bodyMax))
  } else {
    tweets.push(...packUnits(units, bodyMax))
  }

  const cleaned = tweets.map((t) => t.trim()).filter(Boolean)
  if (cleaned.length === 0) return []

  const total = cleaned.length
  return cleaned.map((bodyText, index) => {
    const labeled = `${index + 1}/${total}\n${bodyText}`
    // בכל ציוץ חוץ מהאחרון — שורה ריקה ואז 👇 לסימון שיש המשך
    if (index < total - 1) {
      return `${labeled}${TWITTER_CONTINUATION_MARK}`
    }
    return labeled
  })
}

export function formatTwitterThreadForCopy(parts: string[]): string {
  return parts.filter((p) => p.trim().length > 0).join(TWITTER_THREAD_SEPARATOR)
}
