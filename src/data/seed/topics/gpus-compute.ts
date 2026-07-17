import type { SeedTopic } from '../types'

export const gpusCompute: SeedTopic = {
  id: 'gpus-compute',
  name: 'GPU וחישוב',
  description: 'חומרה, זיכרון, ומה שמגביל אימון ו-inference — אינטואיציה למהנדסים ומוצר.',
  subtopics: [
    {
      name: 'למה GPU',
      posts: [
        {
          title: 'מטריצות במקביל',
          content: 'CPU מצוין לסדרתי. GPU ל-algebra דצימית ענקית. Neural nets = כמעט רק זה.',
          postType: 'single',
        },
        {
          title: 'CUDA זה לא "דרייבר"',
          content: 'אקוסיסטם: kernels, memory model, streams. הבנה שטחית = ביצועים גרועים.',
          postType: 'explainer',
        },
      ],
    },
    {
      name: 'VRAM וזיכרון',
      posts: [
        {
          title: 'למה המודל לא נכנס',
          content: 'משקלים + activations + optimizer states + KV cache. ארבעה רכיבים, לא אחד.',
          postType: 'explainer',
        },
        {
          title: 'quantization בקצרה',
          content: 'INT8/FP8: פחות ביטים, פחות VRAM, לפעמים אותה איכות. trade-off מודרך.',
          postType: 'single',
        },
        {
          title: 'שאלה: כמה VRAM באמת צריך',
          content: 'למפתחים: האם 24GB מספיק ל-7B fine-tune עם LoRA? תלוי batch, seq len, dtype.',
          postType: 'question',
        },
      ],
    },
    {
      name: 'FLOPs ו-throughput',
      posts: [
        {
          title: 'tokens/sec ≠ איכות',
          content: 'מדד תפעולי. מוצר טוב בוחר מודל+quantize+batch שמכסה SLA.',
          postType: 'hot_take',
        },
        {
          title: 'roofline אינטואיטיבי',
          content: 'memory-bound מול compute-bound. למה לפעמים GPU ריק אבל איטי.',
          postType: 'explainer',
          tags: ['מתקדם'],
        },
      ],
    },
    {
      name: 'אימון מול inference',
      posts: [
        {
          title: 'אימון: כל הדאטה יחד',
          content: 'backward pass, gradients — יקר. inference: רק forward, עם cache חכם.',
          postType: 'single',
        },
        {
          title: 'למה inference זול יחסית לטוקן',
          content: 'אבל לא לריצה ראשונה. economics שונה לחלוטין מ-training cluster.',
          postType: 'explainer',
        },
      ],
    },
    {
      name: 'חומרה מעבר ל-NVIDIA',
      posts: [
        {
          title: 'TPU, Trainium, MI300',
          content: 'כל ספק מייעל graph אחר. lock-in אמיתי — לא רק מחיר.',
          postType: 'explainer',
        },
        {
          title: 'NVIDIA dominance למה',
          content: 'CUDA + ecosystem + networking (NVLink). Hot take: תחרות קיימת אבל מעבר איטי.',
          postType: 'hot_take',
        },
      ],
    },
    {
      name: 'רשתות ו-clusters',
      posts: [
        {
          title: 'all-reduce הוא צוואר הבקבוק',
          content: 'distributed training = סנכרון gradients. רוחב פס בין nodes קובע scale.',
          postType: 'explainer',
          tags: ['scaling'],
        },
        {
          title: 'Thread: מ-1 GPU ל-1000',
          content: 'data parallel → tensor parallel → pipeline parallel. מתי כל אחד.',
          postType: 'thread',
        },
      ],
    },
    {
      name: 'אנרגיה ועלות',
      posts: [
        {
          title: 'דאטה-סנטר כעלות סמויה',
          content: 'אימון גדול = חשמל + קירור. לא רק שעות GPU.',
          postType: 'single',
        },
        {
          title: 'האם קטן יותר ירוק',
          content: 'מודל ממוזר לעיתים מספיק. שאלת עיצוב, לא רק מוסר.',
          postType: 'question',
        },
      ],
    },
  ],
}
