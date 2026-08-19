export default function Hero() {
  return <section className="hero" id="top">
    <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src="/videos/hero-magnolia.mp4" type="video/mp4" /></video>
    <div className="hero-shade" />
    <div className="hero-copy">
      <p className="kicker kicker--light">Tuinontwerp · Natuureducatie · Groene schoolpleinen</p>
      <h1>Plekken die<br />mogen groeien.</h1>
      <div className="hero-actions"><a className="button button--fire" href="#contact">Plan een kennismaking</a><a className="text-link text-link--light" href="#werk">Bekijk projecten <span>↘</span></a></div>
    </div>
    <span className="hero-note">Amsterdam en omgeving</span>
  </section>
}
