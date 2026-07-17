import type { SeedTopic } from '../types'

export const aiFoundations: SeedTopic = {
  id: 'ai-foundations',
  name: 'יסודות AI',
  description:
    'איך בינה מלאכותית באמת עובדת — לא ככלי, אלא כתחום: ייצוגים, למידה, הכללה, ומגבלות. בסיס לכל שאר התוכן.',
  subtopics: [
    {
      name: 'מה זה AI בלי ChatGPT',
      posts: [
        {
          title: 'AI ≠ בוט שמדבר יפה',
          content:
            'רוב האנשים מזהים AI עם ממשק צ\'אט. בפועל AI הוא משפחה של שיטות שמחפשות דפוסים בנתונים ומייצרות החלטות תחת אי-ודאות. הצ\'אט הוא רק שכבת מוצר אחת.',
          postType: 'hot_take',
          tags: ['מיצוב'],
        },
        {
          title: 'למה "בינה" זו מטאפורה מסוכנת',
          content:
            'המילה "בינה" גורמת לנו לייחס כוונה, הבנה וערכים. מודל לא "מבין" — הוא ממפה התפלגויות. ההבחנה הזו לא אקדמית: היא משנה איך בונים מוצרים ואיך בודקים כשלים.',
          postType: 'explainer',
        },
        {
          title: 'שלוש שכבות: נתונים → ייצוג → החלטה',
          content:
            'Thread: (1) נתונים גולמיים, (2) ייצוג שמדחוס מבנה, (3) פונקציה שמוציאה פלט. כל רכיב ב-AI מודרני — מ-CNN ועד LLM — הוא וריאציה על השלישייה הזו.',
          postType: 'thread',
        },
        {
          title: 'איזו שאלה AI באמת פותר?',
          content:
            'שאלה לקהל: כשאתם אומרים "המודל פתר את הבעיה" — האם התכוונתם לזיהוי דפוס, לייצור טקסט שמספק, או לאופטימיזציה של מטרה עסקית? שלושת אלה לא אותו דבר.',
          postType: 'question',
        },
      ],
    },
    {
      name: 'למידה סטטיסטית מול סמלית',
      posts: [
        {
          title: 'המעבר מ-Symbolic ל-Statistical לא היה אקראי',
          content:
            'בשנות ה-80–90 ניסו לקודד ידע ככללים. נכשלו בקנה מידה. Statistical ML אמר: נלמד את הכללים מהנתונים. היום ה-LLM הוא הקיצון של אותו עיקרון — פחות ידע מובנה, יותר דפוס.',
          postType: 'explainer',
        },
        {
          title: 'למה "המודל למד עובדה" זו ניסוח מטעה',
          content:
            'מודל לא מאחסן עובדות כמו DB. הוא מעדכן פרמטרים שמטים לקונטקסטים סטטיסטיים. כשהוא "יודע" את בירת צרפת — זו התנהגות דפוס, לא רשומה.',
          postType: 'single',
          tags: ['עומק'],
        },
        {
          title: 'מתי כללים עדיין מנצחים',
          content:
            'במערכות עם דטרמיניזם חוקי (בנקאות, רפואה מסוימת), שילוב rules + ML לעיתים עדיף ל-end-to-end. Hot take: הרדיפה ל"הכל נוורלי" היא גם היפוך, לא רק התקדמות.',
          postType: 'hot_take',
        },
        {
          title: 'דוגמה אחת: spam filter',
          content:
            'Thread: איך פילטר ספאם לימד אותנו את כל ה-AI המודרני — פיצ\'רים, loss, overfitting, deployment. הסיפור הישן עדיין הכי ברור להסביר למי שלא ממדעני נתונים.',
          postType: 'thread',
        },
      ],
    },
    {
      name: 'ייצוגים ודחיסת מידע',
      posts: [
        {
          title: 'Embedding הוא לא "משמעות"',
          content:
            'וקטור הוא קואורדינטה במרחב שבו קרבה = דמיון סטטיסטי בשימוש. לא בהכרח דמיון אנושי. זה מסביר למה RAG ו-clustering עובדים — וגם למה הם נשברים.',
          postType: 'explainer',
        },
        {
          title: 'למה דחיסה היא לב המשחק',
          content:
            'כל מודל מצליח כשהוא מוצא ייצוג שמאפשר לחזות את המטרה עם פחות מידע מיותר. כשל = ייצוג שלא שומר על מה שחשוב למשימה.',
          postType: 'single',
        },
        {
          title: 'PCA לעומת learned representations',
          content:
            'PCA: דחיסה לינארית עם הנחות. Neural net: דחיסה לא-לינארית מונחית משימה. ההבדל מסביר למה LLM embeddings שונים מ-LDA או TF-IDF.',
          postType: 'explainer',
          tags: ['מתקדם'],
        },
      ],
    },
    {
      name: 'הכללה ופער אופטימיזציה',
      posts: [
        {
          title: 'train ≠ world',
          content:
            'המודל מותאם לסביבת האימון (הפילוח הסטטיסטי של הדאטה). העולם האמיתי הוא distribution shift מתמיד. Deployment הוא לא "העלאה" — זה מעבר לדומיין אחר.',
          postType: 'single',
          tags: ['production'],
        },
        {
          title: 'למה accuracy במבחן משקרת',
          content:
            'מדדים על test set מניחים שהעתיד דומה לעבר. ב-LLM: benchmark חדש ≠ שימוש אמיתי. שאלה: איזה מטריצת כשל אתם בודקים לפני launch?',
          postType: 'question',
        },
        {
          title: 'OOD: כשהמודל "לא יודע שהוא לא יודע"',
          content:
            'Out-of-distribution: קלט שלא דומה לאימון. LLM עדיין מייצר טקסט בטוח. זו הסיבה שצריך calibration, לא רק loss נמוך.',
          postType: 'explainer',
        },
        {
          title: 'regularization בלי נוסחאות',
          content:
            'Thread: dropout, weight decay, early stopping — שלוש דרכים לאותו רעיון: אל תיתן למודל להתאים לרעש. איך זה מתורגם ל-prompting ול-RLHF?',
          postType: 'thread',
        },
      ],
    },
    {
      name: 'bias, variance, ואיזון',
      posts: [
        {
          title: 'underfitting נראה כמו "מודל טיפש"',
          content:
            'כשהמודל פשוט מדי — גם על train. אצל LLM: מודל קטן מדי או context קצר מדי יכול להיראות כ"לא מבין" למרות שזו קיבולת.',
          postType: 'single',
        },
        {
          title: 'overfitting ב-LLM: memorization',
          content:
            'LLM יכול לשנן דוגמאות אימון. זה לא רק בעיית פרטיות — זה מקלקל הכללה. שאלת ביקורת: האם התשובה שלך נשענת על דפוס או על ציטוט?',
          postType: 'question',
          tags: ['אתיקה'],
        },
        {
          title: 'המסחר האמיתי: capacity מול data',
          content:
            'יותר פרמטרים דורשים יותר נתונים או יותר inductive bias. הסיבה ש-GPT-4 לא "פשוט scale של GPT-2" — data curation, objectives, ואינפרה.',
          postType: 'explainer',
        },
      ],
    },
    {
      name: 'אבולוציה של השדה (לא חדשות)',
      posts: [
        {
          title: 'מפרספטרון ל-Attention: קו אחד',
          content:
            'Thread: Perceptron → backprop → CNN → RNN → Transformer. לא "מהפכות" אלא הצטברות: ייצוג טוב יותר + חישוב זול יותר + דאטה גדול יותר.',
          postType: 'thread',
        },
        {
          title: 'AI winters היו תיקון שוק',
          content:
            'הבועות נשברו כשהבטחות לא עמדו בעלות. היום הסיכון הפוך: הציפייה נמוכה מהיכולת בחלק מהמשימות, וגבוהה מדי באחרות.',
          postType: 'hot_take',
        },
        {
          title: 'למה "foundation model" שינה את השפה',
          content:
            'מודל אחד מאומן על הרבה משימות → fine-tune קטן. זה היפך מ-100 מודלים נישתיים. המשמעות לצוותי מוצר: פחות אימון מקומי, יותר orchestration.',
          postType: 'explainer',
        },
      ],
    },
    {
      name: 'מגבלות ידע ואי-ודאות',
      posts: [
        {
          title: 'המודל לא יודע — הוא מעריך',
          content:
            'כל פלט הוא דגימה מהתפלגות. "ביטחון" בטקסט חלק הוא ארטיפקט של סגנון, לא probability אמיתית (אלא אם מכיילים).',
          postType: 'explainer',
        },
        {
          title: 'epistemic vs aleatoric',
          content:
            'אי-ודאות מהדאטה (רעש) לעומת מהמודל (חסר ידע). ב-LLM שני הסוגים נראים אותו דבר בממשק — אבל הפתרון שונה.',
          postType: 'single',
          tags: ['מתקדם'],
        },
        {
          title: 'מתי abstain עדיף על תשובה',
          content:
            'מערכות production טובות יודעות לא לענות. שאלה: האם המוצר שלכם מעודד "תמיד תענה" או "תגיד לא יודע"?',
          postType: 'question',
        },
        {
          title: 'calibration בלי מתמטיקה כבדה',
          content:
            'Thread: temperature, ensembles, conformal — שלוש דרכים לגרום ל"אני לא בטוח" להיות אמין. קריטי לרפואה, משפטים, פיננסים.',
          postType: 'thread',
        },
      ],
    },
  ],
}
