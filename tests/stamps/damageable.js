'use strict'
var test = require('tape');
let DamageableStamp = require('../../src/stamps/damageable');

test("damageable", function(t) {
  const damageable = DamageableStamp({hp: 100})
  t.is(damageable.getHp(), 100, 'getHp is public and gets hp from the healthy stamp')
  damageable.damage(10)
  t.is(damageable.getHp(), 90, 'damage reduces the hp')
  t.notOk(damageable.setHp, 'setHp() is a protected method')
  t.end()
})
