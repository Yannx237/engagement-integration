import { useRef } from 'react';

export function useHorizontalScroll(distance: number) {
  const containerRef = useRef<HTMLDivElement>(null);

  function scroll(direction: 'left' | 'right') {
    containerRef.current?.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth',
    });
  }

  return { containerRef, scroll };
}
