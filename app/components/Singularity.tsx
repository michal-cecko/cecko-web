'use client';

import { useEffect, useRef } from 'react';

export default function Singularity() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf = 0,
      w = 0,
      h = 0,
      cx = 0,
      cy = 0,
      t = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.parentElement!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = w / 2;
      cy = h * 0.5;
    };
    resize();
    window.addEventListener('resize', resize);

    const STREAKS = 140;
    const streaks = Array.from({ length: STREAKS }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: 0.9 + Math.random() * 0.4,
      speed: 0.002 + Math.random() * 0.004,
      len: 0.15 + Math.random() * 0.35,
      width: 0.5 + Math.random() * 1.8,
      hue: Math.random(),
      offset: Math.random() * Math.PI * 2,
    }));

    const colorFor = (h: number): [number, number, number] => {
      if (h < 0.16) return [198, 245, 54];
      if (h < 0.34) return [255, 180, 70];
      if (h < 0.48) return [255, 110, 60];
      if (h < 0.62) return [210, 120, 220];
      if (h < 0.78) return [90, 120, 255];
      if (h < 0.92) return [120, 220, 255];
      return [198, 245, 54];
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(8, 8, 10, 0.16)';
      ctx.fillRect(0, 0, w, h);

      const baseR = Math.min(w, h) * 0.18;

      const halo = ctx.createRadialGradient(cx, cy, baseR * 0.6, cx, cy, baseR * 2.2);
      halo.addColorStop(0, 'rgba(0,0,0,1)');
      halo.addColorStop(0.5, 'rgba(15,10,20,0.5)');
      halo.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(cx, cy, baseR * 2.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalCompositeOperation = 'lighter';
      for (const s of streaks) {
        s.angle += s.speed;
        const r = baseR * s.radius * (1 + Math.sin(t * 0.6 + s.offset) * 0.05);
        const steps = 14;
        for (let i = 0; i < steps; i++) {
          const k = i / steps;
          const a = s.angle - s.len * k;
          const x = cx + Math.cos(a) * r * 1.15;
          const y = cy + Math.sin(a) * r * 0.95;
          const [R, G, B] = colorFor((s.hue + k * 0.2) % 1);
          const alpha = (1 - k) * 0.55;
          ctx.fillStyle = `rgba(${R},${G},${B},${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, s.width * (1 - k * 0.6), 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const rim = ctx.createRadialGradient(cx, cy, baseR * 0.95, cx, cy, baseR * 1.15);
      rim.addColorStop(0, 'rgba(255, 240, 200, 0)');
      rim.addColorStop(0.5, 'rgba(255, 220, 150, 0.18)');
      rim.addColorStop(1, 'rgba(255, 220, 150, 0)');
      ctx.fillStyle = rim;
      ctx.beginPath();
      ctx.arc(cx, cy, baseR * 1.15, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalCompositeOperation = 'source-over';

      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseR * 0.95);
      core.addColorStop(0, 'rgba(0,0,0,1)');
      core.addColorStop(0.85, 'rgba(0,0,0,1)');
      core.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(cx, cy, baseR * 0.95, 0, Math.PI * 2);
      ctx.fill();

      t += 0.01;
      raf = requestAnimationFrame(draw);
    };

    ctx.fillStyle = '#080808';
    ctx.fillRect(0, 0, w, h);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="singularity-canvas" aria-hidden="true" />;
}
