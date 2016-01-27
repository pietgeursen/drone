var test = require('tape');
let HealthyStamp = require('../../src/stamps/healthy');

test("healthy", function(t) {
  const healthy = HealthyStamp({hp:100})
  healthy.setHp(100)
  t.is(healthy.getHp(), 100)
  healthy.setHp(50)
  t.is(healthy.getHp(), 50)
  healthy.setHp(-50)
  t.is(healthy.getHp(), 0, 'health cant be negative')
  t.end()
})
