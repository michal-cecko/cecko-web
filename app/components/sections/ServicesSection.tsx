import Link from 'next/link';
import { SERVICES } from '../../data';

export default function ServicesSection() {
  return (
    <section className="section" id="services" data-screen-label="02 Services">
      <div className="section-head">
        <div className="section-head-meta">
          <span className="mono">02 — Služby</span>
          <span className="section-head-meta-desc">
            Čo pre vás viem spraviť. Od prototypu po produkciu, od databázy po dizajn.
          </span>
        </div>
        <h2 className="section-title">
          Čokoľvek, čo potrebuje <em>kód alebo dizajn.</em>
        </h2>
      </div>
      <div className="services-grid">
        {SERVICES.map((s) => (
          <Link key={s.n} href="/sluzby" className={`service-card ${s.span}`}>
            <span className="service-card-bg-num">{s.n.replace('0', '')}</span>
            <h3 className="service-card-title">{s.title}</h3>
            <p className="service-card-desc">{s.desc}</p>
            <div className="service-card-footer">
              <div className="service-card-tags">
                <span className="chip chip-accent">{s.price}</span>
                <span className="chip">{s.dur}</span>
              </div>
              <span className="service-card-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
