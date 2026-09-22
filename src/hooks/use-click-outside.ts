import { useEffect, useRef, type RefObject } from 'react';

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

  // Keeps the listener subscribed once while always calling the latest callback and refs
  const handleClickRef = useRef(handleClick);
  handleClickRef.current = handleClick;

  useEffect(() => {
    const listener = (event: MouseEvent) => handleClickRef.current(event);
    document.addEventListener('click', listener, true);

    return () => document.removeEventListener('click', listener, true);
  }, []);
};
