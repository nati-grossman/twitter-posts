import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה JSON?'

export const buildingJson: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'פורמט טקסט', `JSON הוא פורמט טקסט פשוט להעברת מידע בין מערכות:

\`\`\`text
JSON = JavaScript Object Notation
\`\`\`

אבל בפועל הוא משמש כמעט בכל שפה, לא רק JavaScript.`),
    seriesPost(2, SERIES, 'מבנה', `JSON בנוי מ־מפתחות וערכים:

\`\`\`json
{
  "name": "Avi",
  "age": 30
}
\`\`\`

יש:

• אובייקטים \`{ }\`
• מערכים \`[ ]\`
• מחרוזות, מספרים, בוליאנים, null`),
    seriesPost(3, SERIES, 'למה לא HTML', `HTML מיועד להצגה:

\`\`\`text
דף אינטרנט
\`\`\`

JSON מיועד לנתונים:

\`\`\`text
Data transfer
\`\`\`

כלומר:

> HTML = איך זה נראה
> JSON = מה המידע עצמו`),
    seriesPost(4, SERIES, 'ב-API', `JSON הוא הסטנדרט של APIs:

\`\`\`text
Frontend → Request → Backend
Backend → JSON Response → Frontend
\`\`\`

דוגמה:

\`\`\`json
{ "status": "ok", "data": [1, 2, 3] }
\`\`\``),
    seriesPost(5, SERIES, 'parse ו-stringify', `ב-JavaScript:

### מ-JSON לטקסט:

\`\`\`js
JSON.stringify(obj)
\`\`\`

### מטקסט לאובייקט:

\`\`\`js
JSON.parse(text)
\`\`\``),
    seriesPost(6, SERIES, 'שגיאות נפוצות', `JSON מאוד קשוח:

❌ לא חוקי:

\`\`\`json
{ name: "Avi" }
\`\`\`

✔ חוקי:

\`\`\`json
{ "name": "Avi" }
\`\`\`

חובה:

• מרכאות על מפתחות
• אין פונקציות
• אין comments`),
    seriesPost(7, SERIES, 'XML ישן', `לפני JSON היה XML:

\`\`\`xml
<user>
  <name>Avi</name>
</user>
\`\`\`

בעיות:

• כבד יותר
• קשה לקרוא
• יותר verbose

לכן JSON החליף אותו ברוב השימושים.`),
    seriesPost(8, SERIES, 'YAML, protobuf', `יש עוד פורמטים:

### YAML (קריא לאדם):

\`\`\`yaml
name: Avi
age: 30
\`\`\`

### Protobuf (מהיר ודחוס):

• משמש ב-GRPC
• לא קריא לבני אדם`),
    seriesPost(9, SERIES, 'גודל', `JSON הוא:

• קל לקריאה
• אבל לא הכי קטן

במערכות גדולות משתמשים לעיתים ב:

• gzip
• protobuf
• msgpack

כדי לחסוך רוחב פס.`),
    seriesPost(10, SERIES, 'סיכום', `\`\`\`text
JSON = פורמט פשוט להעברת נתונים בין מערכות
\`\`\`

הוא משמש כמעט בכל מקום באינטרנט:

\`\`\`text
API → JSON → Frontend/Backend
\`\`\`

במילים פשוטות:

> JSON הוא הדרך הסטנדרטית שבה מערכות באינטרנט "מדברות נתונים" אחת עם השנייה בצורה פשוטה, קלה וקריאה.`),
  ],
}
