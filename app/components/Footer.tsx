import LangSwitcher from './LangSwitcher';
import { CONTACT } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-big">
        <span className="footer-big-text">
          ČEČKO<em>.dev</em>
        </span>
      </div>
      <div className="footer-meta">
        <span>© 2026 Michal Čečko</span>
        <span>Freelance · IČO 23260696</span>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href={CONTACT.linkedinUrl} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/michal-cecko" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <span>Remote · Ostrava CZ / Žilina SK</span>
        <LangSwitcher />
      </div>
    </footer>
  );
}
