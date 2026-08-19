import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import { disciplines, projects } from './data/siteContent'

export default function App() {
  return <main>
    <Header />
    <Hero />

    <Section className="manifest">
      <img className="field-icon field-icon--fern" src="/images/varen.png" alt="" />
      <p className="eyebrow">Lentevuur</p>
      <blockquote>De natuur geeft de plek haar ritme.</blockquote>
      <p className="manifest-text">Mensen, planten en dieren bewegen mee met de seizoenen. Daarom ontwerp ik geen plaatje, maar een levende plek — gevormd door wat er al is en wat er kan ontstaan.</p>
    </Section>

    <Section className="disciplines" id="disciplines">
      <div className="section-intro"><p className="eyebrow">Drie disciplines</p><h2>Observeren.<br />Ontwerpen. Doen.</h2></div>
      <div className="discipline-list">
        {disciplines.map(item => <article className="discipline" key={item.no}><span>{item.no}</span><h3>{item.title}</h3><p>{item.text}</p><a href="#contact" aria-label={`Meer over ${item.title}`}>↗</a></article>)}
      </div>
    </Section>

    <Section className="work" id="werk">
      <div className="work-heading"><p className="eyebrow">Selectie van het werk</p><h2>Van eerste lijn<br />tot levende tuin.</h2><p>Ontwerp en uitvoering horen bij elkaar. Iedere plek begint met aandachtig kijken en krijgt vorm in schetsen, materiaal en beplanting.</p></div>
      <div className="project-grid">
        {projects.map(project => <figure className={project.className} key={project.title}><div className="image-wrap"><img src={project.image} alt={project.title} /></div><figcaption><p>{project.meta}</p><h3>{project.title}</h3></figcaption></figure>)}
      </div>
    </Section>

    <Section className="craft">
      <div className="craft-image"><img src="/images/beplantingsplan.jpeg" alt="Beplantingsplan voor een bostuin" /></div>
      <div className="craft-copy"><p className="eyebrow">Vakmanschap zichtbaar</p><h2>Een plan dat ook<br />werkelijkheid wordt.</h2><p>Een goed ontwerp houdt rekening met het dagelijks gebruik én het leven op de plek. Ik verbind analyse, ontwerp, plantenkennis en begeleiding bij de uitvoering.</p><ol><li><span>01</span>Kennismaken</li><li><span>02</span>De plek lezen</li><li><span>03</span>Ontwerpen</li><li><span>04</span>Realiseren</li><li><span>05</span>Laten groeien</li></ol></div>
      <img className="field-icon field-icon--spade" src="/images/schep.png" alt="" />
    </Section>

    <Section className="education">
      <div className="education-copy"><p className="eyebrow">Natuureducatie</p><h2>Leren begint<br />met verwondering.</h2><p>Niet vertellen hoe natuur werkt, maar samen kijken wat er gebeurt. In tuinen, op schoolpleinen en in het landschap.</p><a className="text-link" href="#contact">Ontdek de mogelijkheden <span>→</span></a></div>
      <figure><img src="/images/natuureducatie-water.jpg" alt="Kind onderzoekt het leven in en rond het water" /><figcaption>Onderzoeken, aanraken en zelf ontdekken.</figcaption></figure>
    </Section>

    <Section className="contact" id="contact">
      <p className="eyebrow">Een eerste stap</p><h2>Heb je een plek<br />die mag groeien?</h2><p>Vertel me over je tuin, schoolplein of idee. Dan kijken we samen wat de plek nodig heeft.</p><div className="contact-actions"><a className="button button--paper" href="mailto:hoi@lentevuur.nl">Plan een kennismaking</a><a className="text-link text-link--light" href="mailto:hoi@lentevuur.nl">Stel een vraag →</a></div>
    </Section>

    <Section className="about" id="over">
      <div className="about-image"><img src="/images/portret.jpg" alt="Tuinontwerper van Lentevuur aan het werk in een tuin" /></div>
      <div className="about-copy"><p className="eyebrow">Over Lentevuur</p><h2>Met aandacht voor<br />wat er al leeft.</h2><p className="intro">Lentevuur is een ontwerppraktijk voor groene plekken waarin mensen, planten en dieren samen ruimte krijgen.</p><p>Ik begin niet bij een stijl, maar bij de plek: de bodem, het licht, het water, de materialen en de manier waarop je er wilt leven. Vanuit die observaties ontstaat een ontwerp dat eigen voelt en met de jaren rijker wordt.</p><a className="text-link" href="#contact">Maak kennis <span>→</span></a></div>
    </Section>

    <footer><div className="footer-brand"><span>Lentevuur</span><p>Tuinontwerp · natuureducatie<br />· groene schoolpleinen</p></div><div className="footer-links"><a href="#werk">Projecten</a><a href="#disciplines">Wat ik doe</a><a href="#over">Over</a><a href="#contact">Contact</a></div><div className="footer-contact"><a href="mailto:hoi@lentevuur.nl">hoi@lentevuur.nl</a><p>Amsterdam en omgeving</p><small>© 2026 Lentevuur</small></div></footer>
  </main>
}
