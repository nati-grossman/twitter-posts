import type { SeedTopic } from '../types'

export const transformers: SeedTopic = {
  id: 'transformers',
  name: 'טרנספורמרים',
  description: 'ארכיטקטורת Attention, בלוקים, ומדוע היא שולטת ב-LLM — אינטואיטיבי אבל מדויק.',
  subtopics: [
    {
      name: 'רעיון Attention במשפט אחד',
      posts: [
        {
          title: 'Attention = מי רלוונטי עכשיו',
          content:
            'בכל צעד המודל מחליט אילו טוקנים "שווים" להסתכל עליהם. לא חיפוש בגוגל — שקלול דינמי של קונטקסט. זה מה שמחליף רקורסיה ארוכה ב-RNN.',
          postType: 'single',
        },
        {
          title: 'למה Q, K, V לא רק מתמטיקה',
          content:
            'Query: מה אני מחפש. Key: מה אני מציע. Value: מה אני מחזיר. האנלוגיה שבורה במקומות — אבל עוזרת לקרוא קוד ודיאגרמות.',
          postType: 'explainer',
        },
        {
          title: 'Thread: מ-RNN ל-Transformer ב-5 צעדים',
          content:
            'בottleneck של RNN → parallelization → self-attention → multi-head → stack of blocks. כל צעד פותר כאב אחד.',
          postType: 'thread',
        },
      ],
    },
    {
      name: 'Self-attention ומטריצות',
      posts: [
        {
          title: 'מטריצת Attention היא "מפת קשרים"',
          content:
            'שורות ועמודות = מי מקשיב למי. חם = קשר חזק. ויזואליזציה אחת שווה יותר מ-10 דקות נוסחאות.',
          postType: 'explainer',
        },
        {
          title: 'למה softmax על שורות',
          content:
            'כדי שהמשקלים יסתכמו ל-1 — התפלגות. בלי זה אין "התמקדות" יחסית, יש רק ציונים גולמיים.',
          postType: 'single',
        },
        {
          title: 'מה קורה כשהרצף ארוך',
          content:
            'מורכבות ריבועית ב-length קלאסית. זו הסיבה ל-RoPE, sliding window, sparse attention — לא "אופטימיזציה", שינוי אינדוקטיבי.',
          postType: 'explainer',
          tags: ['מתקדם'],
        },
      ],
    },
    {
      name: 'Multi-head attention',
      posts: [
        {
          title: 'כמה "סוגי קשב" במקביל',
          content:
            'כל head לומד לשים לב לדפוס אחר — תחביר מול סמנטיקה מול מרחק. כמו כמה עיניים על אותו פסקה.',
          postType: 'single',
        },
        {
          title: 'למה לא head אחד ענק',
          content:
            'פיצול מגדיל ייצוג ומפחית התנגשויות בין דפוסים. Hot take: יותר heads ≠ תמיד יותר טוב — יש נקודת רווי.',
          postType: 'hot_take',
        },
        {
          title: 'איך לקרוא heatmap של head',
          content:
            'Thread: דוגמאות בעברית — ניגודים, צמדי מילים, קישוריות רחוקה. מה מפתיע ומה צפוי.',
          postType: 'thread',
        },
      ],
    },
    {
      name: 'בלוק טרנספורמר',
      posts: [
        {
          title: 'Attention + FFN = צמד לא מקרי',
          content:
            'Attention מערבב מידע בין מיקומים. FFN מעבד כל מיקום בנפרד (עומק לא-לינארי). ביחד: תקשורת + חשיבה מקומית.',
          postType: 'explainer',
        },
        {
          title: 'Residual connections למה',
          content:
            'מאפשרות למידה עמוקה — הגרדיאנט לא נעלם. בלי skip, 96 שכבות היו חלום.',
          postType: 'single',
        },
        {
          title: 'LayerNorm לפני או אחרי',
          content:
            'Pre-LN יציב יותר באימון עמוק. פרט קטן שמסביר הרבה "למה האימון התפוצץ".',
          postType: 'explainer',
          tags: ['אימון'],
        },
      ],
    },
    {
      name: 'Positional encoding',
      posts: [
        {
          title: 'בלי מיקום — שק של מילים',
          content:
            'Attention סימטרי למיקום. צריך להזריק "איפה" — sinusoidal, learned, או RoPE.',
          postType: 'single',
        },
        {
          title: 'RoPE בקצרה אבל נכון',
          content:
            'מסובב embeddings כך שמרחק בטוקנים משתקף בזווית. יתרון: יחסיות טובה באורך ארוך. לא קסם — הנדסה.',
          postType: 'explainer',
        },
        {
          title: 'האם המודל "רואה" סדר',
          content:
            'שאלה: מה קורה כשמערבבים סדר מילים באמצע prompt? ניסוי מחשבתי שמלמד על inductive bias.',
          postType: 'question',
        },
      ],
    },
    {
      name: 'Encoder מול Decoder',
      posts: [
        {
          title: 'BERT רואה הכל — GPT רואה עבר',
          content:
            'Encoder: bidirectional. Decoder: causal mask. אותו בלוק, mask שונה → יכולות שונות.',
          postType: 'explainer',
        },
        {
          title: 'למה LLM הוא decoder-only',
          content:
            'Generation = חיזוי הבא. Mask מבטיח שלא "רואים את העתיד". Encoder-decoder עדיין חי ב-translation.',
          postType: 'single',
        },
        {
          title: 'T5 ומשפחה: מתי שני צדדים',
          content:
            'כשיש input ו-output מובחנים (summarize, translate). Hot take: לרוב היום prompt + decoder מספיק.',
          postType: 'hot_take',
        },
      ],
    },
    {
      name: 'למה Transformers ניצחו',
      posts: [
        {
          title: 'מקביליות = דאטה גדול',
          content:
            'GPU אוהב מטריצות. RNN סדרתי. זה לא רק טרנד — התאמה חומרה-אלגוריתם.',
          postType: 'single',
        },
        {
          title: 'אינדוקטיבי bias חלש = גמישות',
          content:
            'פחות הנחות מובנות → צריך יותר דאטה. כשיש אינטרנט — זה trade-off מנצח.',
          postType: 'explainer',
        },
        {
          title: 'המחיר: compute וזיכרון',
          content:
            'Thread: מה קנינו ומה שילמנו — latency, KV cache, אימון יקר. ארכיטקטורה מנצחת ≠ זולה.',
          postType: 'thread',
        },
      ],
    },
  ],
}
