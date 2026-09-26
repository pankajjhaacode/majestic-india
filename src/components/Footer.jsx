import ElephantPattern from './ElephantPattern.jsx'
import { contact, navLinks, reserveHref } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <ElephantPattern className="footer__pattern" rows={2} />
      <div className="container footer__top">
        <img
          className="footer__logo"
          src="/brand/logo-transparent.svg"
          alt="Majestic India — Lounge & Restaurant Indien"
          width="1025"
          height="492"
          loading="lazy"
        />
      </div>
      <div className="container footer__cols">
        <nav aria-label="Pied de page">
          <h2 className="footer__h">Navigation</h2>
          <ul>
            {[...navLinks, { label: 'Réserver', href: reserveHref }].map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="footer__h">Contact</h2>
          <ul>
            <li>
              <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="footer__h">Suivez-nous</h2>
          <ul>
            <li>
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© 2026 Majestic India</p>
        <p>Lounge &amp; Restaurant Indien · Prix nets</p>
      </div>
    </footer>
  )
}
