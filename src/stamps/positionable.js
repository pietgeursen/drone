'use strict'
const stampit = require('stampit')
const V = require('sat').Vector;

const PositionableStamp = stampit({
  props: {
    position: new V(0,0) 
  }
})

module.exports = PositionableStamp 
