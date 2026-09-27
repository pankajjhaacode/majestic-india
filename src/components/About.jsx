import ElephantMark from './ElephantMark.jsx'
import { Reveal } from './Reveal.jsx'
import { useLang } from '../i18n/index.jsx'

export default function About() {
  const { t, paths } = useLang()
  const a = t.about
  return (
    <section id="restaurant" className="section about" aria-labelledby="about-title">
      <span className="vertical-mark" aria-hidden="true">Majestic India</span>
      <ElephantMark className="about__watermark" />
      <div className="container about__grid">
        <Reveal className="about__head">
          <p className="eyebrow">{a.eyebrow}</p>
          <h2 id="about-title" className="display">
            {a.title[0]} <em>{a.title[1]}</em>
          </h2>
        </Reveal>
        <Reveal className="about__body" delay={0.15}>
          <p className="lead">{a.lead}</p>
          {a.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <a className="link-arrow" href={paths.menu}>
            {a.cta}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
