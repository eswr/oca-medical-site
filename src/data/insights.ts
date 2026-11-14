export type Insight = {slug: string; title: string; category: string; description: string; paragraphs: string[]; bullets: string[]};
export const insights: Insight[] = [
 {slug: 'conservative-to-interventional-care', title: 'Understanding Your Options for Pain Care', category:'Patient guide',description:'How conservative care, pain-management techniques, and specialist evaluation may fit together.', paragraphs:[
 'Pain care is rarely one-size-fits-all. Your symptoms, examination findings, past treatments, and goals help determine the next step.',
 'OCA Medical Group describes a coordinated approach that considers conservative management and interventional procedures when indicated. A specialist can discuss potential benefits and risks before you decide.',
 ],bullets:['Bring prior imaging and a list of treatments you have tried.','Ask how each option fits with rehabilitation.','Discuss risks, expected benefits, and alternatives.']},
 {slug:'questions-about-orthopedic-evaluation',title:'Preparing for an Orthopedic Visit',category:'Patient guide',description:'Practical information to help you prepare for your orthopedic consultation.',paragraphs:[
 'An orthopedic visit usually begins with a discussion of your symptoms, activities, injuries, and goals. The clinician may review examinations or imaging you already have.',
 'Your provider can explain whether conservative care is appropriate and when procedural or surgical options might be considered.'
 ],bullets:['List when symptoms started and what makes them better or worse.','Bring medication details and past imaging reports.','Ask about recovery timelines and rehabilitation expectations.']},
 {slug:'spine-care-pathways',title:'A Stepwise Approach to Spine Care',category:'Patient guide',description:'An overview of care pathways for common neck and back concerns.',paragraphs:[
 'Spine symptoms can affect mobility, work, sleep, and daily routines. Identifying the cause matters more than choosing a procedure before an examination.',
 'The existing OCA website describes beginning with conservative treatment when appropriate, considering pain-management options next, and reserving surgical discussions for selected situations.'
 ],bullets:['Request an individualized assessment.','Ask what symptoms should prompt urgent medical review.','Understand the role and limits of imaging.']},
];
