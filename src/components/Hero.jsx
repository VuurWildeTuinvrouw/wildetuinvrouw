import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="hero hero-video" aria-label="Ecologische stadstuin">
      <video
        className="hero-media"
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-ecologische-stadstuin-amsterdam.webp"
      >
        <source src="/videos/hero-wuivende-bloemen.mp4" type="video/mp4" />
      </video>
      <div className="hero-fallback" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow">De Wilde Tuinvrouw</p>
        <h1>Ecologisch tuinontwerp voor levende stadstuinen</h1>
        <p className="lead">De Wilde Tuinvrouw ontwerpt ecologische tuinen waarin mensen, kinderen, planten en dieren zich thuis voelen. Van stadstuin tot gezinstuin, van geveltuin tot groen schoolplein: een levende plek met inheemse beplanting, waterwijze keuzes en aandacht voor bodem, biodiversiteit en dagelijks gebruik.</p>
        <div className="button-row">
          <a className="button primary" href="#contact">Plan een kennismaking <ArrowRight size={18} /></a>
          <a className="button secondary" href="#werkwijze">Bekijk mijn werkwijze</a>
        </div>
      </div>
    </section>
  )
}
