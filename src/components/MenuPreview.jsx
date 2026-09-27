import { Reveal, RevealImage } from './Reveal.jsx'
import DishName from './DishName.jsx'
import { localizeMenu, localizeSignatures } from '../data/localizeMenu.js'
import { images } from '../data/site.js'
import { useLang } from '../i18n/index.jsx'

const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI']

export default function MenuPreview() {
  const { lang, t, paths } = useLang()
  const p = t.preview
  return (
    <section id="carte" className="section section--dark menu-preview" aria-labelledby="preview-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">{p.eyebrow}</p>
          <h2 id="preview-title" className="display">
            {p.title[0]} <em>{p.title[1]}</em>
          </h2>
          <p className="section-head__lead">{p.lead}</p>
        </Reveal>

        <ol className="dishes">
          {localizeSignatures(lang).map(({ dish, image }, i) => (
            <li className="dish" key={image}>
              <RevealImage image={images[image]} className="dish__img" delay={(i % 3) * 0.1} />
              <Reveal className="dish__body" delay={(i % 3) * 0.1 + 0.1}>
                <span className="dish__num" aria-hidden="true">
                  {numerals[i]}
                </span>
                <h3 className="dish__name">
                  <DishName name={dish.name} alt={dish.alt} />
                </h3>
                {dish.desc && <p className="dish__desc">{dish.desc}</p>}
                <p className="dish__price">{dish.price}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="menu-preview__foot">
          <ul className="cat-list" aria-label={p.catsAria}>
            {localizeMenu(lang).map((c) => (
              <li key={c.id}>
                <a href={`${paths.menu}#${c.id}`}>{c.nav}</a>
              </li>
            ))}
          </ul>
          <a className="btn btn--gold" href={paths.menu}>
            {p.cta}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
