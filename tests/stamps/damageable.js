'use strict'
var test = require('tape')
let DamageableStamp = require('../../src/stamps/damageable')

test('damageable', function (t) {
  const damageable = DamageableStamp({hp: 100})
  t.is(damageable.getHp(), 100, 'getHp() is public and gets hp from the healthy stamp')
  t.notOk(damageable.setHp, 'setHp() is a private method')
  t.is(damageable.damage(10), 90, 'damage() returns the new hp')
  t.is(damageable.getHp(), 90, 'damage() reduces the hp')
  t.end()
})
