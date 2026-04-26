'use client';

import { useEffect, useState } from 'react';

export default function LangSwitcher({ className = '' }: { className?: string }) {
  const [lang, setLang] = useState<string>('sk');

  useEffect(() => {
    try {
      setLang(localStorage.getItem('mc_lang') || 'sk');
    } catch {}
    const onChange = () => {
      try {
        setLang(localStorage.getItem('mc_lang') || 'sk');
      } catch {}
    };
    window.addEventListener('storage', onChange);
    window.addEventListener('mc:lang', onChange);
    return () => {
      window.removeEventListener('storage', onChange);
      window.removeEventListener('mc:lang', onChange);
    };
  }, []);

  const pick = (v: string) => {
    setLang(v);
    try {
      localStorage.setItem('mc_lang', v);
    } catch {}
    window.dispatchEvent(new Event('mc:lang'));
  };

  return (
    <div className={`lang-switch ${className}`} role="group" aria-label="Jazyk">
      {['sk', 'cz', 'en'].map((v) => (
        <button
          key={v}
          type="button"
          className={`lang-opt ${lang === v ? 'is-active' : ''}`}
          onClick={() => pick(v)}
          aria-pressed={lang === v}
        >
          {v.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
