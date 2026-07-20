import { useEffect, useState } from 'preact/hooks';

export function useColumnCount(containerRef: { current: HTMLElement | null }): number {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const width = el.clientWidth;
      if (width >= 1920) setCount(6);
      else if (width >= 1600) setCount(5);
      else if (width >= 1280) setCount(4);
      else if (width >= 900) setCount(3);
      else if (width >= 480) setCount(2);
      else setCount(1);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener('resize', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [containerRef]);

  return count;
}
