import { Reveal, RevealImage } from './Reveal.jsx'
import { images } from '../data/site.js'
import { useLang } from '../i18n/index.jsx'

// Grid areas a–h are laid out in index.css (.gallery__grid) per breakpoint.
const shots = [
  { area: 'a', image: images.spread, sizes: '(min-width: 900px) 50vw, 100vw' },
  { area: 'b', image: images.whisky, sizes: '(min-width: 900px) 25vw, 50vw' },
  { area: 'c', image: images.curryPan, sizes: '(min-width: 900px) 25vw, 50vw' },
  { area: 'd', image: images.thali, sizes: '(min-width: 900px) 25vw, 50vw' },
  { area: 'e', image: images.biryaniPortrait, sizes: '(min-width: 900px) 25vw, 50vw' },
  { area: 'f', image: images.caveElephants, sizes: '(min-width: 900px) 50vw, 100vw' },
  { area: 'g', image: images.curryDeep, sizes: '(min-width: 900px) 25vw, 50vw' },
  { area: 'h', image: images.biryaniDark, sizes: '(min-width: 900px) 25vw, 50vw' },
]

export default function Gallery() {
  const { t } = useLang()
  const g = t.gallery
  return (
    <section id="galerie" className="section gallery" aria-labelledby="gallery-title">
      <span className="vertical-mark vertical-mark--right" aria-hidden="true">Majestic India</span>
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <p className="eyebrow">{g.eyebrow}</p>
            <h2 id="gallery-title" className="display">
              {g.title[0]} <em>{g.title[1]}</em>
            </h2>
          </div>
          <p className="section-head__lead">{g.lead}</p>
        </Reveal>
        <ul className="gallery__grid">
          {shots.map((s, i) => (
            <li key={s.area} className={`gallery__item gallery__item--${s.area}`}>
              <RevealImage image={s.image} sizes={s.sizes} delay={(i % 4) * 0.08} />
              <span className="gallery__line" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
