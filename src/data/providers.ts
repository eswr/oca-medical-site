export type Provider = { slug: string; name: string; title: string; initials: string; bio: string; focus: string[]; source: string };
export const providers: Provider[] = [
  { slug: 'adam-weitzman', name: 'Adam Weitzman, MD', title: 'Pain Management & Anesthesiology', initials: 'AW',
    bio: 'Dr. Weitzman focuses on interventional pain management and coordinated approaches to acute and chronic pain. His profile on the existing OCA website describes anesthesiology and pain-management training.',
    focus: ['Interventional pain care', 'Image-guided injections', 'Rehabilitation coordination'],
    source: 'https://ocamedical.com/meet-the-doctors/dr-adam-weitzman/' },
  { slug: 'steve-mora', name: 'Steve Mora, MD', title: 'Orthopedic Surgery', initials: 'SM',
    bio: 'Dr. Mora is listed in OCA’s physician directory and orthopedic surgery content. His published focus includes sports injuries, arthroscopy, and nonsurgical treatment when appropriate.',
    focus: ['Knee and shoulder conditions', 'Sports injuries', 'Orthopedic procedures'],
    source: 'https://ocamedical.com/orthopedic-surgery/' },
  { slug: 'pranay-patel', name: 'Pranay Patel, MD', title: 'Orthopedic Spine Surgery', initials: 'PP',
    bio: 'Dr. Patel is featured on OCA’s existing provider pages for minimally invasive spine surgery and spine-related care.',
    focus: ['Spine evaluation', 'Surgical spine care', 'Minimally invasive approaches'],
    source: 'https://ocamedical.com/meet-the-doctors/dr-pranay-patel/' },
];
