import { useState } from "react";
import PrivacyPage from "./Privacy.jsx";

const disciplines = [
  { title: "Ontwerp", text: "Tuinontwerp en groene buitenruimtes voor kinderen, vanuit bodem, licht, water, gebruik en wat er al leeft.", href: "#ontwerp" },
  { title: "Natuureducatie", text: "Buiten leren door te kijken, te onderzoeken en zelf onderdeel te worden van de plek.", href: "#natuureducatie" },
  { title: "Schrijven & onderzoek", text: "Communicatie, journalistiek en onderzoek op het snijvlak van natuur, tuinieren en duurzame landbouw.", href: "#schrijven" },
];

const projects = [
  { title: "Een tuin als leefgebied", meta: "Gezinstuin · biodiversiteit · Alkmaar", images: [{ src: "/media/project-alkmaar-kind-biodiversiteit.jpg", alt: "Hommel in de beplanting met een kind op de achtergrond in de gezinstuin in Alkmaar" }, { src: "/media/project-alkmaar-beplanting.jpg", alt: "Rijke beplanting in de ecologische gezinstuin in Alkmaar" }], className: "project project--wide" },
  { title: "Van stenen plaats naar stadstuin", meta: "Tuinontwerp · aanleg · beplanting · Amsterdam", images: [{ src: "/media/project-amsterdam-stapstenen.jpg", alt: "Stapstenenpad tussen de beplanting in de Amsterdamse stadstuin" }, { src: "/media/project-transformatie.jpg", alt: "Van stenen plaats naar stadstuin in Amsterdam" }, { src: "/media/project-amsterdam-in-gebruik.jpg", alt: "De Amsterdamse stadstuin in gebruik" }], className: "project project--portrait" },
  { title: "Plan op maat in Oosterwold", meta: "Nieuwbouwtuin · eetbaar groen · Almere", images: [{ src: "/media/project-oosterwold-plan.jpg", alt: "Tuinplan op maat in Oosterwold" }], className: "project project--landscape" },
  { title: "Voortuin bij een jaren-dertigwoning", meta: "Beplantingsplan · uitvoeringsbegeleiding · Hilversum", images: [{ src: "/media/project-hilversum-aanleg.jpg", alt: "Aanleg van de voortuin in Hilversum" }, { src: "/media/project-hilversum-beplantingsplan.jpg", alt: "Beplantingsplan voor een jaren-dertigwoning in Hilversum" }], className: "project project--compact" },
];

const impressions = [
  { src: "/media/hero-alkmaar-dansende-bloemen.mp4", label: "Beplanting voor een levende tuin" },
  { src: "/media/impressie-leven.mp4", label: "Leven in het groen" },
  { src: "/media/impressie-ontdekken.mp4", label: "Ontdekken" },
  { src: "/media/impressie-seizoenen.mp4", label: "Seizoenen" },
];

