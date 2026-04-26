import { TESTIMONIALS } from '../../data';
import Reveal from '../Reveal';
import type { Dict } from '../../i18n/dictionaries';

export default function TestimonialsSection({ t }: { t: Dict }) {
  return (
    <section className="section" id="reviews" data-screen-label="06 Reviews">
      <Reveal>
        <div className="section-head">
          <div className="section-head-meta">
            <span className="mono">{t.testimonials.metaLabel}</span>
            <span className="section-head-meta-desc">{t.testimonials.metaDesc}</span>
          </div>
          <h2 className="section-title">
            {t.testimonials.title} <em>{t.testimonials.titleEm}</em> {t.testimonials.titleAfter}
          </h2>
        </div>
      </Reveal>
      <div className="testimonials">
        {TESTIMONIALS.map((tn, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="testimonial">
              <div className="testimonial-quote-mark">&ldquo;</div>
              <p className="testimonial-quote">{tn.quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{tn.init}</div>
                <div className="testimonial-author-info">
                  <span className="testimonial-author-name">{tn.name}</span>
                  <span className="testimonial-author-role">{tn.role}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
