import { Reveal, RevealImage } from './Reveal.jsx'
import DishName from './DishName.jsx'
import { menu, signatures, findDish } from '../data/menu.js'
import { images } from '../data/site.js'

const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI']

export default function MenuPreview() {
  return (
    <section id="carte" className="section section--dark menu-preview" aria-labelledby="preview-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">La Carte</p>
          <h2 id="preview-title" className="display">
            Nos <em>signatures</em>
          </h2>
          <p className="section-head__lead">Du tandoor aux currys mijotés, quelques plats choisis dans notre carte.</p>
        </Reveal>

        <ol className="dishes">
          {signatures.map((s, i) => {
            const dish = findDish(s.category, s.name)
            return (
              <li className="dish" key={s.name}>
                <RevealImage image={images[s.image]} className="dish__img" delay={(i % 3) * 0.1} />
                <Reveal className="dish__body" delay={(i % 3) * 0.1 + 0.1}>
                  <span className="dish__num" aria-hidden="true">
                    {numerals[i]}
                  </span>
                  <h3 className="dish__name">
                    <DishName name={dish.name} />
                  </h3>
                  {dish.desc && <p className="dish__desc">{dish.desc}</p>}
                  <p className="dish__price">{dish.price}</p>
                </Reveal>
              </li>
            )
          })}
        </ol>

        <Reveal className="menu-preview__foot">
          <ul className="cat-list" aria-label="Rubriques de la carte">
            {menu.map((c) => (
              <li key={c.id}>
                <a href={`/carte/#${c.id}`}>{c.nav}</a>
              </li>
            ))}
          </ul>
          <a className="btn btn--gold" href="/carte/">
            Découvrir la carte complète
          </a>
        </Reveal>
      </div>
    </section>
  )
}
