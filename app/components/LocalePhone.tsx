'use client';

import { useEffect, useState } from 'react';
import { CONTACT, type Lang } from '../data';

function readLang(): Lang {
  try {
    const v = localStorage.getItem('mc_lang');
    if (v === 'cz' || v === 'en' || v === 'sk') return v;
  } catch {}
  return 'sk';
}

export function useLocalePhone() {
  const [lang, setLang] = useState<Lang>('sk');

  useEffect(() => {
    setLang(readLang());
    const onChange = () => setLang(readLang());
    window.addEventListener('storage', onChange);
    window.addEventListener('mc:lang', onChange);
    return () => {
      window.removeEventListener('storage', onChange);
      window.removeEventListener('mc:lang', onChange);
    };
  }, []);

  return CONTACT.phones[lang];
}

type Props = {
  className?: string;
  style?: React.CSSProperties;
  children?: (phone: { display: string; href: string }) => React.ReactNode;
};

export default function LocalePhone({ className, style, children }: Props) {
  const phone = useLocalePhone();
  if (children) return <>{children(phone)}</>;
  return (
    <a href={phone.href} className={className} style={style}>
      {phone.display}
    </a>
  );
}
