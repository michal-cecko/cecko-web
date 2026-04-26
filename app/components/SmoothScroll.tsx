'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      // Lerp = how much of the gap to close every frame.
      // Lower = smoother but slower to settle.
      lerp: 0.1,
      // Easing curve used for programmatic .scrollTo() (anchor jumps,
      // hashchange) — fast start, slow finish.
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      // Smooth touch + scrollbar drag too (mirrors wheel behaviour
      // across all input methods).
      syncTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
