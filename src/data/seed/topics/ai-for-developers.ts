import type { SeedTopic } from '../types'

export const aiForDevelopers: SeedTopic = {
  id: 'ai-for-developers',
  name: 'AI למפתחים',
  description: 'מושגים שמפתח צריך כדי לבנות נכון: APIs, prompts, evals, ואינטגרציה במערכת קיימת.',
  subtopics: [
    {
      name: 'API design ל-LLM',
      posts: [
        {
          title: 'streaming הוא UX, לא בונוס',
          content: 'TTFT (time to first token) קובע תחושת מהירות. תכננו SSE מהיום הראשון.',
          postType: 'single',
          tags: ['production'],
        },
        {
          title: 'structured output',
          content: 'JSON mode / function calling — כופים מבנה במקום לפרסר טקסט. פחות שבירה, יותר schema discipline.',
          postType: 'explainer',
        },
        {
          title: 'idempotency ו-retries',
          content: 'קריאות LLM לא דטרמיניסטיות. מפתח טוב שומר request id ומבדיל transient מול model failure.',
          postType: 'single',
        },
      ],
    },
    {
      name: 'Prompt engineering למפתחים',
      posts: [
        {
          title: 'prompt כקוד ללא types',
          content: 'גרסה, diff, review, tests. אם ה-prompt ב-Notion — אתם לפני 2010 ב-CI.',
          postType: 'hot_take',
        },
        {
          title: 'few-shot כ-tests',
          content: 'דוגמאות = dataset קטן. כשמשנים prompt — מריצים regression על 20 מקרים.',
          postType: 'explainer',
        },
        {
          title: 'Thread: template לעברית',
          content: 'כללים: עברית עקבית, מונחים באנגלית בסוגריים, פורמט פלט קבוע. דוגמאות אמיתיות.',
          postType: 'thread',
        },
      ],
    },
    {
      name: 'Evals',
      posts: [
        {
          title: 'אין eval = אין מוצר',
          content: 'benchmark כללי לא מחליף eval משימתי. בנו 50 שאלות מהמשתמשים האמיתיים שלכם.',
          postType: 'hot_take',
        },
        {
          title: 'LLM-as-judge בזהירות',
          content: 'שופט מודל נוטה להעדיף סגנון דומה לו. human spot-check חובה.',
          postType: 'explainer',
        },
        {
          title: 'שאלה: מה ה-metric שלכם',
          content: 'accuracy? helpfulness? citation rate? בחרו אחד ראשי לכל release.',
          postType: 'question',
        },
      ],
    },
    {
      name: 'Embeddings בקוד',
      posts: [
        {
          title: 'אותו טקסט — וקטור שונה?',
          content: 'מודל embedding, גרסה, normalization — משפיעים על cosine. תיעדו pipeline.',
          postType: 'single',
        },
        {
          title: 'chunking strategy',
          content: 'גודל chunk, overlap, כותרות — קובעים recall ב-RAG יותר מ-"מודל חכם".',
          postType: 'explainer',
          tags: ['RAG'],
        },
      ],
    },
    {
      name: 'Fine-tuning מול RAG',
      posts: [
        {
          title: 'RAG קודם, fine-tune אחר',
          content: 'ברוב המוצרים: עוגן בידע לפני שינוי משקלים. fine-tune לטון ופורמט, לא ל-facts.',
          postType: 'explainer',
        },
        {
          title: 'LoRA בפרקטיקה',
          content: 'מעדכנים שכבות קטנות — זול, מהיר, reversible. לא "אימון מלא" על laptop.',
          postType: 'single',
        },
      ],
    },
    {
      name: 'Testing ו-CI',
      posts: [
        {
          title: 'snapshot tests ל-prompt',
          content: 'השוואת פלט ל-golden files עם tolerance. שינוי מודל חיצוני שובר CI — זה feature.',
          postType: 'explainer',
        },
        {
          title: 'mock LLM ב-unit tests',
          content: 'בדיקות orchestration בלי API. אינטגרציה nightly עם מודל אמיתי.',
          postType: 'single',
        },
      ],
    },
    {
      name: 'אבטחה למפתחים',
      posts: [
        {
          title: 'never trust user content in system',
          content: 'הפרדה קשיחה: system / user / tool results. כל מיזוג = injection surface.',
          postType: 'single',
          tags: ['אבטחה'],
        },
        {
          title: 'tool permissions',
          content: 'קריאה ל-DB, שליחת מייל — allowlist. סוכן בלי גבולות = incident waiting.',
          postType: 'explainer',
        },
      ],
    },
    {
      name: 'Developer experience',
      posts: [
        {
          title: 'local dev בלי $10k GPU',
          content: 'מודל קטן, Ollama, recorded responses. מהירות פיתוח > fidelity בשלב ראשון.',
          postType: 'single',
        },
        {
          title: 'playground ≠ production',
          content: 'Hot take: הצ\'אט של OpenAI מלמד UX, לא architecture. העתיקו patterns, לא stack.',
          postType: 'hot_take',
        },
      ],
    },
  ],
}
