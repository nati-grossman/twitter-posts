import type { SeedTopic } from '../types'
import {
  browserPaintSite,
  browserHtml,
  browserCss,
  browserJavascript,
  browserLinkClick,
  browserLoadSteps,
  browserDom,
  browserRendering,
  browserBroken,
  browserCache,
} from '../series/browser'

export const browserWebsites: SeedTopic = {
  id: 'browser-websites',
  name: 'הדפדפן והאתרים',
  description: `איך דפדפן בונה ומציג אתרים — 10 סדרות × 10 פוסטים: HTML, CSS, JS, DOM, רינדור, cache.`,
  subtopics: [
    browserPaintSite,
    browserHtml,
    browserCss,
    browserJavascript,
    browserLinkClick,
    browserLoadSteps,
    browserDom,
    browserRendering,
    browserBroken,
    browserCache,
  ],
}
