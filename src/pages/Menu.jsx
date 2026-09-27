import { useEffect, useMemo, useRef, useState } from 'react'
import { m } from 'framer-motion'
import ElephantMark from '../components/ElephantMark.jsx'
import ElephantDivider from '../components/ElephantDivider.jsx'
import MenuCategory from '../components/MenuCategory.jsx'
import { ease } from '../components/Reveal.jsx'
import { localizeMenu } from '../data/localizeMenu.js'
import { useLang } from '../i18n/index.jsx'
import { contact } from '../data/site.js'

export default function Menu() {
  const { lang, t } = useLang()
  const menu = useMemo(() => localizeMenu(lang), [lang])
  const [active, setActive] = useState(menu[0].id)
  const trackRef = useRef(null)

  // Deep links (/carte/#biryanis) arrive before React renders the sections; wait for
  // web fonts too, since swapping them shifts the layout.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    document.fonts.ready.then(() => document.getElementById(id)?.scrollIntoView())
  }, [])

  // Highlight the category crossing the middle of the viewport.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    menu.forEach((c) => io.observe(document.getElementById(c.id)))
    return () => io.disconnect()
  }, [menu])

  // Keep the active chip centred in the horizontally scrolling bar.
  useEffect(() => {
    const track = trackRef.current
    const chip = track?.querySelector(`[data-id="${active}"]`)
    if (!chip) return
    track.scrollTo({ left: chip.offsetLeft - track.clientWidth / 2 + chip.clientWidth / 2, behavior: 'smooth' })
  }, [active])

  return (
    <>
      <header className="menu-hero">
        <m.div
          className="menu-hero__inner"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.2 }}
        >
          <ElephantMark className="menu-hero__mark" />
          <p className="eyebrow eyebrow--center">Majestic India</p>
          <h1 className="display display--xl">
            {t.menuPage.title[0]} <em>{t.menuPage.title[1]}</em>
          </h1>
          <p className="menu-hero__lead">{t.menuPage.lead}</p>
        </m.div>
      </header>

      <nav className="menu-nav" aria-label={t.menuPage.navAria}>
        <ul className="menu-nav__track" ref={trackRef}>
          {menu.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} data-id={c.id} aria-current={active === c.id ? 'true' : undefined}>
                {c.nav}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="menu-body">
        {menu.map((c, i) => (
          <MenuCategory key={c.id} category={c} last={i === menu.length - 1} />
        ))}
        <footer className="menu-body__end">
          <ElephantDivider />
          <p className="menu-body__net">{t.menuPage.net}</p>
          <p>
            {t.menuPage.reserveLine}
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
          </p>
        </footer>
      </div>
    </>
  )
}
