import { Reveal } from './Reveal.jsx'

const pillars = [
  { n: 'I', title: 'Cuisine', text: 'Une cuisine indienne authentique, préparée avec soin.' },
  { n: 'II', title: 'Lounge', text: 'Une atmosphère chaleureuse et raffinée.' },
  { n: 'III', title: 'Hospitalité', text: 'L’hospitalité indienne traditionnelle, avec une touche contemporaine.' },
]

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container experience__grid">
        <Reveal className="experience__head">
          <p className="eyebrow">L’Expérience</p>
          <h2 id="experience-title" className="display">
            Une table. <em>Une histoire.</em>
          </h2>
        </Reveal>
        <ol className="pillars">
          {pillars.map((p, i) => (
            <Reveal as="li" className="pillar" key={p.title} delay={i * 0.12}>
              <span className="pillar__num" aria-hidden="true">
                {p.n}
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
