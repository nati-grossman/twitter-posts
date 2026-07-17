import type { SeedTopic } from '../types'
import {
  dataWhatIsData,
  dataBits,
  dataFile,
  dataFormats,
  dataBillions,
  dataSql,
  dataNosql,
  dataSearchBig,
  dataPipeline,
  dataMovement,
} from '../series/data'

export const digitalData: SeedTopic = {
  id: 'digital-data',
  name: 'דאטה (נתונים) בעולם הדיגיטלי',
  description: `ביטים, קבצים, פורמטים, SQL, NoSQL, חיפוש, pipeline ותנועה בין מערכות — 10 סדרות × 10 פוסטים.`,
  subtopics: [
    dataWhatIsData,
    dataBits,
    dataFile,
    dataFormats,
    dataBillions,
    dataSql,
    dataNosql,
    dataSearchBig,
    dataPipeline,
    dataMovement,
  ],
}
