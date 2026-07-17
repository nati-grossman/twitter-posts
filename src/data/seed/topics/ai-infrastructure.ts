import type { SeedTopic } from '../types'

export const aiInfrastructure: SeedTopic = {
  id: 'ai-infrastructure',
  name: 'תשתיות AI',
  description: 'איך מריצים מודלים בפרודקשן: שרתים, אורקסטרציה, observability — בלי הייפ.',
  subtopics: [
    {
      name: 'מחסנית inference',
      posts: [
        {
          title: 'API ≠ מודל',
          content: 'שכבת API: auth, routing, rate limit, versioning. המודל הוא שירות אחד בתוך מערכת.',
          postType: 'single',
        },
        {
          title: 'vLLM / TGI בקצרה',
          content: 'שרתי inference מרכזים batching ו-KV cache. ההבדל בין "הרצתי huggingface" ל-SLA.',
          postType: 'explainer',
        },
        {
          title: 'Thread: מ-laptop ל-cluster',
          content: 'מסלול: prototype → staging GPU → autoscaling → multi-region. איפה רוב הצוותים נתקעים.',
          postType: 'thread',
        },
      ],
    },
    {
      name: 'Model serving',
      posts: [
        {
          title: 'cold start הורג UX',
          content: 'טעינת משקלים ל-GPU לוקחת זמן. warm pools ו-model caching — לא אופציונלי.',
          postType: 'single',
          tags: ['production'],
        },
        {
          title: 'גרסאות מודל בפרודקשן',
          content: 'canary, shadow traffic, rollback. כמו כל שירות — רק יקר יותר כשטועים.',
          postType: 'explainer',
        },
      ],
    },
    {
      name: 'Orchestration',
      posts: [
        {
          title: 'pipeline ≠ צ\'אט אחד',
          content: 'רוב מוצרי AI = מספר קריאות מודל + כלים + DB. LangGraph/LangChain הם דיאגרמה, לא קסם.',
          postType: 'hot_take',
        },
        {
          title: 'state machine לסוכן',
          content: 'מצבים: plan → act → observe → retry. בלי מכונה — לולאות אינסופיות.',
          postType: 'explainer',
          tags: ['agents'],
        },
      ],
    },
    {
      name: 'Observability',
      posts: [
        {
          title: 'לוג טוקנים לא מספיק',
          content: 'צריך: prompt hash, latency breakdown, refusal rate, cost per user, drift signals.',
          postType: 'single',
        },
        {
          title: 'tracing ל-LLM',
          content: 'OpenTelemetry לשרשרת קריאות. איפה נשבר: retrieval? model? tool?',
          postType: 'explainer',
        },
        {
          title: 'שאלה: מה אתם מודדים הלילה',
          content: 'אם אין dashboard ל-hallucination rate במשימה אחת — אתם לא ב-production.',
          postType: 'question',
        },
      ],
    },
    {
      name: 'Cost control',
      posts: [
        {
          title: 'unit economics של טוקן',
          content: 'COGS = (input+output tokens)×price. מוצר שלא יודע margin per session — בועה פנימית.',
          postType: 'single',
          tags: ['עסקים'],
        },
        {
          title: 'caching prompts זהים',
          content: 'semantic cache לשאלות חוזרות. חיסכון 30–70% במקרים אמיתיים, לא תיאורטיים.',
          postType: 'explainer',
        },
      ],
    },
    {
      name: 'Multi-tenant ואבטחה',
      posts: [
        {
          title: 'בידוד בין לקוחות',
          content: 'לא לערבב embeddings, לא לשתף KV cache, לא ללמד על לקוח א בלי הסכמה.',
          postType: 'single',
          tags: ['אבטחה'],
        },
        {
          title: 'prompt injection בפרודקשן',
          content: 'קלט משתמש = קוד לא מהימן. sanitize, tool permissions, output filtering.',
          postType: 'explainer',
        },
      ],
    },
    {
      name: 'On-prem מול cloud',
      posts: [
        {
          title: 'מתי GPU משלכם',
          content: 'רגולציה, נפח קבוע גבוה, דאטה רגיש. אחרת — TCO של cloud מנצח לרוב סטארטאפים.',
          postType: 'explainer',
        },
        {
          title: 'air-gapped LLM',
          content: 'Thread: מודל קטן מקומי + RAG פנימי. מה עובד ומה נשבר באיכות.',
          postType: 'thread',
        },
      ],
    },
  ],
}
