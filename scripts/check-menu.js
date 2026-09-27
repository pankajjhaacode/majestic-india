// Sanity check for the menu data and translations — run with `pnpm check:menu`.
import assert from 'node:assert/strict'
import { menu, signatures, findDish } from '../src/data/menu.js'
import * as en from '../src/data/menu.en.js'
import fr from '../src/i18n/fr.js'
import enUi from '../src/i18n/en.js'

const PRICE = /^\d{1,3},\d{2} €$/
const ids = new Set()
let count = 0

const hasPhrase = (text, where) => text == null || assert.ok(text in en.phrases, `menu.en.js phrases: missing "${text}" (${where})`)
const hasItem = (item, where) => {
  const tr = en.items[item.name]
  assert.ok(tr?.name, `menu.en.js items: missing "${item.name}" (${where})`)
  if (item.desc) assert.ok(tr.desc, `menu.en.js items: missing desc for "${item.name}" (${where})`)
}

for (const cat of menu) {
  assert.ok(!ids.has(cat.id), `duplicate category id ${cat.id}`)
  ids.add(cat.id)
  assert.ok(en.categories[cat.id]?.nav && en.categories[cat.id]?.title, `menu.en.js categories: missing ${cat.id}`)
  for (const group of cat.groups) {
    hasPhrase(group.title, cat.id)
    hasPhrase(group.note, cat.id)
    group.columns?.forEach((c) => hasPhrase(c, cat.id))
    const names = new Set()
    for (const item of group.items) {
      assert.ok(!names.has(item.name), `duplicate item "${item.name}" in ${cat.id}`)
      names.add(item.name)
      hasItem(item, cat.id)
      if (group.columns) {
        assert.equal(item.prices?.length, group.columns.length, `${item.name}: prices must match columns`)
        item.prices.filter(Boolean).forEach((p) => assert.match(p, PRICE, item.name))
      } else {
        assert.match(item.price ?? '', PRICE, `${cat.id} / ${item.name}: bad price`)
      }
      count++
    }
  }
  for (const set of cat.sets ?? []) {
    assert.match(set.price, PRICE, set.name)
    hasPhrase(set.name, set.name)
    hasPhrase(set.summary, set.name)
    for (const c of set.courses) {
      hasPhrase(c.title, set.name)
      hasPhrase(c.subtitle, set.name)
      hasPhrase(c.note, set.name)
      c.items.forEach((i) => hasItem(i, set.name))
    }
  }
}

signatures.forEach((s) => findDish(s.category, s.name))

// UI dictionaries must have the same shape in every language.
function shape(obj, path = '') {
  if (typeof obj === 'string') return [path]
  if (Array.isArray(obj)) return [`${path}[${obj.length}]`, ...obj.flatMap((v, i) => shape(v, `${path}[${i}]`))]
  return Object.keys(obj).sort().flatMap((k) => shape(obj[k], `${path}.${k}`))
}
assert.deepEqual(shape(enUi), shape(fr), 'i18n/en.js and i18n/fr.js keys differ')

console.log(`menu ok: ${menu.length} categories, ${count} priced items, ${signatures.length} signatures, fr/en complete`)
