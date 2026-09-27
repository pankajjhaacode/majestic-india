import { Reveal, RevealImage } from './Reveal.jsx'
import { images } from '../data/site.js'
import { useLang } from '../i18n/index.jsx'

export default function Signature() {
  const { t } = useLang()
  const s = t.signature
  return (
    <section className="section signature" aria-labelledby="signature-title">
      <div className="container signature__grid">
        <div className="signature__main">
          <RevealImage image={images.salleMiroirs} sizes="(min-width: 900px) 58vw, 100vw" />
          <span className="tag">{s.tag}</span>
        </div>
        <div className="signature__side">
          <RevealImage image={images.barLounge} delay={0.15} />
          <Reveal className="signature__caption" delay={0.2}>
            <h2 id="signature-title" className="display-sm">
              {s.title[0]} <em>{s.title[1]}</em>
            </h2>
            <p>{s.text}</p>
          </Reveal>
          <RevealImage image={images.decorKrishna} className="signature__small" delay={0.3} />
        </div>
      </div>
    </section>
  )
}
