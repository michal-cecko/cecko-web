'use client';

import { usePathname } from 'next/navigation';
import Cursor from './Cursor';
import Nav from './Nav';
import Footer from './Footer';
import WorkPreviewFollow from './WorkPreviewFollow';

const PATH_TO_KEY: Record<string, string> = {
  '/': 'home',
  '/o-mne': 'about',
  '/sluzby': 'services',
  '/prace': 'work',
  '/pripadova-studia': 'work',
  '/kontakt': 'contact',
  '/cv': 'cv',
};

export default function Chrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';
  const matchKey = Object.keys(PATH_TO_KEY)
    .sort((a, b) => b.length - a.length)
    .find((p) => pathname === p || pathname.startsWith(p + '/'));
  const active = matchKey ? PATH_TO_KEY[matchKey] : 'home';

  const showWorkPreview = active === 'home' || active === 'work';

  return (
    <>
      <Cursor />
      <Nav active={active} />
      {showWorkPreview && <WorkPreviewFollow />}
      {children}
      <Footer />
    </>
  );
}
