export default function Marquee() {
  return (
    <section className="marquee">
      <div className="marquee-track">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <span key={i}>
              Laravel <i>✦</i> FilamentPHP <i>✦</i> Vue.js <i>✦</i> Nuxt <i>✦</i> React <i>✦</i> Flutter <i>✦</i> Ionic <i>✦</i> React Native <i>✦</i> Tailwind <i>✦</i> Node.js <i>✦</i> AI integrácie <i>✦</i>{' '}
            </span>
          ))}
      </div>
    </section>
  );
}
