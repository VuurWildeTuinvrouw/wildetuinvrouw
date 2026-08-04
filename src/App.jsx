import { ArrowRight, Droplets, Flower2, Recycle, Sprout, Trees, UsersRound } from 'lucide-react'
import Header from './components/Header'
import Section from './components/Section'
import { ecologicalBenefits, focusAreas, portfolioItems, services, steps } from './data/siteContent'
import './styles.css'

function Card({ title, text, children }) {
  return <article className="card"><h3>{title}</h3>{text && <p>{text}</p>}{children}</article>
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home" className="hero hero-video" aria-label="Hero met rustig bewegend sfeerbeeld van een ecologische stadstuin">
          <video
            className="hero-media"
            aria-hidden="true"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-ecologische-stadstuin-amsterdam.webp"
          >
            <source src="/videos/hero-wuivende-bloemen.webm" type="video/webm" />
            <source src="/videos/hero-wuivende-bloemen.mp4" type="video/mp4" />
          </video>
          <div className="hero-fallback" aria-hidden="true"></div>
          <div className="hero-overlay" aria-hidden="true"></div>
          <div className="hero-content">
            <p className="eyebrow">De Wilde Tuinvrouw</p>
            <h1>Ecologisch tuinontwerp voor levende stadstuinen rond Amsterdam</h1>
            <p className="lead">De Wilde Tuinvrouw ontwerpt ecologische tuinen waarin mensen, kinderen, planten en dieren zich thuis voelen. Van stadstuin tot gezinstuin, van geveltuin tot groen schoolplein: een levende plek met inheemse beplanting, waterwijze keuzes en aandacht voor bodem, biodiversiteit en dagelijks gebruik.</p>
            <div className="button-row">
              <a className="button primary" href="#contact">Plan een kennismaking <ArrowRight size={18} /></a>
              <a className="button secondary" href="#werkwijze">Bekijk mijn werkwijze</a>
            </div>
          </div>
        </section>

        <Section eyebrow="Waarmee ik help" title="Drie diensten voor een tuin die leeft">
          <div className="grid three">
            {services.map((service) => <Card key={service.title} {...service} />)}
          </div>
        </Section>

        <Section id="tuinontwerp" eyebrow="Tuinontwerp" title="Ecologisch tuinontwerp voor stadstuinen en gezinstuinen" className="split">
          <div>
            <p>Een ecologisch tuinontwerp gaat verder dan mooie planten kiezen. Ik kijk naar de plek als geheel: bodem, water, licht, wind, bestaande materialen, dagelijks gebruik en de planten en dieren in de omgeving.</p>
            <p>Geschikt voor stadstuinen, gezinstuinen, pionierstuinen, schaduwtuinen, klimaattuinen, eetbare siertuinen, geveltuinen, balkons, daktuinen en tuinen met meer ruimte voor vogels, vlinders en andere dieren.</p>
            <a className="inline-link" href="#contact">Vraag een tuinontwerp aan</a>
          </div>
          <div className="feature-list">
            <span>Vlekkenplan</span><span>Tuinanalyse</span><span>Schetsontwerp</span><span>Compleet tuinontwerp</span><span>Kindvriendelijke ecologische tuin</span>
          </div>
        </Section>

        <Section id="beplantingsplan" eyebrow="Beplantingsplan & aanlegbegeleiding" title="Van plantenlijst naar uitvoerbaar ecologisch plan" className="split muted">
          <div>
            <p>Een beplantingsplan is meer dan een lijst met planten. Het is een doordachte opbouw van lagen, bloeitijden, structuren, kleuren, hoogtes en functies.</p>
            <p>Ik werk met planten die passen bij bodem, licht, water, gebruik en de dieren die je wilt ondersteunen. Waar mogelijk kies ik voor grotendeels inheemse beplanting, aangevuld met passende eetbare of sierlijke soorten.</p>
          </div>
          <Card title="Aanlegbegeleiding" text="Meedenken over aanlegvolgorde, overleg met een hovenier, plantselectie, bodemvoorbereiding, begeleiding tijdens een plantdag en groencoaching na aanleg." />
        </Section>

        <Section id="natuureducatie" eyebrow="Natuureducatie" title="Groene schoolpleinen, natuurlessen en workshops">
          <div className="grid two">
            <Card title="Groene schoolpleinen" text="Een groen schoolplein is leeromgeving, speelplek en kleine biotoop tegelijk. Met ruimte voor vrij spel, rust, schaduw, water, bodem, eetbare planten en lessen buiten het klaslokaal." />
            <Card title="Natuurlessen en workshops" text="Activiteiten over bodemdiertjes, vogels, vlinders, zaden, eetbare planten, compost, seizoenen en kleine ecosystemen in de stad. Onderzoekend, toegankelijk en praktisch." />
          </div>
        </Section>

        <Section id="werkwijze" eyebrow="Werkwijze" title="Van kennismaking naar levende tuin">
          <div className="steps">
            {steps.map((step, index) => <div className="step" key={step}><strong>{index + 1}</strong><span>{step}</span></div>)}
          </div>
          <div className="center"><a className="button primary" href="#contact">Vraag een voorstel aan</a></div>
        </Section>

        <Section eyebrow="Voor wie" title="Voor mensen die een tuin willen die leeft" className="split">
          <p>Voor stadstuinen, gezinstuinen, geveltuinen, groene balkons, daktuinen en schoolpleinen in Amsterdam en omgeving. Met aandacht voor kinderen, vogels, vlinders, bodemleven, regenwater en hergebruik van materialen.</p>
          <div className="quote-card"><UsersRound /><p>“Een tuin kan tegelijk wild en verzorgd zijn. Eetbaar en sierlijk. Kindvriendelijk en rijk aan dieren.”</p></div>
        </Section>

        <Section id="portfolio" eyebrow="Portfolio-preview" title="Eerste beeldcases">
          <div className="grid three">
            {portfolioItems.map((item) => (
              <Card key={item.title} title={item.title} text={item.text}>
                <p className="location">{item.location}</p>
                <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </Card>
            ))}
          </div>
        </Section>

        <Section eyebrow="Waarom ecologisch" title="Ontwerp, gebruik en natuur werken samen" className="muted">
          <div className="benefits">
            {ecologicalBenefits.map((benefit, i) => {
              const icons = [Sprout, Flower2, Droplets, Recycle]
              const Icon = icons[i]
              return <div key={benefit}><Icon /><span>{benefit}</span></div>
            })}
          </div>
        </Section>

        <Section id="over" eyebrow="Over De Wilde Tuinvrouw" title="Deskundig, creatief, educatief en toegankelijk" className="split">
          <div>
            <p>Ik ben De Wilde Tuinvrouw: ecologisch tuinontwerper met liefde voor levende tuinen, lokale flora en fauna, kindvriendelijke buitenruimtes en praktische kennisoverdracht.</p>
            <p>Ik begin niet bij stijl, maar bij de plek. Wat is er al? Wat kan blijven? Welke materialen kunnen opnieuw gebruikt worden? Welke planten passen bij deze bodem? En hoe wil jij de tuin gebruiken?</p>
          </div>
          <div className="feature-list compact">{focusAreas.map((area) => <span key={area}>{area}</span>)}</div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Wil je weten wat er mogelijk is met jouw tuin?" className="contact-section">
          <div className="contact-grid">
            <div>
              <p>Vertel kort over je buitenruimte, schoolplein of idee. Ik lees je bericht zorgvuldig en reageer meestal binnen 2 werkdagen.</p>
              <p>Ik neem een beperkt aantal projecten per maand aan om zorgvuldig te kunnen werken.</p>
              <p className="work-area">Werkgebied: Amsterdam, Haarlem, Zaandam, Almere, Hilversum, Alkmaar en omgeving.</p>
            </div>
            <form className="mock-form">
              <label>Naam<input placeholder="Je naam" /></label>
              <label>E-mailadres<input placeholder="naam@example.nl" /></label>
              <label>Gemeente<input placeholder="Bijvoorbeeld Amsterdam" /></label>
              <label>Gewenste hulp<select><option>Tuinontwerp</option><option>Beplantingsplan</option><option>Aanlegbegeleiding</option><option>Natuureducatie</option></select></label>
              <label>Bericht<textarea placeholder="Vertel kort over je buitenruimte, wensen, planning en budgetindicatie." /></label>
              <button type="button" className="button primary">Start je aanvraag</button>
            </form>
          </div>
        </Section>
      </main>
      <footer className="site-footer">
        <div><strong>De Wilde Tuinvrouw</strong><p>Ecologisch tuinontwerp, beplantingsplannen en aanlegbegeleiding voor levende tuinen rond Amsterdam.</p></div>
        <div><a href="#contact">Contact</a><a href="#privacy">Privacyverklaring</a><a href="#portfolio">Portfolio</a></div>
      </footer>
    </>
  )
}
