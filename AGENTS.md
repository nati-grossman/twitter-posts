# AGENTS.md — twitter-posts

מדריך לסוכני AI שעובדים על הפרויקט: מפת מבנה, מודל תוכן, ותהליך הוספת מאמרים (פוסטים).

## מה הפרויקט

עורך פוסטים בעברית לטוויטר — React + Vite. התוכן נטען מ-**seed** בקוד, נשמר ב-**localStorage**, ומוצג בקטלוג כותרות ובעורך פוסט.

- **קטלוג** — רשימת כל הפוסטים לפי נושא
- **עורך** — עריכת כותרת וגוף, ספירת תווים, העתקה כשרשור טוויטר
- **סימון "פורסם בטוויטר"** — נשמר ב-localStorage ולא נמחק בסנכרון seed

```bash
npm run dev      # פיתוח — http://localhost:5173/
npm run build    # tsc + vite build (חובה אחרי שינוי seed)
```

---

## מפת מבנה

```
twitter-posts/
├── AGENTS.md                          ← המדריך הזה
├── .cursor/rules/                     ← כללי Cursor לתוכן seed
│   ├── seed-post-content.mdc          ייבוא מילה-במילה מהמשתמש
│   ├── seed-post-polish-social.mdc    שכתוב קול אנושי / voice polish
│   └── seed-post-expand-performance.mdc  הרחבת אורך (נושא ספציפי)
│
├── src/
│   ├── App.tsx                        ניתוב: קטלוג ↔ עורך
│   ├── storage.ts                     localStorage + סנכרון seed
│   ├── types.ts                       Topic, Post, AppData
│   │
│   ├── components/
│   │   ├── TitlesCatalog.tsx          קטלוג כותרות לפי נושא
│   │   ├── PostEditor.tsx             עורך + העתקת thread
│   │   └── Sidebar.tsx
│   │
│   ├── hooks/
│   │   └── useAppData.ts              CRUD לנושאים ופוסטים
│   │
│   ├── utils/
│   │   ├── twitterThread.ts           פיצול לציוצים + 👇 בין ציוצים
│   │   └── series.ts
│   │
│   └── data/seed/
│       ├── buildSeedData.ts           SEED_VERSION, buildSeedData(), sync
│       ├── types.ts                   SeedTopic, SeedSubtopic, SeedPost
│       │
│       ├── topics/                    ← נושאים ראשיים (26 נושאים)
│       │   ├── index.ts               SEED_TOPICS — רשימה מסודרת
│       │   ├── tech-foundations.ts    דוגמה: מחבר 10 סדרות
│       │   └── ai-basics.ts           דוגמה: מחבר תיקיית series/
│       │
│       └── series/                    ← תוכן הפוסטים בפועל
│           ├── helpers.ts             seriesPost() — בונה כותרת + גוף
│           ├── s01-internet.ts …      יסודות (10 סדרות בשורש)
│           ├── ai-basics/             תיקייה לנושא (10 קבצים × 10 פוסטים)
│           ├── browser/
│           └── …                      (25 תיקיות נוספות)
│
└── scripts/
    └── _count-folder.py               בדיקת אורך תווים לפי תיקייה
```

### היררכיית תוכן

```
נושא (Topic)           tech-foundations, ai-basics, browser, …
  └── סדרה (Subtopic)  "מה זה בכלל אינטרנט?" — 10 פוסטים
        └── פוסט       כותרת: "שם סדרה (3/10) — כותרת משנה"
                       גוף: טקסט לטוויטר
```

**סה"כ:** 26 נושאים × 10 סדרות × 10 פוסטים ≈ **2,600 פוסטים**.

### נושאים פעילים (`SEED_TOPICS`)

| id | שם | תיקיית series |
|----|-----|----------------|
| `tech-foundations` | יסודות | `series/s01-*.ts` … `s10-*.ts` (שורש) |
| `internet-infrastructure` | תשתית אינטרנט | `infra/` |
| `browser-websites` | דפדפן ואתרים | `browser/` |
| `communication-security` | תקשורת ואבטחה | `security/` |
| `traffic-speed` | תעבורה ומהירות | `traffic/` |
| `system-performance` | ביצועים | `performance/` |
| `scale-internet` | סקייל | `scale/` |
| `security-defense` | הגנה | `defense/` |
| `web-building` | בניית אתרים | `building/` |
| `how-apps-work` | איך אפליקציות עובדות | `apps/` |
| `digital-data` | דאטה | `data/` |
| `future-internet` | עתיד האינטרנט | `future/` |
| `systems-learn-you` | מערכות שלומדות אותך | `personalization/` |
| `deep-infrastructure` | תשתית עמוקה | `deep-infra/` |
| `global-internet` | אינטרנט גלובלי | `global/` |
| `realtime-systems` | מערכות בזמן אמת | `realtime/` |
| `ai-basics` | יסודות AI | `ai-basics/` |
| `how-models-learn` | איך מודל לומד | `model-learn/` |
| `how-llms-work` | איך LLM עובד | `llm-work/` |
| `deep-learning` | למידה עמוקה | `deep-ml/` |
| `llm-chatgpt` | LLM ו-ChatGPT | `llm-chat/` |
| `transformers-deep` | טרנספורמרים לעומק | `xfm-deep/` |
| `ai-problems-limits` | בעיות ומגבלות AI | `ai-limits/` |
| `ai-real-systems` | AI במערכות אמיתיות | `ai-prod/` |
| `ai-advanced-future` | עתיד AI | `ai-future/` |
| `real-world-training` | אימון בעולם האמיתי | `train-real/` |

