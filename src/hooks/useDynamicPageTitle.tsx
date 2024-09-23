import { useLayoutEffect } from 'react';

export const useDynamicPageTitle = (scope: string) => {
  useLayoutEffect(() => {
    document.title = `${scope} | Instaclone`;
  }, [scope]);
};
