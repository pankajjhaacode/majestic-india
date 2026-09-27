import { languages, useLang } from '../i18n/index.jsx'

// Links to the same page in every language; the current one is marked, not linked away.
export default function LangSwitch({ page, className = '' }) {
  const { lang, t } = useLang()
  return (
    <ul className={`lang ${className}`} aria-label={t.nav.langAria}>
      {Object.entries(languages).map(([code, l]) => (
        <li key={code}>
          <a
            href={l.paths[page] ?? l.paths.home}
            hrefLang={code}
            lang={code}
            aria-current={code === lang ? 'true' : undefined}
            title={l.name}
          >
            <span aria-hidden="true">{l.label}</span>
            <span className="sr-only">{l.name}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
