import type { SeedTopic } from '../types'

export const llmInternals: SeedTopic = {
  id: 'llm-internals',
  name: 'פנימיית LLM',
  description: 'מה קורה מתחת לממשק: טוקנים, חיזוי, הקשר, והתנהגות שמבלבלת משתמשים.',
  subtopics: [
    {
      name: 'טוקניזציה',
      posts: [
        {
          title: 'המודל לא רואה מילים',
          content: 'BPE/WordPiece: טוקנים = יחידות סטטיסטיות. עברית מפוצלת אחרת מאנגלית — זה משפיע על עלות, אורך context, ו"איות".',
          postType: 'explainer',
        },
        {
          title: 'למה אות עולה כסף',
          content: 'תמחור לפי טוקן = תמחור לפי ייצוג פנימי. אות בודדת בעברית יכולה להיות יותר מטוקן אחד.',
          postType: 'single',
          tags: ['מוצר'],
        },
        {
          title: 'ניסוי: אותה משמעות, טוקנים שונים',
          content: 'שאלה: כמה טוקנים ב-prompt שלכם בעברית לעומת אנגלית? השוואה משנה תכנון API.',
          postType: 'question',
        },
      ],
    },
    {
      name: 'Next-token prediction',
      posts: [
        {
          title: 'כל LLM הוא autocomplete מתוחכם',
          content: 'לא מכיר "תשובה נכונה" — מכיר P(token|context). כל יכולת emergent היא צורה של אותה מטרה.',
          postType: 'hot_take',
        },
        {
          title: 'למה sampling משנה אופי',
          content: 'temperature, top-p — לא "יצירתיות" מיסטית. שינוי צורת ההתפלגות → שינוי סיכון לטעויות.',
          postType: 'explainer',
        },
        {
          title: 'Thread: greedy מול nucleus',
          content: 'מתי להיות דטרמיניסטי (קוד) ומתי לדגום (כתיבה). כלל אצבע למפתחים.',
          postType: 'thread',
        },
      ],
    },
    {
      name: 'Context window',
      posts: [
        {
          title: 'הקשר הוא RAM של המודל',
          content: 'כל מה שלא בחלון — לא קיים. "זכרון" בצ\'אט = היסטוריה שמוזרקת מחדש, לא זיכרון אנושי.',
          postType: 'single',
        },
        {
          title: 'lost in the middle',
          content: 'מידע באמצע ארוך נשכח סטטיסטית. תכנון RAG ו-prompt: מה שם בהתחלה ומה בסוף.',
          postType: 'explainer',
          tags: ['RAG'],
        },
        {
          title: 'כמה הקשר באמת צריך',
          content: 'שאלה: האם 128K הכרחי — או ש-8K ממוקד מספיק? עלות ≠ תמיד ערך.',
          postType: 'question',
        },
      ],
    },
    {
      name: 'Emergent abilities',
      posts: [
        {
          title: '"הופעה פתאומית" או מדידה?',
          content: 'יכולות שלא נראו במודל קטן — דיון אם זה phase transition או benchmark artifact. שני הצדדים מלמדים.',
          postType: 'explainer',
          tags: ['מתקדם'],
        },
        {
          title: 'scale חוקים אחרים',
          content: 'במודל גדול — in-context learning חזק יותר. לא קסם: יותר capacity לייצג משימות.',
          postType: 'single',
        },
      ],
    },
    {
      name: 'In-context learning',
      posts: [
        {
          title: 'דוגמאות ב-prompt = אימון בזמן ריצה',
          content: 'ללא עדכון משקלים — רק שינוי הקשר. זה מסביר few-shot ו-"תעשה כמו הדוגמה".',
          postType: 'explainer',
        },
        {
          title: 'למה סדר הדוגמאות משנה',
          content: 'המודל רגיש ל-permutation. בדיקות production צריכות לכלול shuffle.',
          postType: 'single',
          tags: ['production'],
        },
        {
          title: 'מתי few-shot עדיף על fine-tune',
          content: 'Thread: עלות, latency, drift, נישות. מטריצת החלטה למוצר.',
          postType: 'thread',
        },
      ],
    },
    {
      name: 'Hallucinations מבפנים',
      posts: [
        {
          title: 'הזיהוי הוא ברירת מחדל סטטיסטית',
          content: 'כשאין עוגן בקונטקסט — המודל ממלא חלק ריק בפלט plausible. לא באג — מטרה.',
          postType: 'explainer',
        },
        {
          title: 'confident tone ≠ truth',
          content: 'סגנון בטוח מגיע מאותה רשת שמייצרת שקרים. אל תשתמשו בטון כ-heuristic.',
          postType: 'hot_take',
        },
        {
          title: 'שלוש שכבות הגנה',
          content: 'RAG + citation + verifier model. אף אחת לא מספיקה לבד.',
          postType: 'single',
        },
      ],
    },
    {
      name: 'System prompt והתנהגות',
      posts: [
        {
          title: 'system = bias תפעולי',
          content: 'הוראות מערכת מכוונות התפלגות. לא "אישיות" — constraint על פלט.',
          postType: 'explainer',
        },
        {
          title: 'jailbreak פורץ constraint',
          content: 'לא "פריצה" — מציאת קונטקסט שמוריד משקל על כללי בטיחות. סוג של adversarial example.',
          postType: 'single',
          tags: ['אבטחה'],
        },
      ],
    },
  ],
}
