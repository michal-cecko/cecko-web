import type { Dict } from '../../i18n/dictionaries';

export default function Marquee({ t }: { t: Dict }) {
  const items = t.marquee.items;
  return (
    <section className="marquee">
      <div className="marquee-track">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <span key={i}>
              {items.map((label, j) => (
                <span key={j}>
                  {label} <i>✦</i>{' '}
                </span>
              ))}
            </span>
          ))}
      </div>
    </section>
  );
}
