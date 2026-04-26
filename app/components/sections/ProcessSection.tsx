import Reveal from '../Reveal';
import type { Dict } from '../../i18n/dictionaries';

export default function ProcessSection({ t }: { t: Dict }) {
  return (
    <section className="section" id="process" data-screen-label="05 Process">
      <Reveal>
        <div className="section-head">
          <div className="section-head-meta">
            <span className="mono">{t.process.metaLabel}</span>
            <span className="section-head-meta-desc">{t.process.metaDesc}</span>
          </div>
          <h2 className="section-title">
            {t.process.title} <em>{t.process.titleEm}</em>
          </h2>
        </div>
      </Reveal>
      <div className="process-steps">
        {t.process.steps.map((p, i) => (
          <Reveal key={p.n} delay={i * 80}>
            <div className="process-step">
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
