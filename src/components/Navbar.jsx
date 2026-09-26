import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { navLinks, reserveHref, contact } from '../data/site.js'
import { ease } from './Reveal.jsx'
import ElephantMark from './ElephantMark.jsx'

export default function Navbar({ page }) {
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

  const current = (href) => (page === 'menu' && href === '/carte/' ? 'page' : undefined)

  return (
    <header ref={headerRef} className={`nav${open ? ' nav--open' : scrolled ? ' nav--solid' : ''}`}>
      <div className="nav__inner">
        <a href="/" className="nav__logo">
          <img src="/brand/logo-transparent.svg" alt="Majestic India — Lounge & Restaurant Indien" width="1025" height="492" />
        </a>

        <nav className="nav__links" aria-label="Navigation principale">
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} aria-current={current(l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--outline btn--sm" href={reserveHref}>
            Réserver
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className={`nav__toggle${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
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
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <nav aria-label="Navigation mobile">
              <ul>
                {[...navLinks, { label: 'Réserver', href: reserveHref }].map((l, i) => (
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
              <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
