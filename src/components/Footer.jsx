import ElephantPattern from './ElephantPattern.jsx'
import LangSwitch from './LangSwitch.jsx'
import { contact, navLinks, reserveHref } from '../data/site.js'
import { useLang } from '../i18n/index.jsx'

export default function Footer({ page }) {
  const { t, paths } = useLang()
  return (
    <footer className="footer">
      <ElephantPattern className="footer__pattern" rows={2} />
      <div className="container footer__top">
        <img className="footer__logo" src="/brand/logo-transparent.svg" alt={t.nav.logoAlt} width="1025" height="492" loading="lazy" />
      </div>
      <div className="container footer__cols">
        <nav aria-label={t.nav.footerAria}>
          <h2 className="footer__h">{t.footer.navigation}</h2>
          <ul>
            {[...navLinks(t, paths), { label: t.nav.reserve, href: reserveHref(paths) }].map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="footer__h">{t.footer.contact}</h2>
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
          <h2 className="footer__h">{t.footer.follow}</h2>
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
        <LangSwitch page={page} className="lang--footer" />
        <p>Lounge &amp; Restaurant Indien · {t.footer.net}</p>
      </div>
    </footer>
  )
}
