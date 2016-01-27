'use strict'
var test = require('tape')
let PositionableStamp = require('../../src/stamps/positionable')

test('positionable', function (t) {
  const positionable = PositionableStamp({pos:{x:10, y:5}})
  t.is(positionable.position.x, 0, 'is initialised with x = 0')  
  t.is(positionable.position.y, 0, 'is initialised with y = 0')  
  t.end()
})
