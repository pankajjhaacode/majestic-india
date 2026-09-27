import { createContext, useContext } from 'react'
import fr from './fr.js'
import en from './en.js'

// Each language is a separate static page tree; `paths` maps logical pages to URLs.
export const languages = {
  fr: { label: 'FR', name: 'Français', dict: fr, paths: { home: '/', menu: '/carte/' } },
  en: { label: 'EN', name: 'English', dict: en, paths: { home: '/en/', menu: '/en/menu/' } },
}

const LangContext = createContext('fr')

export function LangProvider({ lang, children }) {
  return <LangContext.Provider value={languages[lang] ? lang : 'fr'}>{children}</LangContext.Provider>
}

export function useLang() {
  const lang = useContext(LangContext)
  const { dict, paths } = languages[lang]
  return { lang, t: dict, paths }
}
