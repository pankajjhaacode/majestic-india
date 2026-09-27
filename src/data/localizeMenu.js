import { menu, signatures, findDish } from './menu.js'
import * as en from './menu.en.js'

// French keeps the printed "Français / English" names, shown as name + quieter alt.
// English swaps every string for its menu.en.js translation; prices are untouched.

function splitPrinted(printed) {
  const [name, ...alt] = printed.split(' / ')
  return { name, alt: alt.length ? alt.join(' / ') : undefined }
}

function localizeItem(item, lang) {
  if (lang !== 'en') return { ...item, ...splitPrinted(item.name) }
  const tr = en.items[item.name]
  return { ...item, name: tr?.name ?? item.name, alt: undefined, desc: item.desc && (tr?.desc ?? item.desc) }
}

const phrase = (text, lang) => (text == null || lang !== 'en' ? text : (en.phrases[text] ?? text))

function localizeSet(set, lang) {
  const title = lang === 'en' ? { name: phrase(set.name, lang), alt: undefined } : splitPrinted(set.name)
  return {
    ...set,
    ...title,
    summary: phrase(set.summary, lang),
    courses: set.courses.map((c) => ({
      title: phrase(c.title, lang),
      subtitle: phrase(c.subtitle, lang),
      note: phrase(c.note, lang),
      items: c.items.map((i) => localizeItem(i, lang)),
    })),
  }
}

export function localizeMenu(lang) {
  return menu.map((c) => ({
    id: c.id,
    ...(lang === 'en' ? en.categories[c.id] : { nav: c.nav, title: c.title, subtitle: c.subtitle, note: c.note }),
    groups: c.groups.map((g) => ({
      title: phrase(g.title, lang),
      note: phrase(g.note, lang),
      columns: g.columns?.map((col) => phrase(col, lang)),
      items: g.items.map((i) => localizeItem(i, lang)),
    })),
    sets: c.sets?.map((s) => localizeSet(s, lang)),
  }))
}

export function localizeSignatures(lang) {
  return signatures.map((s) => ({ ...s, dish: localizeItem(findDish(s.category, s.name), lang) }))
}
