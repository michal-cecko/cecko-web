'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Skip Lenis on touch / coarse-pointer devices — native scroll feels
    // better on phones and avoids jank on lower-powered hardware.
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    const lenis = new Lenis({
      lerp: 0.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
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
