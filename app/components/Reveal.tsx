'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  /** Stagger in ms applied as inline transition-delay */
  delay?: number;
  /** Translate offset in px (default 24) */
  offset?: number;
  /** Component to render (default 'div') */
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
};

export default function Reveal({ children, delay = 0, offset = 24, as = 'div', className = '' }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as 'div';
  return (
    <Tag
      // @ts-expect-error — passing ref through to whatever HTML tag was chosen
      ref={ref}
      className={`reveal ${shown ? 'reveal-in' : ''} ${className}`.trim()}
      style={{
        transitionDelay: shown && delay ? `${delay}ms` : undefined,
        ['--reveal-offset' as string]: `${offset}px`,
      }}
    >
      {children}
    </Tag>
  );
}
