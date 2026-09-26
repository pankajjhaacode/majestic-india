import ElephantMark from './ElephantMark.jsx'
import { Reveal } from './Reveal.jsx'

export default function About() {
  return (
    <section id="maison" className="section about" aria-labelledby="about-title">
      <span className="vertical-mark" aria-hidden="true">Majestic India</span>
      <ElephantMark className="about__watermark" />
      <div className="container about__grid">
        <Reveal className="about__head">
          <p className="eyebrow">Notre Maison</p>
          <h2 id="about-title" className="display">
            Une invitation <em>au voyage</em>
          </h2>
        </Reveal>
        <Reveal className="about__body" delay={0.15}>
          <p className="lead">
            Chez Majestic India, l’Inde se raconte à voix basse&nbsp;: le parfum des épices, la chaleur du tandoor, la
            lumière douce d’un lounge où l’on prend le temps.
          </p>
          <p>
            Des grillades marinées aux herbes fraîches aux currys longuement mijotés, des biryanis au riz basmati safrané
            aux naans cuits dans le four traditionnel en terre cuite, chaque plat est préparé avec soin, fidèle aux
            traditions de la cuisine indienne.
          </p>
          <p>
            Un dîner à deux, une table entre amis ou un verre au lounge&nbsp;: à Paris, nous vous recevons avec
            l’hospitalité chaleureuse qui fait le charme de l’Inde.
          </p>
          <a className="link-arrow" href="/carte/">
            Découvrir la carte
          </a>
        </Reveal>
      </div>
    </section>
  )
}
