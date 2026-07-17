import type { SeedSubtopic } from '../../types'
import { seriesPost } from '../helpers'

const SERIES = 'איך שיחות וידאו מתבצעות (Zoom / Meet)?'

export const realtimeVideoCalls: SeedSubtopic = {
  name: SERIES,
  posts: [
    seriesPost(1, SERIES, 'לא וידאו אחד ענק', `מצלמה → **דחיסה** (H.264, VP9) → **חבילות UDP** — **לא** העלאת קובץ.`),
    seriesPost(2, SERIES, 'WebRTC', `דפדפן/אפליקציה — **P2P** או דרך **SFU** — **זמן אמת** — latency נמוך.`),
    seriesPost(3, SERIES, 'SFU מול MCU', `**SFU** — כל אחד שולח לשרת — שרת **מפיץ** — Zoom — **לא** מערבב וידאו אחד (לרוב).`),
    seriesPost(4, SERIES, 'Signaling', `לפני וידאו — **SDP, ICE** — “איפה אתה ברשת?” — **שרת signaling** — לא המדיה עצמה.`),
    seriesPost(5, SERIES, 'NAT traversal', `מאחורי router — **STUN/TURN** — **חור** או **relay** — TURN **יקר** — bandwidth.`),
    seriesPost(6, SERIES, 'איכות דינמית', `רשת גרועה — **פחות רזולוציה** — **packet loss concealment** — **לא** קפיאה מיד.`),
    seriesPost(7, SERIES, '100 משתתפים', `רובם **mute video** — רק **דוברים** ב-SFU — **bandwidth** מנוהל.`),
    seriesPost(8, SERIES, 'Recording', `שירות **מקליט** בצד שרת — **נפרד** מזרם החי — **אחסון** ענן.`),
    seriesPost(9, SERIES, 'אבטחה', `הצפנה ב-transit — **מפתחות** לפגישה — **waiting room** — **לא** קישור ציבורי.`),
    seriesPost(10, SERIES, 'סיכום', `**וידאו שיחה = דחיסה + WebRTC + SFU + signaling + התאמה לרשת.**

Meet/Zoom = **תשתית מדיה** — לא “טלפון עם וידאו”.`),
  ],
}
