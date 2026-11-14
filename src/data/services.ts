export type Service = {
  slug: string;
  label: string;
  short: string;
  intro: string;
  whatToExpect: string[];
  options: string[];
  icon: 'spine' | 'bone' | 'heart';
};
export const services: Service[] = [
  {
    slug: 'pain-management', label: 'Interventional Pain Care', icon: 'spine',
    short: 'Options for persistent pain when conservative approaches need additional support.',
    intro: 'OCA describes a treatment philosophy that combines rehabilitation with targeted pain-management procedures when clinically appropriate. A clinician evaluates your symptoms and discusses the available options.',
    whatToExpect: ['Review of symptoms, medical history, and prior treatments', 'Examination and review of available imaging', 'Discussion of nonsurgical and procedural options when appropriate'],
    options: ['Image-guided injections', 'Trigger-point and joint injections', 'Epidural and facet procedures', 'Radiofrequency ablation'],
  },
  {
    slug: 'orthopedic-care', label: 'Orthopedic Care', icon: 'bone',
    short: 'Evaluation and treatment options for joint, bone, tendon, and sports-related conditions.',
    intro: 'OCA highlights accurate diagnosis, a preference for appropriate conservative management, and minimally invasive orthopedic techniques when surgery is indicated.',
    whatToExpect: ['Assessment of affected joints and mobility', 'Review of nonsurgical treatment approaches', 'Discussion of surgical pathways when clinically indicated'],
    options: ['Shoulder and knee care', 'Hip and elbow evaluation', 'Sports-related injuries', 'Arthroscopic procedures when indicated'],
  },
  {
    slug: 'spine-care', label: 'Spine Care', icon: 'spine',
    short: 'A staged approach to spine concerns, considering conservative, interventional, and surgical care.',
    intro: 'OCA describes conservative care first, pain-management procedures when appropriate, and consideration of spine surgery for selected patients. Your clinician will discuss risks, expected benefits, and alternatives.',
    whatToExpect: ['History and focused examination', 'Imaging review when indicated', 'An individualized conversation about treatment options'],
    options: ['Evaluation of neck and back symptoms', 'Nonsurgical spine treatment planning', 'Minimally invasive spine procedures when indicated', 'Postoperative rehabilitation coordination'],
  },
];
