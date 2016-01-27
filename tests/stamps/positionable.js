'use strict'
var test = require('tape')
let PositionableStamp = require('../../src/stamps/positionable')

test('positionable', function (t) {
  const position1 = PositionableStamp(null, {x:0, y:0})
  const position2 = PositionableStamp(null, {x:0, y:5.55})
  t.is(position1.position.x, 0, 'is initialised with x = 0')  
  t.is(position1.position.y, 0, 'is initialised with y = 0')  
  t.is(position1.distanceTo(position2.position), 5.55)
  t.end()
})
