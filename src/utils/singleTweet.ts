import { SINGLE_TWEETS } from '../data/seed/singleTweets'

/** ציוץ יחיד (עד 200 תווים) לפוסט מסדרה, לפי נושא + שם סדרה + מספר חלק */
export function getSingleTweet(topicId: string, title: string): string | null {
  const m = title.match(/^(.+?) \((\d+)\/10\)/)
  if (!m) return null
  return SINGLE_TWEETS[`${topicId}\0${m[1]}\0${Number(m[2])}`] ?? null
}
