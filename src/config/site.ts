/** Public-facing contact info transcribed from ocamedical.com, reviewed 2026-11-14.
 * Check for changes before switching the live domain.
 */
export const site = {
  name: 'OCA Medical Group',
  tagline: 'Coordinated care. More ways forward.',
  description: 'Explore OCA Medical Group pain management, orthopedic surgery, and spine care services in Newport Beach, California.',
  phone: '(949) 374-5327',
  phoneHref: 'tel:+19493745327',
  email: 'info@ocamedical.com',
  emailHref: 'mailto:info@ocamedical.com',
  street: '4501 Birch St. Suite 101-A',
  city: 'Newport Beach',
  state: 'CA',
  zip: '92660',
  country: 'US',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=4501+Birch+St+Suite+101-A+Newport+Beach+CA+92660',
  // These are existing outbound forms observed on ocamedical.com. Before
  // launch the site owner must review the forms and PHI handling arrangements.
  bookingFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe2-vvRkaoH8y3efTuoBHY4y78UWMuIHcuTR4jI6ytbjjPlug/viewform',
  insuranceFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdGPdnt-YEYiXsHb_febuzrEhg8d6OvZP2fDjrMvir1eXFFfQ/viewform',
} as const;
// Header nav per the OCA Home site.pdf design (ABOUT CONDITIONS SERVICES
// PARTNERS BLOG). The Providers page stays reachable from the footer.
export const nav = [
  { text: 'About', href: '/about/' },
  { text: 'Conditions', href: '/conditions/' },
  { text: 'Services', href: '/services/' },
  { text: 'Partners', href: '/partners/' },
  { text: 'Blog', href: '/blog/' },
] as const;
export const footerNav = [...nav, { text: 'Providers', href: '/providers/' }] as const;
