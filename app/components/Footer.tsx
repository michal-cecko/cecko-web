import LangSwitcher from './LangSwitcher';

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
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Telegram</a>
        </div>
        <span>Remote · Ostrava CZ / Žilina SK</span>
        <LangSwitcher />
      </div>
    </footer>
  );
}
