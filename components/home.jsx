// Home page sections
const { useState: uSh, useEffect: uEh, useRef: uRh } = React;

function Singularity() {
  const canvasRef = uRh(null);
  uEh(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf, w, h, cx, cy, t = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = w / 2; cy = h * 0.5;
    };
    resize();
    window.addEventListener('resize', resize);

    // Orbiting streaks forming a luminous ring (black hole)
    const STREAKS = 140;
    const streaks = Array.from({ length: STREAKS }, (_, i) => ({
      angle: Math.random() * Math.PI * 2,
      radius: 0.9 + Math.random() * 0.4, // relative multiplier
      speed: 0.002 + Math.random() * 0.004,
      len: 0.15 + Math.random() * 0.35,
      width: 0.5 + Math.random() * 1.8,
      hue: Math.random(), // position on color wheel
      offset: Math.random() * Math.PI * 2,
    }));

    const colorFor = (h) => {
      // palette: lime → amber → orange → magenta → blue → cyan → back
      if (h < 0.16) return [198, 245, 54];   // lime
      if (h < 0.34) return [255, 180, 70];   // amber
      if (h < 0.48) return [255, 110, 60];   // orange
      if (h < 0.62) return [210, 120, 220];  // magenta/plum
      if (h < 0.78) return [90, 120, 255];   // blue
      if (h < 0.92) return [120, 220, 255];  // cyan
      return [198, 245, 54];
    };

    const draw = () => {
      // motion blur fade
      ctx.fillStyle = 'rgba(8, 8, 10, 0.16)';
      ctx.fillRect(0, 0, w, h);

      const baseR = Math.min(w, h) * 0.18;

      // central black disk with soft halo
      const halo = ctx.createRadialGradient(cx, cy, baseR * 0.6, cx, cy, baseR * 2.2);
      halo.addColorStop(0, 'rgba(0,0,0,1)');
      halo.addColorStop(0.5, 'rgba(15,10,20,0.5)');
      halo.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = halo;
      ctx.beginPath(); ctx.arc(cx, cy, baseR * 2.2, 0, Math.PI * 2); ctx.fill();

      ctx.globalCompositeOperation = 'lighter';
      for (const s of streaks) {
        s.angle += s.speed;
        const r = baseR * s.radius * (1 + Math.sin(t * 0.6 + s.offset) * 0.05);
        const steps = 14;
        for (let i = 0; i < steps; i++) {
          const k = i / steps;
          const a = s.angle - s.len * k;
          // squish into ellipse slightly tilted for depth
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

      // inner accretion rim (bright)
      const rim = ctx.createRadialGradient(cx, cy, baseR * 0.95, cx, cy, baseR * 1.15);
      rim.addColorStop(0, 'rgba(255, 240, 200, 0)');
      rim.addColorStop(0.5, 'rgba(255, 220, 150, 0.18)');
      rim.addColorStop(1, 'rgba(255, 220, 150, 0)');
      ctx.fillStyle = rim;
      ctx.beginPath(); ctx.arc(cx, cy, baseR * 1.15, 0, Math.PI * 2); ctx.fill();

      ctx.globalCompositeOperation = 'source-over';

      // solid black core
      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseR * 0.95);
      core.addColorStop(0, 'rgba(0,0,0,1)');
      core.addColorStop(0.85, 'rgba(0,0,0,1)');
      core.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = core;
      ctx.beginPath(); ctx.arc(cx, cy, baseR * 0.95, 0, Math.PI * 2); ctx.fill();

      t += 0.01;
      raf = requestAnimationFrame(draw);
    };
    // prime with opaque background
    ctx.fillStyle = '#080808';
    ctx.fillRect(0, 0, w, h);
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="singularity-canvas" aria-hidden="true" />;
}

function Hero() {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero-grid-bg" />
      <div className="hero-blob" />
      <div className="hero-blob hero-blob-2" />

      <div className="hero-top">
        <div className="hero-availability">
          <span className="hero-availability-dot" />
          <span className="hero-availability-label">Voľné kapacity na nové projekty <b>Júna 2026</b></span>
        </div>
        <span className="hero-location">
          Remote · Ostrava CZ / Žilina SK
        </span>
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
          <a href="kontakt.html" className="btn btn-primary">
            Začať projekt
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L8 4m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="prace.html" className="btn btn-ghost">Pozrieť práce</a>
        </div>
      </div>

      <div className="hero-foot">
        <div className="hero-stat">
          <div className="hero-stat-num"><Counter to={8} sup="+" /></div>
          <div className="hero-stat-label">Rokov praxe</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num"><Counter to={62} sup="+" /></div>
          <div className="hero-stat-label">Dodaných projektov</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num"><Counter to={14} /></div>
          <div className="hero-stat-label">Spokojných klientov 2025</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">100<sup>%</sup></div>
          <div className="hero-stat-label">Odovzdaných v termíne</div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <section className="marquee">
      <div className="marquee-track">
        {Array(3).fill(0).map((_, i) => (
          <span key={i}>
            Laravel <i>✦</i> FilamentPHP <i>✦</i> Vue.js <i>✦</i> Nuxt <i>✦</i> React <i>✦</i> Flutter <i>✦</i> Ionic <i>✦</i> React Native <i>✦</i> Tailwind <i>✦</i> Node.js <i>✦</i> AI integrácie <i>✦</i>{' '}
          </span>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section" id="services" data-screen-label="02 Services">
      <div className="section-head">
        <div className="section-head-meta">
          <span className="mono">02 — Služby</span>
          <span className="section-head-meta-desc">Čo pre vás viem spraviť. Od prototypu po produkciu, od databázy po dizajn.</span>
        </div>
        <h2 className="section-title">
          Čokoľvek, čo potrebuje <em>kód alebo dizajn.</em>
        </h2>
      </div>
      <div className="services-grid">
        {SERVICES.map((s) => (
          <a key={s.n} href="sluzby.html" className={`service-card ${s.span}`}>
            <span className="service-card-bg-num">{s.n.replace('0', '')}</span>
            <h3 className="service-card-title">{s.title}</h3>
            <p className="service-card-desc">{s.desc}</p>
            <div className="service-card-footer">
              <div className="service-card-tags">{s.tags.map(t => <span key={t} className="chip">{t}</span>)}</div>
              <span className="service-card-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function StackSection() {
  const [openState, setOpenState] = React.useState({});
  const [isMobile, setIsMobile] = React.useState(() => typeof window !== 'undefined' && window.innerWidth <= 900);
  React.useEffect(() => {
    const on = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  const toggle = (t) => setOpenState(s => ({ ...s, [t]: !s[t] }));
  return (
    <section className="stack" id="stack" data-screen-label="03 Stack">
      <div className="stack-inner">
        <div className="section-head">
          <div className="section-head-meta">
            <span className="mono">03 — Tech stack</span>
            <span className="section-head-meta-desc">Nástroje ktoré používam denne. Zelená bodka = primárny stack, šedá = viem v tom, ak treba.</span>
          </div>
          <h2 className="section-title">
            <em>PHP-first.</em> Ale nie iba.
          </h2>
        </div>
        <div className="stack-grid">
          {STACK.map((cat) => {
            const open = !isMobile || openState[cat.title];
            return (
              <div key={cat.title} className={`stack-cat ${isMobile ? 'stack-cat-collapsible' : ''} ${open ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="stack-cat-head"
                  onClick={() => isMobile && toggle(cat.title)}
                  aria-expanded={open}
                >
                  <h3 className="stack-cat-title">{cat.title}</h3>
                  <span className="stack-cat-count">{cat.count}</span>
                  <span className="stack-cat-chev" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </button>
                {open && (
                  <div className="stack-list">
                    {cat.items.map((it) => (
                      <div key={it.n} className={`stack-item ${!it.p ? 'secondary' : ''}`}>
                        <span className="stack-item-name">{it.n}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section className="section" id="work" data-screen-label="04 Work">
      <div className="section-head">
        <div className="section-head-meta">
          <span className="mono">04 — Vybrané práce</span>
          <span className="section-head-meta-desc">Projekty, ktoré ma niečo naučili a klientom priniesli výsledok.</span>
        </div>
        <h2 className="section-title">Z posledných <em>rokov.</em></h2>
        <a href="prace.html" className="btn btn-ghost section-cta">Všetky práce →</a>
      </div>
      <div className="work-list">
        {WORKS.slice(0, 6).map((w, i) => (
          <a key={w.id} href={`pripadova-studia.html?p=${w.id}`} className="work-row">
            <span className="work-row-n">({String(i + 1).padStart(2, '0')})</span>
            <div className="work-row-main">
              <h3 className="work-row-title">{w.title}</h3>
              <span className="work-row-kind">{w.kind}</span>
            </div>
            <div className="work-row-tags">{w.tags.map(t => <span key={t} className="chip">{t}</span>)}</div>
            <span className="work-row-year">{w.year}</span>
            <span className="work-row-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <div className="work-preview" style={{ background: i % 2 === 0 ? 'linear-gradient(135deg, #C6F432, #8b6cce)' : 'linear-gradient(135deg, #1c1e19, #C6F432)' }}>
              <div className="wp-mock" style={{ color: i % 2 === 0 ? '#0c0d0a' : '#f0ede4' }}>
                <div className="wp-dots"><span/><span/><span/></div>
                <div>
                  <div className="wp-title">{w.title}</div>
                  <div className="wp-sub">{w.kind}</div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section" id="process" data-screen-label="05 Process">
      <div className="section-head">
        <div className="section-head-meta">
          <span className="mono">05 — Ako pracujem</span>
          <span className="section-head-meta-desc">Štyri fázy. Bez prekvapení. Vždy viete kde stojíme.</span>
        </div>
        <h2 className="section-title">
          Od prvého mailu po <em>launch.</em>
        </h2>
      </div>
      <div className="process-steps">
        {PROCESS.map((p) => (
          <div key={p.n} className="process-step">
            <div className="process-step-n">{p.n}</div>
            <h3 className="process-step-title">{p.title}</h3>
            <div className="process-step-dur">{p.dur}</div>
            <p className="process-step-desc">{p.desc}</p>
            <ul className="process-step-outputs">
              {p.outputs.map(o => <li key={o}>{o}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section" id="reviews" data-screen-label="06 Reviews">
      <div className="section-head">
        <div className="section-head-meta">
          <span className="mono">06 — Recenzie klientov</span>
          <span className="section-head-meta-desc">Čo o mne hovoria ľudia, s ktorými som pracoval.</span>
        </div>
        <h2 className="section-title">
          Slová <em>spokojných</em> klientov.
        </h2>
      </div>
      <div className="testimonials">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="testimonial">
            <div className="testimonial-quote-mark">"</div>
            <p className="testimonial-quote">{t.quote}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{t.init}</div>
              <div className="testimonial-author-info">
                <span className="testimonial-author-name">{t.name}</span>
                <span className="testimonial-author-role">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = uSh(0);
  return (
    <section className="section" id="faq" data-screen-label="07 FAQ">
      <div className="section-head">
        <div className="section-head-meta">
          <span className="mono">07 — Časté otázky</span>
          <span className="section-head-meta-desc">Najčastejšie otázky, ktoré dostávam pred začatím spolupráce.</span>
        </div>
        <h2 className="section-title">Čo by ste sa ešte chceli <em>spýtať?</em></h2>
      </div>
      <div className="faq-list">
        {FAQS.map((f, i) => (
          <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
              <span className="faq-n">{String(i + 1).padStart(2, '0')}</span>
              <span className="faq-q-text">{f.q}</span>
              <span className="faq-toggle">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
            </button>
            <div className="faq-a"><div className="faq-a-inner">{f.a}</div></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const [copied, setCopied] = uSh(false);
  const email = 'michal@cecko.dev';
  return (
    <section className="contact" id="contact" data-screen-label="08 Contact">
      <div className="contact-inner">
        <span className="mono" style={{color: 'var(--lime)'}}>08 — Začnime</span>
        <h2 className="contact-title">
          Máte projekt?<br />
          <em>Poďme sa baviť.</em>
        </h2>
        <p className="contact-sub">
          Napíšte mi pár riadkov o projekte. Do 24 hodín odpoviem
          a navrhnem úvodný 30-minútový call — zdarma.
        </p>
        <a href={`mailto:${email}`} className="contact-email">
          <span className="contact-email-label">Email</span>
          <span className="contact-email-addr">{email}</span>
          <span className="contact-email-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 18L18 6M18 6H9M18 6v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </a>
        <button
          onClick={() => { navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
          style={{background:'none',border:'none',cursor:'pointer',fontFamily:'var(--font-mono)',fontSize:11,color:'var(--fg-dim)',textTransform:'uppercase',letterSpacing:'0.08em',padding:'8px'}}
        >
          {copied ? '✓ Skopírované' : 'Skopírovať email'}
        </button>
        <div className="contact-channels" style={{gridTemplateColumns:'repeat(2, 1fr)'}}>
          <a href="tel:+421900000000" className="contact-channel">
            <span className="contact-channel-label">Telefón / WhatsApp</span>
            <span className="contact-channel-value">+421 900 000 000</span>
          </a>
          <a href="#" className="contact-channel">
            <span className="contact-channel-label">LinkedIn</span>
            <span className="contact-channel-value">@michalcecko</span>
          </a>
        </div>
        <div className="contact-meta">
          <span>Remote · Ostrava CZ / Žilina SK</span>
          <span>Pon–Pia · 9:00–17:00</span>
          <span>IČO: 23260696</span>
        </div>
      </div>
    </section>
  );
}

function Tweaks({ tweaks, setTweaks }) {
  if (!tweaks.show) return null;
  const set = (k, v) => setTweaks({ ...tweaks, [k]: v });
  return (
    <div className="tweaks-panel">
      <div className="tweaks-title">
        <span>Tweaks</span>
        <button className="tweaks-close" onClick={() => set('show', false)}>×</button>
      </div>
      <div className="tweak-row">
        <div className="tweak-label">Téma <b>{tweaks.theme}</b></div>
        <div className="tweak-buttons">
          <button className={tweaks.theme === 'dark' ? 'active' : ''} onClick={() => set('theme', 'dark')}>Dark</button>
          <button className={tweaks.theme === 'light' ? 'active' : ''} onClick={() => set('theme', 'light')}>Light</button>
        </div>
      </div>
      <div className="tweak-row">
        <div className="tweak-label">Akcent <b>{tweaks.accent}</b></div>
        <div className="tweak-buttons">
          {[
            { k: 'lime', c: '#C6F432' },
            { k: 'cyan', c: '#4af0e0' },
            { k: 'orange', c: '#ff8a3d' },
            { k: 'pink', c: '#ff6dc2' },
          ].map(a => (
            <button key={a.k} className={tweaks.accent === a.k ? 'active' : ''} onClick={() => set('accent', a.k)} style={{background: tweaks.accent === a.k ? a.c : undefined, borderColor: a.c, color: tweaks.accent === a.k ? '#0c0d0a' : a.c}}>{a.k}</button>
          ))}
        </div>
      </div>
      <div className="tweak-row">
        <div className="tweak-label">Kurzor <b>{tweaks.cursor ? 'on' : 'off'}</b></div>
        <div className="tweak-buttons">
          <button className={tweaks.cursor ? 'active' : ''} onClick={() => set('cursor', true)}>On</button>
          <button className={!tweaks.cursor ? 'active' : ''} onClick={() => set('cursor', false)}>Off</button>
        </div>
      </div>
    </div>
  );
}

const ACCENT_MAP = {
  lime: '#C6F432',
  cyan: '#4af0e0',
  orange: '#ff8a3d',
  pink: '#ff6dc2',
};

function useTweaks() {
  const [tweaks, setTweaks] = uSh(() => {
    try {
      const s = localStorage.getItem('mc-tweaks');
      if (s) return JSON.parse(s);
    } catch (e) {}
    return { theme: 'dark', accent: 'lime', cursor: true, show: false };
  });
  uEh(() => {
    localStorage.setItem('mc-tweaks', JSON.stringify(tweaks));
    document.body.setAttribute('data-theme', tweaks.theme);
    document.documentElement.style.setProperty('--lime', ACCENT_MAP[tweaks.accent] || '#C6F432');
  }, [tweaks]);
  uEh(() => {
    const onMsg = (e) => {
      if (e.data?.type === '__activate_edit_mode') setTweaks(t => ({ ...t, show: true }));
      if (e.data?.type === '__deactivate_edit_mode') setTweaks(t => ({ ...t, show: false }));
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  return [tweaks, setTweaks];
}

function HomeApp() {
  const [tweaks, setTweaks] = useTweaks();
  return (
    <>
      {tweaks.cursor && <Cursor />}
      <Nav active="home" />
      <WorkPreviewFollow />
      <Hero />
      <Marquee />
      <ServicesSection />
      <StackSection />
      <WorkSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <Tweaks tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

Object.assign(window, { HomeApp, useTweaks, Tweaks, Hero, Marquee, ServicesSection, StackSection, WorkSection, ProcessSection, TestimonialsSection, FAQSection, ContactSection });

const rootEl = document.getElementById('root');
if (rootEl && rootEl.dataset.page === 'home') {
  ReactDOM.createRoot(rootEl).render(<HomeApp />);
}
