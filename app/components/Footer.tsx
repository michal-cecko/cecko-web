import LangSwitcher from './LangSwitcher';
import { CONTACT } from '../data';
import type { Locale } from '../i18n/config';
import type { Dict } from '../i18n/dictionaries';

export default function Footer({ locale, t }: { locale: Locale; t: Dict }) {
  return (
    <footer className="footer">
      <div className="footer-big">
        <span className="footer-big-text">
          ČEČKO<em>.dev</em>
        </span>
      </div>
      <div className="footer-meta">
        <span>{t.footer.rights}</span>
        <span>{t.footer.freelance}</span>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href={CONTACT.linkedinUrl} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/michal-cecko" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <span>{t.footer.location}</span>
        <LangSwitcher locale={locale} groupLabel={t.nav.langGroup} />
      </div>
    </footer>
  );
}
