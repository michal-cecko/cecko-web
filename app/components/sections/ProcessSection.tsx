import { PROCESS } from '../../data';

export default function ProcessSection() {
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
              {p.outputs.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
