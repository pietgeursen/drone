'use strict'
const stampit = require('stampit')
const V = require('sat').Vector;

const PositionableStamp = stampit({
  methods: {
    distanceTo(otherPosition){
     return this.position.sub(otherPosition.position).len()
    }
  },
  init(context){
    this.position = new V(context.args[0].x,context.args[0].y) 
  }
})

module.exports = PositionableStamp 
