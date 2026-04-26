import Link from 'next/link';
import Counter from '../Counter';

export default function Hero() {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero-grid-bg" />
      <div className="hero-blob" />
      <div className="hero-blob hero-blob-2" />

      <div className="hero-top">
        <div className="hero-availability">
          <span className="hero-availability-dot" />
          <span className="hero-availability-label">
            Voľné kapacity na nové projekty <b>Júna 2026</b>
          </span>
        </div>
        <span className="hero-location">Remote · Ostrava CZ / Žilina SK</span>
      </div>

      <div className="hero-center">
        <div className="hero-preheading hero-preheading-author">
          <span className="hero-photo" aria-label="Michal Čečko" />
          <span className="hero-preheading-text">
            <span className="hero-preheading-name">Michal Čečko</span>
            <span className="hero-preheading-role">Freelance Full-Stack Developer</span>
          </span>
        </div>
        <h1 className="hero-heading">
          Postavím váš<br />
          produkt <em>od&nbsp;A</em><br />
          po <em>Z.</em> Sám.
        </h1>
      </div>

      <div className="hero-sub">
        <p className="hero-sub-text">
          Som <strong>fullstack developer</strong> so špecializáciou na PHP / Laravel.
          Navrhujem, programujem a spúšťam <strong>weby, mobilné aplikácie a SaaS produkty</strong> —
          od prvého wireframu po produkčný deploy. Jeden kontakt, žiadne zbytočné meetingy,
          jedna zodpovednosť.
        </p>
        <div className="hero-actions">
          <Link href="/kontakt" className="btn btn-primary">
            Začať projekt
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8m0 0L8 4m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/prace" className="btn btn-ghost">
            Pozrieť práce
          </Link>
        </div>
      </div>

      <div className="hero-foot">
        <div className="hero-stat">
          <div className="hero-stat-num">
            <Counter to={8} sup="+" />
          </div>
          <div className="hero-stat-label">Rokov praxe</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">
            <Counter to={62} sup="+" />
          </div>
          <div className="hero-stat-label">Dodaných projektov</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">
            <Counter to={14} />
          </div>
          <div className="hero-stat-label">Spokojných klientov 2025</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">
            100<sup>%</sup>
          </div>
          <div className="hero-stat-label">Odovzdaných v termíne</div>
        </div>
      </div>
    </section>
  );
}
