import { Reveal, RevealImage } from './Reveal.jsx'
import { images } from '../data/site.js'

export default function Signature() {
  return (
    <section className="section signature" aria-labelledby="signature-title">
      <div className="container signature__grid">
        <div className="signature__main">
          <RevealImage image={images.salle} sizes="(min-width: 900px) 58vw, 100vw" />
          <span className="tag">L’Expérience Majestic</span>
        </div>
        <div className="signature__side">
          <RevealImage image={images.cocktails} delay={0.15} />
          <Reveal className="signature__caption" delay={0.2}>
            <h2 id="signature-title" className="display-sm">
              Restaurant <em>&amp; lounge</em>
            </h2>
            <p>
              Le temps d’un dîner ou d’une soirée qui se prolonge&nbsp;: un Kamasutra ou un Mai Tai au lounge, un lassi à
              la mangue, puis la table, ses currys et ses naans tout juste sortis du tandoor.
            </p>
          </Reveal>
          <RevealImage image={images.laiton} className="signature__small" delay={0.3} />
        </div>
      </div>
    </section>
  )
}
