/** Works with GitHub Pages project URLs and root/custom-domain URLs. */
export function pathTo(href: string): string {
  if (/^(?:[a-z]+:|#|\/\/)/i.test(href)) return href;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const path = href.startsWith('/') ? href : `/${href}`;
  return `${base}${path}`;
}
