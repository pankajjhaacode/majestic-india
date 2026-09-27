import { m } from 'framer-motion'
import ElephantMark from './ElephantMark.jsx'
import { ease } from './Reveal.jsx'
import { images, reserveHref } from '../data/site.js'
import { useLang } from '../i18n/index.jsx'

const rise = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease, delay },
})

export default function Hero() {
  const { hero } = images
  const { t, paths } = useLang()
  return (
    <section id="accueil" className="hero" aria-labelledby="hero-title">
      <m.img
        className="hero__bg"
        src={hero.src}
        srcSet={hero.srcSet}
        sizes="100vw"
        alt=""
        width={hero.w}
        height={hero.h}
        fetchpriority="high"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.8, ease }}
      />
      <div className="hero__veil" />

      <div className="hero__content">
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6, ease, delay: 0.2 }}>
          <ElephantMark className="hero__mark" />
        </m.div>
        <m.h1 id="hero-title" className="hero__title" {...rise(0.4)}>
          <span>Majestic</span> <span>India</span>
        </m.h1>
        <m.p className="hero__sub" {...rise(0.6)}>
          Lounge &amp; Restaurant Indien
        </m.p>
        <m.span
          className="hero__rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.8 }}
          aria-hidden="true"
        />
        <m.p className="hero__tagline" {...rise(0.95)}>
          {t.hero.tagline}
        </m.p>
        <m.div className="hero__ctas" {...rise(1.1)}>
          <a className="btn btn--light" href={paths.menu}>
            {t.hero.discover}
          </a>
          <a className="btn btn--gold" href={reserveHref(paths)}>
            {t.hero.reserve}
          </a>
        </m.div>
      </div>

      <a href="#restaurant" className="hero__scroll">
        <span>{t.hero.scroll}</span>
        <i aria-hidden="true" />
      </a>
    </section>
  )
}
