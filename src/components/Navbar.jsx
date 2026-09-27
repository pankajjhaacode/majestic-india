import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { navLinks, reserveHref, contact } from '../data/site.js'
import { useLang } from '../i18n/index.jsx'
import LangSwitch from './LangSwitch.jsx'
import { ease } from './Reveal.jsx'
import ElephantMark from './ElephantMark.jsx'

export default function Navbar({ page }) {
  const { t, paths } = useLang()
  const links = navLinks(t, paths)
  const reserve = reserveHref(paths)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const headerRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobile menu: lock page scroll, close on Escape, keep Tab focus inside the header.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    headerRef.current.querySelector('.mnav a')?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return
      const focusables = [...headerRef.current.querySelectorAll('a, button')].filter((el) => el.offsetParent !== null)
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = (href) => (page === 'menu' && href === paths.menu ? 'page' : undefined)

  return (
    <header ref={headerRef} className={`nav${open ? ' nav--open' : scrolled ? ' nav--solid' : ''}`}>
      <div className="nav__inner">
        <a href={paths.home} className="nav__logo">
          <img src="/brand/logo-transparent.svg" alt={t.nav.logoAlt} width="1025" height="492" />
        </a>

        <nav className="nav__links" aria-label={t.nav.mainAria}>
          <ul className="nav__list">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} aria-current={current(l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--outline btn--sm" href={reserve}>
            {t.nav.reserve}
          </a>
          <LangSwitch page={page} />
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className={`nav__toggle${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? t.nav.close : t.nav.open}</span>
          <span className="nav__bar" aria-hidden="true" />
          <span className="nav__bar" aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            className="mnav"
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.dialogAria}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <nav aria-label={t.nav.mobileAria}>
              <ul>
                {[...links, { label: t.nav.reserve, href: reserve }].map((l, i) => (
                  <m.li
                    key={l.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease, delay: 0.08 + i * 0.05 }}
                  >
                    <a href={l.href} aria-current={current(l.href)} onClick={() => setOpen(false)}>
                      {l.label}
                    </a>
                  </m.li>
                ))}
              </ul>
            </nav>
            <div className="mnav__foot">
              <ElephantMark className="mnav__mark" />
              <LangSwitch page={page} className="lang--mobile" />
              <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
