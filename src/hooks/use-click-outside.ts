import { useEffect, type RefObject } from 'react';

export const useClickOutside = (callback: () => void, ...refs: Array<RefObject<HTMLElement | null | undefined>>) => {
  const handleClick = (event: MouseEvent) => {
    let hasElements = false;

    const clickedElement = refs.some((ref) => {
      hasElements = hasElements || !!ref.current;
      return ref.current && ref.current.contains(event.target as Node);
    });

    if (hasElements && !clickedElement) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, true);

    return () => document.removeEventListener('click', handleClick, true);
  }, []);
};
