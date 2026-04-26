// Subpages: about, services, work, case study, contact, cv
const { useState: uSp, useEffect: uEp } = React;

// ========== ABOUT PAGE ==========
function AboutPage() {
  const [tweaks, setTweaks] = useTweaks();
  return (
    <>
      {tweaks.cursor && <Cursor />}
      <Nav active="about" />
      <section className="section" style={{paddingTop: 140}}>
        <div className="section-head">
          <div className="section-head-meta">
            <span className="mono">— O mne</span>
            <span className="section-head-meta-desc">Rýchly prehľad — kto som, odkiaľ prichádzam a prečo robím, čo robím.</span>
          </div>
          <h1 className="section-title">
            Som <em>Michal.</em><br />
            <span className="section-title-dim">Už 8 rokov píšem kód pre biznis.</span>
          </h1>
        </div>

        <div className="about">
          <div className="about-text">
            <p>
              Som freelance fullstack developer — pôsobím v <strong>Ostrave (CZ)</strong> aj <strong>Žiline (SK)</strong>.
            </p>
            <p>
              Špecializujem sa na <strong>PHP / Laravel</strong> backend, FilamentPHP pre admin
              rozhrania, a moderný JavaScript frontend (Vue, Nuxt, React). Keď
              treba, pridám k tomu mobilnú aplikáciu — Flutter, Ionic, alebo React Native.
            </p>
            <p>
              Baví ma stavať produkty, ktoré skutočne fungujú. Od MVP pre overenie
              nápadu, cez plnohodnotné SaaS platformy, až po interné nástroje, ktoré
              šetria firmám desiatky hodín mesačne.
            </p>
            <p>
              Pracujem najradšej priamo so zakladateľmi a majiteľmi firiem — ľuďmi,
              ktorí vedia čo chcú a potrebujú parťáka, ktorý im to postaví. Bez korporátnej
              byrokracie, agilu ako samoúčelu, alebo "ticketov".
            </p>
            <p>
              Keď nekódujem, pijem podozrivo veľa kávy, mučím sa na workoutovom ihrisku
              a na Strave systematicky ponižujem svoje vlastné minuloročné behy. (Občas vyhrám.)
            </p>
          </div>

          <div className="about-facts">
            <div className="about-fact"><span className="about-fact-key">Meno</span><span className="about-fact-val">Michal Čečko</span></div>
            <div className="about-fact"><span className="about-fact-key">Lokácia</span><span className="about-fact-val">Ostrava CZ / Žilina SK</span></div>
            <div className="about-fact"><span className="about-fact-key">Prvá lajna kódu</span><span className="about-fact-val">2016</span></div>
            <div className="about-fact"><span className="about-fact-key">Profesionálne</span><span className="about-fact-val"><span className="lime">8+</span> rokov</span></div>
            <div className="about-fact"><span className="about-fact-key">Status</span><span className="about-fact-val"><span className="lime">●</span> K dispozícii</span></div>
            <div className="about-fact"><span className="about-fact-key">IČO</span><span className="about-fact-val">23260696</span></div>
            <div className="about-fact"><span className="about-fact-key">Jazyky</span><span className="about-fact-val">SK · CZ · EN</span></div>
            <div className="about-fact"><span className="about-fact-key">Káva</span><span className="about-fact-val">Flat white, bez cukru</span></div>
          </div>
        </div>
      </section>

      <StackSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <Tweaks tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

// ========== SERVICES PAGE ==========
function ServicesPage() {
  const [tweaks, setTweaks] = useTweaks();
  const SERVICES_DETAIL = [
    {
      n: '01', title: 'Prezentačný web',
      desc: 'Jednoduchý prezentačný web alebo landing page s kontaktným formulárom. Rýchly, dobre vyzerajúci. Ideálne pre malé firmy, freelancerov, alebo launch produktu.',
      price: 'od 800 €',
      dur: '1–2 týždne',
      includes: ['Technická špecifikácia', 'UI dizajn', 'HTML + CSS + Alpine.js', 'Kontaktný formulár', 'SEO základy', 'Analytics'],
    },
    {
      n: '02', title: 'E-shop (menší)',
      desc: 'Jednoduchý e-shop pre menší sortiment — WordPress/WooCommerce alebo custom Laravel riešenie. Platby, doprava, admin, základné integrácie.',
      price: 'od 2 000 €',
      dur: '2–4 týždne',
      includes: ['Technická špecifikácia', 'UI dizajn', 'Produkty + kategórie', 'Platobná brána', 'Doprava + objednávky', 'Admin panel'],
    },
    {
      n: '03', title: 'Webová aplikácia / interný systém',
      desc: 'Custom riešenia na mieru — interné nástroje, admin dashboardy, CRM, klientské portály, weby s admin rozhraním a CMS. Laravel + FilamentPHP backend, moderný frontend.',
      price: 'od 2 500 €',
      dur: '4–12 týždňov',
      includes: ['Technická špecifikácia', 'UX/UI dizajn (ak treba)', 'Laravel backend + DB', 'Admin rozhranie (Filament)', 'Deploy + DevOps', 'Dokumentácia'],
    },
    {
      n: '04', title: 'Mobilné aplikácie',
      desc: 'Cross-platform (Flutter, Ionic, React Native) alebo natívne (Swift, Kotlin). App Store + Play Store submission v cene.',
      price: 'od 15 000 €',
      dur: '8–16 týždňov',
      includes: ['Product discovery', 'UI/UX dizajn', 'iOS + Android build', 'Analytics', 'Push notifikácie', 'Store submission'],
    },
    {
      n: '05', title: 'UI & UX dizajn',
      desc: 'Weby, aplikácie, logá, branding a vizuálna identita. AI-powered workflow pre rýchle iterácie — od prvých wireframov po produkčný design systém.',
      price: 'od 3 500 €',
      dur: '2–4 týždne',
      includes: ['Brand discovery', 'Logo & vizuálna identita', 'Wireframe', 'Hi-fi Figma mockup', 'Design systém', 'Responzívne layouty', 'Odovzdanie vývojárovi'],
    },
    {
      n: '06', title: 'SaaS MVP',
      desc: 'End-to-end produktový launch z technickej stránky — brand, dizajn, web, mobilná appka, platby, hosting. Pre zakladateľov, ktorí už vedia čo chcú postaviť a potrebujú jedného človeka na celú realizáciu.',
      price: 'od 15 000 €',
      dur: '12–24 týždňov',
      includes: ['Technická špecifikácia', 'Brand + vizuálna identita', 'Web + mobilná appka', 'Auth + platby (Stripe)', 'Admin panel', 'Hosting 12 mes.'],
    },
    {
      n: '07', title: 'AI integrácie',
      desc: 'Chatboti, RAG systémy, automatizácie. Claude, OpenAI, open-source modely. Prototyp → produkčná integrácia → tréning.',
      price: 'od 2 500 €',
      dur: '1–6 týždňov',
      includes: ['AI objavovanie', 'Prototyp', 'API integrácia', 'Vektorová DB (ak treba)', 'UI pre AI', 'Training & handoff'],
    },
  ];

  return (
    <>
      {tweaks.cursor && <Cursor />}
      <Nav active="services" />
      <section className="section" style={{paddingTop: 140}}>
        <div className="section-head">
          <div className="section-head-meta">
            <span className="mono">— Služby</span>
            <span className="section-head-meta-desc">Sedem oblastí, v ktorých viem dodať výsledok. Kombinujem ich podľa potreby projektu.</span>
          </div>
          <h1 className="section-title">Čo pre vás <em>postavím.</em></h1>
        </div>

        <div style={{display:'flex', flexDirection:'column', gap:24}}>
          {SERVICES_DETAIL.map((s) => (
            <div key={s.n} style={{
              background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 20,
              padding: '40px', display: 'grid', gridTemplateColumns: '80px 1fr 280px', gap: 32, alignItems: 'start'
            }}>
              <div style={{fontFamily:'var(--font-display)', fontSize:48, fontWeight:500, color:'var(--lime)', letterSpacing:'-0.03em', lineHeight:0.9}}>{s.n}</div>
              <div>
                <h3 style={{fontFamily:'var(--font-display)', fontSize:36, fontWeight:500, letterSpacing:'-0.02em', marginBottom:16}}>{s.title}</h3>
                <p style={{color:'var(--fg-dim)', fontSize:16, lineHeight:1.5, marginBottom:24, maxWidth:600}}>{s.desc}</p>
                <div style={{fontFamily:'var(--font-mono)', fontSize:11, color:'var(--fg-muted)', textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:12}}>V cene</div>
                <ul style={{listStyle:'none', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px 24px', maxWidth:600}}>
                  {s.includes.map((i) => (
                    <li key={i} style={{fontSize:14, color:'var(--fg-dim)', paddingLeft:16, position:'relative'}}>
                      <span style={{position:'absolute', left:0, color:'var(--lime)'}}>→</span>{i}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:16, paddingLeft:24, borderLeft:'1px solid var(--border)'}}>
                <div>
                  <div style={{fontFamily:'var(--font-mono)', fontSize:11, color:'var(--fg-muted)', textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:6}}>Cena</div>
                  <div style={{fontFamily:'var(--font-display)', fontSize:24, fontWeight:500, color:'var(--lime)'}}>{s.price}</div>
                </div>
                <div>
                  <div style={{fontFamily:'var(--font-mono)', fontSize:11, color:'var(--fg-muted)', textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:6}}>Trvanie</div>
                  <div style={{fontFamily:'var(--font-display)', fontSize:18, fontWeight:500}}>{s.dur}</div>
                </div>
                <a href="kontakt.html" className="btn btn-primary btn-sm" style={{justifyContent:'center', marginTop:8}}>Spýtať sa →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ProcessSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <Tweaks tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

// ========== WORK PAGE ==========
function WorkPage() {
  const [tweaks, setTweaks] = useTweaks();
  const [filter, setFilter] = uSp('all');
  const FILTERS = [
    { k: 'all', l: 'Všetko' },
    { k: 'web', l: 'Web' },
    { k: 'mobile', l: 'Mobile' },
    { k: 'saas', l: 'SaaS' },
  ];
  const TAG_FILTER = {
    web: ['Laravel', 'Nuxt', 'Vue', 'Alpine', 'WordPress', 'HTML', 'CSS', 'ACF'],
    mobile: ['Flutter', 'Ionic', 'RN', 'Mobile'],
    saas: ['Filament'],
  };
  const filtered = filter === 'all' ? WORKS : WORKS.filter(w => w.tags.some(t => (TAG_FILTER[filter] || []).includes(t)));

  return (
    <>
      {tweaks.cursor && <Cursor />}
      <Nav active="work" />
      <WorkPreviewFollow />
      <section className="section" style={{paddingTop: 140}}>
        <div className="section-head">
          <div className="section-head-meta">
            <span className="mono">— Práce</span>
            <span className="section-head-meta-desc">Kompletný zoznam vybraných projektov. Filtrujte podľa typu.</span>
          </div>
          <h1 className="section-title">Projekty <em>od roku 2018.</em></h1>
        </div>

        <div style={{display:'flex', gap:8, marginBottom:40, flexWrap:'wrap'}}>
          {FILTERS.map(f => (
            <button
              key={f.k}
              onClick={() => setFilter(f.k)}
              style={{
                padding: '10px 18px',
                background: filter === f.k ? 'var(--lime)' : 'transparent',
                color: filter === f.k ? 'var(--bg)' : 'var(--fg-dim)',
                border: '1px solid ' + (filter === f.k ? 'var(--lime)' : 'var(--border-hi)'),
                borderRadius: 999, fontSize: 12, fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase', letterSpacing: '0.05em',
                cursor: 'pointer', transition: 'all 0.2s'
              }}
            >{f.l} <span style={{opacity:0.6, marginLeft:6}}>{f.k === 'all' ? WORKS.length : WORKS.filter(w => w.tags.some(t => (TAG_FILTER[f.k] || []).includes(t))).length}</span></button>
          ))}
        </div>

        <div className="work-list">
          {filtered.map((w, i) => (
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
      <ContactSection />
      <Footer />
      <Tweaks tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

// ========== CASE STUDY PAGE ==========
function CaseStudyPage() {
  const [tweaks, setTweaks] = useTweaks();
  const params = new URLSearchParams(window.location.search);
  const pid = params.get('p') || WORKS[0].id;
  const project = WORKS.find(w => w.id === pid) || WORKS[0];
  const idx = WORKS.findIndex(w => w.id === project.id);
  const next = WORKS[(idx + 1) % WORKS.length];

  return (
    <>
      {tweaks.cursor && <Cursor />}
      <Nav active="work" />
      <section className="section" style={{paddingTop: 140}}>
        <a href="prace.html" style={{fontFamily:'var(--font-mono)', fontSize:12, color:'var(--fg-dim)', textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:40, display:'inline-block'}}>← Späť na práce</a>

        <div style={{borderBottom:'1px solid var(--border)', paddingBottom:40, marginBottom:40}}>
          <div style={{display:'flex', gap:16, marginBottom:24, alignItems:'center', flexWrap:'wrap'}}>
            <span className="chip chip-accent">{project.year}</span>
            <span className="mono">{project.kind}</span>
            {project.confidential && <span className="chip" style={{borderColor:'var(--border-hi)', color:'var(--fg-muted)'}}>● Dôverné</span>}
          </div>
          <h1 style={{fontFamily:'var(--font-display)', fontSize:'clamp(48px, 8vw, 120px)', fontWeight:500, letterSpacing:'-0.04em', lineHeight:0.95, marginBottom:20}}>
            {project.title}
          </h1>
          <div style={{display:'flex', gap:8, flexWrap:'wrap', alignItems:'center'}}>
            {project.tags.map(t => <span key={t} className="chip">{t}</span>)}
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener" className="chip" style={{borderColor:'var(--lime)', color:'var(--lime)', marginLeft:8}}>
                {project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')} ↗
              </a>
            )}
          </div>
        </div>

        <div style={{
          aspectRatio: '16/9', borderRadius: 20,
          background: 'linear-gradient(135deg, #C6F432, #8b6cce)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 60, position: 'relative', overflow: 'hidden'
        }}>
          <div style={{fontFamily:'var(--font-display)', fontSize:'clamp(60px, 10vw, 180px)', fontWeight:600, color:'#0c0d0a', letterSpacing:'-0.04em', textAlign:'center', padding:'0 20px'}}>{project.title}</div>
          <div style={{position:'absolute', bottom:24, left:24, fontFamily:'var(--font-mono)', fontSize:11, color:'#0c0d0a', textTransform:'uppercase', letterSpacing:'0.1em'}}>
            placeholder — screenshot doplním
          </div>
        </div>

        <div className="case-grid" style={{display:'grid', gridTemplateColumns:'1fr 320px', gap:80, alignItems:'start', marginBottom:80}}>
          <div style={{display:'flex', flexDirection:'column', gap:32}}>
            <div>
              <div className="mono" style={{marginBottom:12, color:'var(--lime)'}}>Výzva</div>
              <p style={{fontSize:19, lineHeight:1.5, color:'var(--fg)', fontFamily:'var(--font-display)', fontWeight:500, letterSpacing:'-0.01em'}}>
                {project.challenge}
              </p>
            </div>
            <div>
              <div className="mono" style={{marginBottom:12, color:'var(--lime)'}}>Riešenie</div>
              <p style={{fontSize:16, lineHeight:1.6, color:'var(--fg-dim)'}}>
                {project.solution}
              </p>
            </div>
          </div>

          <div style={{background:'var(--bg-2)', border:'1px solid var(--border)', borderRadius:20, padding:28, position:'sticky', top:100}}>
            <div className="mono" style={{marginBottom:16}}>Detaily projektu</div>
            <div style={{display:'flex', flexDirection:'column', gap:16}}>
              {[
                ['Rok', project.year],
                ['Role', project.role],
                ['Stack', project.tags.join(' · ')],
                ['Status', project.url ? 'Live' : (project.confidential ? 'Dôverné / interné' : 'Dokončené')],
                ['Web', project.url ? project.url.replace(/^https?:\/\//, '').replace(/\/$/, '') : '—'],
              ].map(([k, v]) => (
                <div key={k} style={{display:'flex', justifyContent:'space-between', paddingBottom:12, borderBottom:'1px dashed var(--border-hi)', gap:12}}>
                  <span style={{fontFamily:'var(--font-mono)', fontSize:11, color:'var(--fg-muted)', textTransform:'uppercase', letterSpacing:'0.05em', flexShrink:0}}>{k}</span>
                  <span style={{fontSize:13, fontWeight:500, textAlign:'right', wordBreak:'break-word'}}>{v}</span>
                </div>
              ))}
            </div>
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener" className="btn btn-primary" style={{marginTop:20, width:'100%', justifyContent:'center'}}>
                Otvoriť web ↗
              </a>
            )}
          </div>
        </div>

        <div style={{aspectRatio:'16/10', borderRadius:20, background:'repeating-linear-gradient(45deg, var(--bg-2) 0, var(--bg-2) 12px, var(--bg-3) 12px, var(--bg-3) 24px)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:60}}>
          <div style={{fontFamily:'var(--font-mono)', fontSize:11, color:'var(--fg-muted)', padding:'10px 18px', background:'var(--bg)', border:'1px solid var(--border)', borderRadius:999}}>
            placeholder — detailný screenshot
          </div>
        </div>

        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:40, borderTop:'1px solid var(--border)', gap:16, flexWrap:'wrap'}}>
          <a href="prace.html" className="btn btn-ghost">← Všetky práce</a>
          <a href={`pripadova-studia.html?p=${next.id}`} className="btn btn-ghost">Ďalší projekt: {next.title} →</a>
          <a href="kontakt.html" className="btn btn-primary">Mám podobný projekt →</a>
        </div>
      </section>
      <ContactSection />
      <Footer />
      <Tweaks tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

// ========== CONTACT PAGE ==========
function ContactPage() {
  const [tweaks, setTweaks] = useTweaks();
  const [form, setForm] = uSp({ name: '', email: '', budget: '25k', type: 'web', msg: '' });
  const [submitted, setSubmitted] = uSp(false);

  return (
    <>
      {tweaks.cursor && <Cursor />}
      <Nav active="contact" />
      <section className="section" style={{paddingTop: 140}}>
        <div className="section-head">
          <div className="section-head-meta">
            <span className="mono">— Kontakt</span>
            <span className="section-head-meta-desc">Napíšte mi. Do 24 hodín odpoviem s návrhom ďalších krokov.</span>
          </div>
          <h1 className="section-title">Poďme sa <em>porozprávať.</em></h1>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:60, alignItems:'start'}}>
          <div>
            {submitted ? (
              <div style={{padding:40, background:'var(--bg-2)', border:'1px solid var(--lime)', borderRadius:20, textAlign:'center'}}>
                <div style={{fontFamily:'var(--font-display)', fontSize:48, color:'var(--lime)', marginBottom:16}}>✓</div>
                <h3 style={{fontFamily:'var(--font-display)', fontSize:28, marginBottom:12, fontWeight:500, letterSpacing:'-0.01em'}}>Správa odoslaná</h3>
                <p style={{color:'var(--fg-dim)'}}>Ďakujem — ozvem sa do 24 hodín.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{display:'flex', flexDirection:'column', gap:20, padding:32, background:'var(--bg-2)', border:'1px solid var(--border)', borderRadius:20}}>
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
                  <Field label="Meno" val={form.name} on={v => setForm({...form, name: v})} req />
                  <Field label="Email" val={form.email} on={v => setForm({...form, email: v})} type="email" req />
                </div>
                <div>
                  <FieldLabel>Typ projektu</FieldLabel>
                  <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
                    {[['web','Web / aplikácia'], ['mobile','Mobilná appka'], ['saas','SaaS MVP'], ['ai','AI integrácia'], ['design','UI/UX / Branding']].map(([k,l]) => (
                      <button type="button" key={k} onClick={() => setForm({...form, type: k})} style={{
                        padding:'10px 16px', border:'1px solid '+(form.type===k?'var(--lime)':'var(--border-hi)'),
                        background: form.type===k?'var(--lime)':'transparent', color: form.type===k?'var(--bg)':'var(--fg-dim)',
                        borderRadius:999, cursor:'pointer', fontSize:12, fontFamily:'var(--font-mono)', textTransform:'uppercase', letterSpacing:'0.05em'
                      }}>{l}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <FieldLabel>Rozpočet</FieldLabel>
                  <div style={{display:'flex', gap:8, flexWrap:'wrap', alignItems:'center'}}>
                    {[['5k','< 5 000 €'], ['15k','5–15k €'], ['25k','15–30k €'], ['50k','30–60k €'], ['100k','60k+ €']].map(([k,l]) => (
                      <button type="button" key={k} onClick={() => setForm({...form, budget: k, customBudget: ''})} style={{
                        padding:'10px 16px', border:'1px solid '+(form.budget===k?'var(--lime)':'var(--border-hi)'),
                        background: form.budget===k?'var(--lime)':'transparent', color: form.budget===k?'var(--bg)':'var(--fg-dim)',
                        borderRadius:999, cursor:'pointer', fontSize:12, fontFamily:'var(--font-mono)', textTransform:'uppercase', letterSpacing:'0.05em'
                      }}>{l}</button>
                    ))}
                    <button type="button" onClick={() => setForm({...form, budget: 'custom'})} style={{
                      padding:'10px 16px', border:'1px solid '+(form.budget==='custom'?'var(--lime)':'var(--border-hi)'),
                      background: form.budget==='custom'?'var(--lime)':'transparent', color: form.budget==='custom'?'var(--bg)':'var(--fg-dim)',
                      borderRadius:999, cursor:'pointer', fontSize:12, fontFamily:'var(--font-mono)', textTransform:'uppercase', letterSpacing:'0.05em'
                    }}>Vlastné</button>
                    {form.budget === 'custom' && (
                      <input
                        type="text"
                        autoFocus
                        value={form.customBudget || ''}
                        onChange={e => setForm({...form, customBudget: e.target.value})}
                        placeholder="Zadajte sumu…"
                        style={{
                          padding:'10px 16px', border:'1px solid var(--lime)', background:'var(--bg)',
                          color:'var(--fg)', borderRadius:999, fontSize:12, fontFamily:'var(--font-mono)',
                          letterSpacing:'0.05em', width:160, outline:'none'
                        }}
                      />
                    )}
                  </div>
                </div>
                <div>
                  <FieldLabel>Opíšte projekt</FieldLabel>
                  <textarea value={form.msg} onChange={e => setForm({...form, msg: e.target.value})} required rows={6}
                    placeholder="Pár viet o tom, čo potrebujete, časovom rámci, a kde ste v procese..."
                    style={{width:'100%', padding:16, background:'var(--bg)', border:'1px solid var(--border-hi)', borderRadius:12, color:'var(--fg)', fontFamily:'inherit', fontSize:14, resize:'vertical'}}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{justifyContent:'center', padding:'16px'}}>
                  Odoslať správu →
                </button>
                <p style={{fontSize:12, color:'var(--fg-muted)', textAlign:'center', fontFamily:'var(--font-mono)'}}>
                  Odpoviem do 24 hodín. Informácie sú dôverné.
                </p>
              </form>
            )}
          </div>

          <div style={{display:'flex', flexDirection:'column', gap:14}}>
            <div style={{padding:'18px 22px', background:'var(--bg-2)', border:'1px solid var(--border)', borderRadius:14}}>
              <div className="mono" style={{marginBottom:8, color:'var(--lime)', fontSize:11}}>● Voľné kapacity</div>
              <p style={{fontSize:13, color:'var(--fg-dim)', lineHeight:1.5, margin:0}}>
                Prijímam projekty so štartom ihneď.
              </p>
            </div>

            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
              {[
                { label: 'Email', val: 'michal@cecko.dev', href: 'mailto:michal@cecko.dev', full: true },
                { label: 'Telefón / WhatsApp', val: '+421 900 000 000', href: 'tel:+421900000000', full: true },
                { label: 'LinkedIn', val: '@michalcecko', href: '#' },
                { label: 'GitHub', val: '@michalcecko', href: '#' },
              ].map((c, i) => (
                <a key={i} href={c.href} style={{
                  gridColumn: c.full ? '1 / -1' : 'auto',
                  padding:'14px 18px', background:'var(--bg-2)', border:'1px solid var(--border)',
                  borderRadius:12, display:'flex', justifyContent:'space-between', alignItems:'center', gap:12,
                  transition:'all 0.2s', minWidth:0
                }}>
                  <div style={{minWidth:0}}>
                    <div className="mono" style={{marginBottom:2, fontSize:10}}>{c.label}</div>
                    <div style={{fontSize:14, fontWeight:500, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{c.val}</div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" style={{flexShrink:0, opacity:0.5}}><path d="M5 13l8-8m0 0H7m6 0v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              ))}
            </div>

            <div style={{padding:'18px 22px', background:'var(--bg-2)', border:'1px solid var(--border)', borderRadius:14}}>
              <div className="mono" style={{marginBottom:8, fontSize:11}}>Fakturačné údaje</div>
              <div style={{fontSize:13, color:'var(--fg-dim)', lineHeight:1.6}}>
                Michal Čečko · Freelance · Remote<br />
                IČO: 23260696
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Tweaks tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

function FieldLabel({ children }) {
  return <div className="mono" style={{marginBottom:8, color:'var(--fg-dim)'}}>{children}</div>;
}

function Field({ label, val, on, type = 'text', req }) {
  return (
    <div>
      <FieldLabel>{label}{req && <span style={{color:'var(--lime)'}}> *</span>}</FieldLabel>
      <input type={type} value={val} onChange={e => on(e.target.value)} required={req}
        style={{width:'100%', padding:'14px 16px', background:'var(--bg)', border:'1px solid var(--border-hi)', borderRadius:10, color:'var(--fg)', fontFamily:'inherit', fontSize:14}}
      />
    </div>
  );
}

// ========== CV PAGE ==========
function CVPage() {
  const [tweaks, setTweaks] = useTweaks();
  return (
    <>
      {tweaks.cursor && <Cursor />}
      <Nav active="cv" />
      <section className="section" style={{paddingTop: 140, maxWidth: 1000}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'start', marginBottom:60, paddingBottom:32, borderBottom:'1px solid var(--border)', flexWrap:'wrap', gap:20}}>
          <div>
            <span className="mono" style={{color:'var(--lime)'}}>— CV / Resume</span>
            <h1 style={{fontFamily:'var(--font-display)', fontSize:'clamp(40px, 6vw, 72px)', fontWeight:500, letterSpacing:'-0.03em', lineHeight:1, marginTop:12}}>Michal Čečko</h1>
            <div style={{marginTop:12, fontFamily:'var(--font-mono)', fontSize:13, color:'var(--fg-dim)'}}>
              Fullstack Vue + Laravel Dev · Fullstack Livewire + Laravel Dev · Backend Dev
            </div>
            <div style={{marginTop:16, display:'flex', gap:16, flexWrap:'wrap', fontFamily:'var(--font-mono)', fontSize:12, color:'var(--fg-dim)'}}>
              <span>Žilina, SK / Ostrava, CZ</span>
              <span>·</span>
              <a href="mailto:michal.cecko@gmail.com">michal.cecko@gmail.com</a>
              <span>·</span>
              <a href="https://www.linkedin.com/in/michal-%C4%8De%C4%8Dko-338892204" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <button onClick={() => window.print()} className="btn btn-ghost">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 2h6v3H4V2zM2 5h10v5H9v3H5v-3H2V5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
            Stiahnuť PDF
          </button>
        </div>

        <div style={{marginBottom:48}}>
          <h2 style={{fontFamily:'var(--font-display)', fontSize:28, fontWeight:500, letterSpacing:'-0.02em', marginBottom:20, paddingBottom:12, borderBottom:'1px solid var(--border)'}}>O mne</h2>
          <p style={{fontSize:16, color:'var(--fg-dim)', lineHeight:1.6, maxWidth:780}}>
            Som zapálený Laravel developer a team leader so solídnou skúsenosťou s vedením projektov od prvotného konceptu až po finálny deploy. Sústredím sa na čistý, udržiavateľný kód a hladkú spoluprácu v tíme. Hlavná silná stránka je Laravel, ale rád pracujem aj s modernými JavaScript frameworkami ako Vue.js a Nuxt.js. Cením si jasnú komunikáciu, čestnosť a spoľahlivosť. Mimo techniky som aktívny v prírode, športujem a trávim čas s rodinou a priateľmi.
          </p>
        </div>

        <CVSection title="Pracovné skúsenosti" items={[
          { yr: '01/2023 — dnes', role: 'Laravel Developer', co: 'Madelo · Ostrava, CZ', desc: 'Vediem backend vývoj a som product owner viacerých úspešných projektov. Navrhujem, vyvíjam a testujem robustné API. Úzko spolupracujem s frontend tímami a dizajnérmi pri integrácii UI a API. Pravidelne komunikujem s klientami a riešim ich požiadavky.' },
          { yr: '04/2022 — 04/2023', role: 'WordPress Developer', co: 'Madelo · Žilina, SK', desc: 'Custom WordPress témy, práca s ACF, WPML, WooCommerce. Vývoj custom pluginov.' },
          { yr: '03/2019 — dnes', role: 'Freelance Developer', co: 'Self-Employed · Žilina, SK', desc: 'Riadim kompletný životný cyklus projektov — od špecifikácie cez dizajn, frontend, backend až po deployment. Doručujem spoľahlivé a user-friendly weby a aplikácie pre rôznych klientov.' },
        ]} />

        <CVSection title="Vzdelanie" items={[
          { yr: '09/2020 — 03/2022', role: 'Informačné technológie', co: 'Žilinská univerzita v Žiline' },
          { yr: '09/2016 — 05/2020', role: 'Informačné technológie', co: 'Stredná priemyselná škola informačných technológií' },
        ]} />

        <div style={{marginBottom:48}}>
          <h2 style={{fontFamily:'var(--font-display)', fontSize:28, fontWeight:500, letterSpacing:'-0.02em', marginBottom:24, paddingBottom:12, borderBottom:'1px solid var(--border)'}}>Technické zručnosti</h2>
          <div style={{display:'flex', flexDirection:'column', gap:28}}>
            {[
              { area: 'Backend', main: ['Laravel', 'PHP', 'WordPress', 'REST API Design', 'TDD', 'PHPUnit', 'Pest', 'Livewire', 'FilamentPHP', 'Laravel 1st party packages'], extra: ['Nette', 'Symfony', 'Java', 'C', 'Python'] },
              { area: 'Data', main: ['MySQL / MariaDB', 'PostgreSQL', 'Redis'], extra: [] },
              { area: 'Frontend', main: ['JavaScript', 'Vue 3', 'Nuxt 4', 'Bootstrap 5', 'TailwindCSS', 'Inertia.js', 'jQuery', 'PrimeVue'], extra: ['React', 'Vue Query', 'Pinia'] },
              { area: 'Hybrid Mobile', main: ['Ionic (Vue 3 + Capacitor.js)'], extra: ['React', 'Android', 'Kotlin'] },
              { area: 'DevOps + Sysadmin', main: ['Docker', 'Traefik', 'Nginx', 'Apache', 'Linux', 'Bash', 'Digital Ocean (Droplets, S3)', 'Sentry'], extra: ['Grafana', 'Prometheus', 'Jenkins', 'Portainer'] },
            ].map(g => (
              <div key={g.area} style={{display:'grid', gridTemplateColumns:'180px 1fr', gap:32, alignItems:'start'}}>
                <div className="mono" style={{color:'var(--lime)'}}>{g.area}</div>
                <div style={{display:'flex', flexDirection:'column', gap:10}}>
                  <div>
                    <div className="mono" style={{fontSize:11, color:'var(--fg-muted)', marginBottom:8}}>Hlavné</div>
                    <div style={{display:'flex', flexWrap:'wrap', gap:6}}>
                      {g.main.map(t => <span key={t} className="chip chip-accent">{t}</span>)}
                    </div>
                  </div>
                  {g.extra.length > 0 && (
                    <div>
                      <div className="mono" style={{fontSize:11, color:'var(--fg-muted)', marginBottom:8, marginTop:6}}>Skúsenosť s</div>
                      <div style={{display:'flex', flexWrap:'wrap', gap:6}}>
                        {g.extra.map(t => <span key={t} className="chip">{t}</span>)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{marginBottom:48}}>
          <h2 style={{fontFamily:'var(--font-display)', fontSize:28, fontWeight:500, letterSpacing:'-0.02em', marginBottom:24, paddingBottom:12, borderBottom:'1px solid var(--border)'}}>Soft skills</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:16}}>
            {[
              ['Leadership & spolupráca', 'Skúsenosť s vedením tímov, podpora spolupráce a dovedenie projektov k úspechu.'],
              ['Project management', 'Plánovanie, organizácia a efektívne doručenie projektov.'],
              ['Transparentná komunikácia', 'Vždy otvorený a úprimný — ak niečo neviem, priznám to a zaviažem sa nájsť riešenie.'],
              ['Lifelong learner', 'Zvedavý a proaktívny — neznáme témy beriem ako príležitosť na rast.'],
              ['Tímový hráč', 'Človek, s ktorým si vieš pokecať pri pive, na tréningu, alebo na túre — dobré projekty začínajú dobrými vzťahmi.'],
            ].map(([t, d]) => (
              <div key={t} style={{padding:20, background:'var(--bg-2)', border:'1px solid var(--border)', borderRadius:14}}>
                <div style={{fontFamily:'var(--font-display)', fontSize:18, fontWeight:500, marginBottom:8}}>{t}</div>
                <div style={{fontSize:14, color:'var(--fg-dim)', lineHeight:1.5}}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{marginBottom:48}}>
          <h2 style={{fontFamily:'var(--font-display)', fontSize:28, fontWeight:500, letterSpacing:'-0.02em', marginBottom:24, paddingBottom:12, borderBottom:'1px solid var(--border)'}}>Jazyky</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:20}}>
            {[['Slovenčina', 'Rodný jazyk'], ['Čeština', 'Plynule'], ['Angličtina', 'Pokročilá'], ['Nemčina', 'Základy (B1)']].map(([l, lvl]) => (
              <div key={l} style={{padding:20, background:'var(--bg-2)', border:'1px solid var(--border)', borderRadius:14}}>
                <div style={{fontFamily:'var(--font-display)', fontSize:20, fontWeight:500}}>{l}</div>
                <div className="mono" style={{marginTop:8}}>{lvl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <Tweaks tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

function CVSection({ title, items }) {
  return (
    <div style={{marginBottom:48}}>
      <h2 style={{fontFamily:'var(--font-display)', fontSize:28, fontWeight:500, letterSpacing:'-0.02em', marginBottom:24, paddingBottom:12, borderBottom:'1px solid var(--border)'}}>{title}</h2>
      <div style={{display:'flex', flexDirection:'column', gap:28}}>
        {items.map((it, i) => (
          <div key={i} style={{display:'grid', gridTemplateColumns:'180px 1fr', gap:32}}>
            <div>
              <div className="mono" style={{color:'var(--lime)'}}>{it.yr}</div>
            </div>
            <div>
              <h3 style={{fontFamily:'var(--font-display)', fontSize:20, fontWeight:500, letterSpacing:'-0.01em'}}>{it.role}</h3>
              <div className="mono" style={{marginTop:4}}>{it.co}</div>
              <p style={{fontSize:15, color:'var(--fg-dim)', lineHeight:1.5, marginTop:10, maxWidth:640}}>{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { AboutPage, ServicesPage, WorkPage, CaseStudyPage, ContactPage, CVPage });

// Mount subpage based on data-page
const subRoot = document.getElementById('root');
if (subRoot) {
  const page = subRoot.dataset.page;
  const map = { about: AboutPage, services: ServicesPage, work: WorkPage, case: CaseStudyPage, contact: ContactPage, cv: CVPage };
  const Comp = map[page];
  if (Comp) ReactDOM.createRoot(subRoot).render(<Comp />);
}
