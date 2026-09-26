import ElephantMark from './ElephantMark.jsx'
import { Reveal } from './Reveal.jsx'

export default function About() {
  return (
    <section id="restaurant" className="section about" aria-labelledby="about-title">
      <span className="vertical-mark" aria-hidden="true">Majestic India</span>
      <ElephantMark className="about__watermark" />
      <div className="container about__grid">
        <Reveal className="about__head">
          <p className="eyebrow">Le Restaurant</p>
          <h2 id="about-title" className="display">
            Une invitation <em>au voyage</em>
          </h2>
        </Reveal>
        <Reveal className="about__body" delay={0.15}>
          <p className="lead">
            Majestic India est né d’une envie simple&nbsp;: partager la richesse de la cuisine indienne dans un lieu
            élégant et chaleureux, où chaque repas devient un moment à part.
          </p>
          <p>
            En cuisine, les épices sont au cœur de tout. Viandes et poissons marinés puis grillés au tandoor, currys
            mijotés avec patience, biryanis au riz basmati safrané, naans cuits dans le four traditionnel en terre
            cuite&nbsp;: nous préparons chaque plat avec soin, dans le respect des saveurs de l’Inde, du Nord au Sud.
          </p>
          <p>
            La salle, avec ses miroirs dorés, ses banquettes vert profond et ses objets venus d’Inde, invite à prendre le
            temps. Au lounge, on s’attarde autour d’un cocktail ou d’un lassi&nbsp;; aux beaux jours, la terrasse vous
            accueille à l’ombre de son auvent.
          </p>
          <p>
            Dîner en tête-à-tête, repas en famille ou soirée entre amis&nbsp;: à Paris, nous vous recevons avec
            l’hospitalité généreuse qui fait le charme de l’Inde. Bienvenue chez vous, bienvenue chez Majestic India.
          </p>
          <a className="link-arrow" href="/carte/">
            Découvrir la carte
          </a>
        </Reveal>
      </div>
    </section>
  )
}
