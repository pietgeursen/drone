var test = require('tape');
let DamageableStamp = require('../src/stamps/damageable');

test("damageable", function(t) {
  const damageable = DamageableStamp({hp:100})
  t.is(damageable.hp, 100)
  damageable.damage(10)
  t.is(damageable.hp, 90)
  t.end()
})
