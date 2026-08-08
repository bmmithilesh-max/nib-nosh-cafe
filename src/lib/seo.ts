import { useEffect } from 'react';

export const SITE_URL = 'https://nibandnoshcafe.com';

export function usePageMeta(title: string, description: string, path = '/') {
  useEffect(() => {
    if (document.title !== title) {
      document.title = title;
    }
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', description);
    }
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const url = `${SITE_URL}${path}`;
    if (canonical.getAttribute('href') !== url) {
      canonical.setAttribute('href', url);
    }
  }, [title, description, path]);
}