---

## מודל פוסט בקוד

### `seriesPost()` — הדרך הסטנדרטית

```typescript
import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'שם הסדרה המלא'

export const mySeries: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'כותרת משנה', `פסקה ראשונה...

פסקה שנייה — שורה ריקה ביניהן = גבול ציוץ בשרשור.`),
    // … עד 10
  ],
}
```

**מה `seriesPost` יוצר:**
- כותרת: `שם סדרה (N/10) — כותרת משנה`
- `postType: 'explainer'`
- `tags: ['N/10', 'סדרה']`

### יעדי אורך (voice polish מאושר)

| רכיב | טווח |
|------|------|
| גוף פוסט | **420–520** תווים |
| פסקה בודדת | ~180–250 תווים (≈ ציוץ אחד) |
| מבנה | 2–4 פסקאות, מופרדות בשורה ריקה |

פיצול לשרשור: `src/utils/twitterThread.ts` — יעד רך 220 תווים, תקרה 280.

---

## תהליך הוספת מאמר (פוסט)

### A. ייבוא תוכן חדש מהמשתמש (10 פוסטים לסדרה)

**Rule:** `.cursor/rules/seed-post-content.mdc` (always apply)

1. המשתמש שולח תוכן בפורמט:
   ```
   ## שם סדרה (1/10) — כותרת משנה
   גוף הפוסט...
   ```
2. מצא את קובץ הסדרה ב-`src/data/seed/series/`
3. עדכן עם `seriesPost(part, SERIES, 'כותרת משנה', \`גוף\`)`
   - **גוף בלבד** — בלי שורת `##`
   - שמור ירידות שורה, bullets, גרשיים **מילה במילה**
4. העלה `SEED_VERSION` ב-`buildSeedData.ts` (+1)
5. הרץ `npm run build`
6. דווח טבלת תווים לכל 10 הפוסטים

**אסור:** לסכם, לקצר, לשפר ניסוח, להוסיף bold.

---

### B. שכתוב קול אנושי (voice polish)

**Rule:** `.cursor/rules/seed-post-polish-social.mdc` (רק לפי בקשה מפורשת)

- משנה **סגנון וקול** — לא רעיונות
- שומר כותרות משנה, `SERIES`, עובדות
- בסיום משימה: `SEED_VERSION` +1, `npm run build`

---

### C. הוספת סדרה חדשה לנושא קיים

1. צור `src/data/seed/series/<folder>/sNN-topic.ts` (10 פוסטים)
2. ייצא ב-`series/<folder>/index.ts`
3. הוסף import + ל-`subtopics` בקובץ `topics/<topic>.ts`
4. `SEED_VERSION` +1, build

---

### D. הוספת נושא (Topic) חדש לספרייה

1. צור תיקיית `series/<new-folder>/` עם 10 קבצים (100 פוסטים) **או** 10 קבצים בשורש `series/` (כמו יסודות)
2. צור `topics/<new-topic>.ts` עם `SeedTopic` (id, name, description, subtopics)
3. הוסף ל-`topics/index.ts` → `SEED_TOPICS`
4. הוסף ל-`mergeLibraryUpdatesIfMissing()` ב-`buildSeedData.ts` (כדי שלא יימחק מ-localStorage)
5. `SEED_VERSION` +1, build

---

## סנכרון seed ↔ localStorage

| מנגנון | קובץ | תפקיד |
|--------|------|--------|
| `SEED_VERSION` | `buildSeedData.ts` | גרסת תוכן — שינוי מפעיל סנכרון |
| `syncSeedContentUpdates()` | `buildSeedData.ts` | מעדכן גוף/כותרת לפי seed (שומר `postedToTwitter`) |
| `mergeLibraryUpdatesIfMissing()` | `buildSeedData.ts` | מוסיף נושאים חדשים בלי למחוק קיים |
| `loadData()` | `storage.ts` | טעינה + מיזוג + שמירה |

**חשוב:** אחרי כל שינוי תוכן seed — **תמיד** העלה `SEED_VERSION` (+1) והרץ build.

---

## בדיקות שימושיות

```bash
# אורך תווים לכל קובץ בתיקייה
python scripts/_count-folder.py src/data/seed/series/ai-basics

# build מלא
npm run build
```

---

## כללים לסוכן

### כן
- עבוד על קבצי `src/data/seed/series/` ישירות
- שמור `SERIES`, exports, מספרי חלק, כותרות משנה
- פסקאות עם שורה ריקה ביניהן (לפיצול thread)
- commit רק כשהמשתמש מבקש

### לא
- לא לכלול קבצי `.tmp-*` ב-commit
- לא לשנות תוכן מיובא מילה-במילה (rule אחר)
- לא לדלג על פוסטים בסדרה
- לא bold / markdown שלא היה במקור
- לא `git push --force` ל-main

---

## קבצים מרכזיים — עזר מהיר

| משימה | קובץ |
|-------|------|
| גרסת seed | `src/data/seed/buildSeedData.ts` |
| רשימת נושאים | `src/data/seed/topics/index.ts` |
| בניית כותרת פוסט | `src/data/seed/series/helpers.ts` |
| פיצול לטוויטר | `src/utils/twitterThread.ts` |
| עורך + העתקה | `src/components/PostEditor.tsx` |
| ייבוא תוכן | `.cursor/rules/seed-post-content.mdc` |
| voice polish | `.cursor/rules/seed-post-polish-social.mdc` |
