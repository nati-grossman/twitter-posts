import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'מה זה Kubernetes (ניהול מערכות בקנה מידה)?'

export const deepInfraKubernetes: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'הבעיה שפתר', `100 containers — **איפה רץ?** **נפל?** **עוד עותק?** — ידנית — **בלתי אפשרי**.

**K8s** — **מנצח תזמורת**.`),
    seriesPost(2, SERIES, 'Cluster', `**Control plane** — מוח. **Nodes** — workers — מריצים **Pods**.`),
    seriesPost(3, SERIES, 'Pod', `יחידה קטנה — אחד או כמה containers **יחד** — רשת משותפת — **חיים ומתים** יחד.`),
    seriesPost(4, SERIES, 'Deployment', `רוצה 5 עותקים של האפליקציה — **מגדיר** — K8s **שומר** — נפל? **מחליף**.`),
    seriesPost(5, SERIES, 'Service ו-Ingress', `Pods משתנים — **Service** — IP יציב — **Ingress** — כניסה מ-HTTPS מבחוץ.`),
    seriesPost(6, SERIES, 'ConfigMap Secret', `הגדרות וסודות — **לא** בתוך image — **מוזרקים** — rotate בלי build חדש.`),
    seriesPost(7, SERIES, 'לא חובה לכולם', `סטארטאפ קטן — **PaaS** מספיק — K8s — **מורכבות** — כשיש **צוות DevOps**.`),
    seriesPost(8, SERIES, 'Managed K8s', `EKS, GKE, AKS — **הספק** מפעיל control plane — אתה **Nodes + YAML**.`),
    seriesPost(9, SERIES, 'Helm', `חבילות מוכנות — **תבניות** — התקנת monitoring, DB — **שוק**.`),
    seriesPost(10, SERIES, 'סיכום', `**Kubernetes = אורקסטרציה של containers בקנה מידה — רצוי, מת, scale.**

לא “ענן” — **כלי** שרץ **בענן** (או on-prem).`),
  ],
}
