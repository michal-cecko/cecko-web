import { TESTIMONIALS } from '../../data';
import Reveal from '../Reveal';

export default function TestimonialsSection() {
  return (
    <section className="section" id="reviews" data-screen-label="06 Reviews">
      <Reveal>
        <div className="section-head">
          <div className="section-head-meta">
            <span className="mono">06 — Recenzie klientov</span>
            <span className="section-head-meta-desc">Čo o mne hovoria ľudia, s ktorými som pracoval.</span>
          </div>
          <h2 className="section-title">
            Slová <em>spokojných</em> klientov.
          </h2>
        </div>
      </Reveal>
      <div className="testimonials">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="testimonial">
              <div className="testimonial-quote-mark">&ldquo;</div>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.init}</div>
                <div className="testimonial-author-info">
                  <span className="testimonial-author-name">{t.name}</span>
                  <span className="testimonial-author-role">{t.role}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
