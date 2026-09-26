// Sanity check for src/data/menu.js — run with `pnpm check:menu`.
import assert from 'node:assert/strict'
import { menu, signatures, findDish } from '../src/data/menu.js'

const PRICE = /^\d{1,3},\d{2} €$/
const ids = new Set()
let count = 0

for (const cat of menu) {
  assert.ok(!ids.has(cat.id), `duplicate category id ${cat.id}`)
  ids.add(cat.id)
  for (const group of cat.groups) {
    const names = new Set()
    for (const item of group.items) {
      assert.ok(!names.has(item.name), `duplicate item "${item.name}" in ${cat.id}`)
      names.add(item.name)
      if (group.columns) {
        assert.equal(item.prices?.length, group.columns.length, `${item.name}: prices must match columns`)
        item.prices.filter(Boolean).forEach((p) => assert.match(p, PRICE, item.name))
      } else {
        assert.match(item.price ?? '', PRICE, `${cat.id} / ${item.name}: bad price`)
      }
      count++
    }
  }
  for (const set of cat.sets ?? []) assert.match(set.price, PRICE, set.name)
}

signatures.forEach((s) => findDish(s.category, s.name))
console.log(`menu ok: ${menu.length} categories, ${count} priced items, ${signatures.length} signatures`)