export default function App() {
  const isPrivacy = window.location.pathname === "/privacy" || window.location.pathname === "/privacy/";
  return isPrivacy ? <PrivacyPage /> : <Home />;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [impression, setImpression] = useState(0);
  const [projectSlides, setProjectSlides] = useState({});

  const changeProjectSlide = (title, length, direction) => {
    setProjectSlides((current) => ({
      ...current,
      [title]: ((current[title] || 0) + direction + length) % length,
    }));
  };

  return <main>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="De wilde tuinvrouw, naar boven">De wilde tuinvrouw</a>
      <nav className={menuOpen ? "nav nav--open" : "nav"} aria-label="Hoofdnavigatie">
        <a href="#werk">Projecten</a><a href="#disciplines">Expertise</a><a href="#over">Over mij</a><a href="#contact">Contact</a>
      </nav>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Menu openen">{menuOpen ? "Sluit" : "Menu"}</button>
    </header>

    <section className="hero hero--project" id="top">
      <img src="/media/project-stadstuin.jpg" alt="Ecologische gezinstuin in Alkmaar, ontworpen door De wilde tuinvrouw" />
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="kicker kicker--light">Tuinontwerp · Natuureducatie · Schrijven & onderzoek</p>
        <h1>Plekken die<br />mogen groeien.</h1>
        <div className="hero-actions"><a className="button button--fire" href="#contact">Plan een kennismaking</a><a className="text-link text-link--light" href="#werk">Bekijk projecten <span>↘</span></a></div>
      </div>
    </section>

    <section className="manifest section-pad">
      <img className="field-icon field-icon--fern" src="/media/icon-hondsroos.png" alt="" />
      <p className="section-wordmark">De wilde tuinvrouw</p>
      <h2>De natuur geeft de plek haar ritme.</h2>
      <blockquote className="manifest-text">“Mensen, planten en dieren bewegen mee met de seizoenen. Daarom ontwerp ik geen plaatje, maar een levende plek — gevormd door wat er al is en wat er kan ontstaan.”</blockquote>
    </section>

    <section className="contact section-pad" id="contact">
      <p className="eyebrow">Een eerste stap</p><h2>Heb je een plek<br />die mag groeien?</h2><p>Vertel me over je tuin, schoolplein of idee. Dan kijken we samen wat de plek nodig heeft.</p><div className="contact-actions"><a className="button button--paper" href="mailto:info@wildetuinvrouw.nl?subject=Kennismaking">Plan een kennismaking</a><a className="text-link text-link--light" href="mailto:info@wildetuinvrouw.nl">Stel een vraag →</a></div>
    </section>

    <section className="disciplines section-pad" id="disciplines">
      <div className="section-intro"><p className="eyebrow">Drie disciplines</p><h2>Observeren.<br />Ontwerpen. Doen.</h2></div>
      <div className="discipline-grid">{disciplines.map((item) => <a className="discipline-card" key={item.title} href={item.href}><h3>{item.title}</h3><p>{item.text}</p><span>Bekijk expertise →</span></a>)}</div>
    </section>

    <section className="work section-pad" id="werk">
      <div className="work-heading"><p className="eyebrow">Selectie van het werk</p><h2>Van eerste lijn<br />tot levende tuin.</h2><p>Ontwerp en uitvoering horen bij elkaar. Iedere plek begint met aandachtig kijken en krijgt vorm in schetsen, materiaal en beplanting.</p></div>
      <img className="design-trace" src="/media/project-1-digitaal-schetsontwerp.png" alt="Digitaal schetsontwerp van een tuin door De wilde tuinvrouw" />
      <div className="project-grid">{projects.map((project) => {
        const activeSlide = projectSlides[project.title] || 0;
        const activeImage = project.images[activeSlide];
        return <figure className={project.className} key={project.title}>
          <div className="image-wrap project-slider">
            <img key={activeImage.src} src={activeImage.src} alt={activeImage.alt} />
            {project.images.length > 1 && <div className="project-slider-controls" aria-label={`Blader door beelden van ${project.title}`}>
              <button type="button" onClick={() => changeProjectSlide(project.title, project.images.length, -1)} aria-label="Vorig beeld">←</button>
              <span>{activeSlide + 1} / {project.images.length}</span>
              <button type="button" onClick={() => changeProjectSlide(project.title, project.images.length, 1)} aria-label="Volgend beeld">→</button>
            </div>}
          </div>
          <figcaption><p>{project.meta}</p><h3>{project.title}</h3></figcaption>
        </figure>;
      })}</div>
    </section>

    <section className="impression" aria-label="Impressie van het werk van De wilde tuinvrouw">
      <video key={impressions[impression].src} autoPlay muted playsInline preload="metadata" onEnded={() => setImpression((impression + 1) % impressions.length)}><source src={impressions[impression].src} type="video/mp4" /></video>
      <div className="impression-shade" />
      <div className="impression-copy"><p className="eyebrow">Impressie</p><h2>{impressions[impression].label}</h2></div>
      <div className="impression-controls" aria-label="Kies een impressie">{impressions.map((item, index) => <button key={item.src} className={index === impression ? "is-active" : ""} onClick={() => setImpression(index)} aria-label={`Toon ${item.label}`} aria-pressed={index === impression}><span>{String(index + 1).padStart(2, "0")}</span></button>)}</div>
    </section>

    <section className="craft section-pad" id="ontwerp">
      <div className="craft-image"><img src="/media/project-2-digitaal-ontwerp.jpg" alt="Digitaal tuinontwerp met beplanting, hergebruik en verschillende verblijfsplekken" /></div>
      <div className="craft-copy"><p className="eyebrow">Van inzicht naar uitvoering</p><h2>Een plan dat ook<br />werkelijkheid wordt.</h2><p>Een goed ontwerp houdt rekening met het dagelijks gebruik én het leven op de plek. Ik verbind analyse, ontwerp, plantenkennis en begeleiding bij de uitvoering.</p><ol><li><span>01</span>Kennismaken</li><li><span>02</span>De plek lezen</li><li><span>03</span>Ontwerpen</li><li><span>04</span>Realiseren</li><li><span>05</span>Laten groeien</li></ol><a className="text-link" href="#contact">Lees meer over mijn werkwijze <span>→</span></a></div>
      <img className="field-icon field-icon--spade" src="/media/icon-spade.png" alt="" />
    </section>

    <section className="children section-pad" id="kinderen">
      <div className="children-copy"><p className="eyebrow">Groene buitenruimtes voor kinderen</p><h2>Ruimte om te spelen,<br />leren en ontdekken.</h2><p>Participatief ontworpen buitenruimtes waarin kinderen kunnen bewegen, onderzoeken en meebouwen aan een levende plek.</p><a className="text-link" href="#contact">Bekijk de mogelijkheden <span>→</span></a></div>
      <figure className="children-image"><img src="/media/groene-buitenruimtes-kinderen.jpg" alt="Kind oogst in een eetbare groene buitenruimte" /></figure>
    </section>

    <section className="education section-pad" id="natuureducatie">
      <img className="section-icon section-icon--education" src="/media/icon-roodborstje.png" alt="" />
      <div className="education-copy"><p className="eyebrow">Natuureducatie</p><h2>Leren begint<br />met verwondering.</h2><p>Samen op avontuur, lerend met hoofd, hart en handen. In tuinen, op schoolpleinen en in de wilde (stads)natuur.</p><a className="text-link" href="#contact">Ontdek de mogelijkheden <span>→</span></a></div>
      <figure><img src="/media/natuureducatie-observatie.jpg" alt="Kinderen observeren natuur in een tuinlandschap" /><figcaption>Samen observeren, onderzoeken en verwonderen.</figcaption></figure>
    </section>

    <section className="writing section-pad" id="schrijven">
      <img className="section-icon section-icon--writing" src="/media/icon-veer.png" alt="" />
      <div><p className="eyebrow">Schrijven & onderzoek</p><h2>Van veldwerk<br />naar een helder verhaal.</h2></div>
      <div><p>Communicatie, journalistieke opdrachten en onderzoek op het snijvlak van natuur, tuinieren en duurzame landbouw.</p><a className="report-link" href="https://wij.land/kennisbank/wie-betaalt-voor-een-gezond-landschap" target="_blank" rel="noreferrer"><span>Voorbeeldonderzoek</span><strong>Wie betaalt voor een gezond landschap?</strong><small>Bekijk het rapport voor Wij.land ↗</small></a><a className="text-link" href="mailto:info@wildetuinvrouw.nl">Bespreek een opdracht <span>→</span></a></div>
    </section>

    <section className="about section-pad" id="over">
      <div className="about-image"><img src="/media/portret.jpg" alt="Ontwerper Priscilla Tienkamp van De wilde tuinvrouw aan het werk in een tuin" /></div>
      <div className="about-copy"><p className="eyebrow">Over De wilde tuinvrouw</p><h2>Met aandacht voor<br />wat er al leeft.</h2><p className="intro">De wilde tuinvrouw is de ontwerppraktijk van Priscilla Tienkamp, voor groene plekken waarin mensen, planten en dieren samen ruimte krijgen.</p><p>Ik begin niet bij een stijl, maar bij de plek: de bodem, het licht, het water, de materialen en de manier waarop je er wilt leven. Vanuit die observaties ontstaat een ontwerp dat eigen voelt en met de jaren rijker wordt.</p><a className="text-link" href="#contact">Maak kennis <span>→</span></a></div>
    </section>

    <footer><div className="footer-brand"><span>De wilde tuinvrouw</span><p>Tuinontwerp · groene buitenruimtes voor kinderen<br />Natuureducatie · schrijven & onderzoek</p></div><div className="footer-links"><a href="#werk">Projecten</a><a href="#disciplines">Expertise</a><a href="#over">Over mij</a><a href="#contact">Contact</a><a href="/privacy">Privacy</a><span>KvK 95981675</span></div></footer>
  </main>;
}
