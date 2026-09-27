import { Reveal } from './Reveal.jsx'
import { useLang } from '../i18n/index.jsx'

const numerals = ['I', 'II', 'III']

export default function Experience() {
  const { t } = useLang()
  const e = t.experience
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container experience__grid">
        <Reveal className="experience__head">
          <p className="eyebrow">{e.eyebrow}</p>
          <h2 id="experience-title" className="display">
            {e.title[0]} <em>{e.title[1]}</em>
          </h2>
        </Reveal>
        <ol className="pillars">
          {e.pillars.map((p, i) => (
            <Reveal as="li" className="pillar" key={p.title} delay={i * 0.12}>
              <span className="pillar__num" aria-hidden="true">
                {numerals[i]}
              </span>
              <h3 className="pillar__title">{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
