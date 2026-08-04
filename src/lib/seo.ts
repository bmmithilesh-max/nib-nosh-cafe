import { useEffect } from 'react';

export const SITE_URL = 'https://nibandnoshcafe.com';

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    if (document.title !== title) {
      document.title = title;
    }
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', description);
    }
  }, [title, description]);
}