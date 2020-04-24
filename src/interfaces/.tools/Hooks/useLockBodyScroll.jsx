import { useLayoutEffect } from 'react';

export const useLockBodyScroll = visibility => {
  useLayoutEffect(() => {
    if (visibility) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => (document.body.style.overflow = originalStyle);
    }
  }, [visibility]);
};
